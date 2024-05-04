import React, { useEffect, useState } from 'react';
import styles from './SubmittedCompaniesModal.module.css';

interface Company {
    id: number;
    companyName: string;
    companyUEN: string;
    applicantEmail: string;
    applicantPhoneNumber: string;
    position: string;
    termsAccepted: boolean;
    documentURLs: string[];
    createdAt: string;
    updatedAt: string;
}

interface SubmittedCompaniesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubmittedCompaniesModal: React.FC<SubmittedCompaniesModalProps> = ({ isOpen, onClose }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            const fetchCompanies = async () => {
                try {
                    const response = await fetch('http://localhost:3001/companies');
                    if (!response.ok) throw new Error('Failed to fetch companies');
                    const data: Company[] = await response.json();
                    setCompanies(data);
                    setError(null);
                } catch (err) {
                    console.error('Error fetching companies:', err);
                    setError('Could not fetch company data');
                }
            };

            fetchCompanies();
        }
    }, [isOpen]);

    const extractFilename = (url: string) => url.substring(url.lastIndexOf('/') + 1);

    if (!isOpen) return null;

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>✖</button>
                <h1 className={styles.title}>Submitted Companies</h1>
                <div className={styles.step}>
                    {error ? (
                        <p className={styles.errorMessage}>{error}</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Company UEN</th>
                                    <th>Applicant Email</th>
                                    <th>Applicant Phone Number</th>
                                    <th>Position</th>
                                    <th>Terms Accepted</th>
                                    <th>Documents</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map(company => (
                                    <tr key={company.id}>
                                        <td>{company.companyName}</td>
                                        <td>{company.companyUEN}</td>
                                        <td>{company.applicantEmail}</td>
                                        <td>{company.applicantPhoneNumber}</td>
                                        <td>{company.position}</td>
                                        <td>{company.termsAccepted ? 'Yes' : 'No'}</td>
                                        <td>
                                            <ul className={styles.documentList}>
                                                {company.documentURLs.map(url => (
                                                    <li key={url}>
                                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                                            {extractFilename(url)}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubmittedCompaniesModal;
