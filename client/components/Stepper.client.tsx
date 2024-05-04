// import React, { useState, useEffect, ChangeEvent } from 'react';
// import CompanyInfo from './CompanyInfo';
// import ApplicantInfo from './ApplicantInfo';
// import DocumentUpload from './DocumentUpload';
// import TermsConditions from './TermsConditions';
// import SubmittedCompaniesModal from './SubmittedCompaniesModal';
// import styles from './Stepper.module.css';
// import { FormData as FormDataType } from './types';

// interface Company {
//     id: number;
//     companyName: string;
//     companyUEN: string;
//     applicantEmail: string;
//     applicantPhoneNumber: string;
//     position: string;
//     termsAccepted: boolean;
//     documentURLs: string[];
//     createdAt: string;
//     updatedAt: string;
// }

// const Stepper = () => {
//     const [formData, setFormData] = useState<FormDataType>({
//         companyName: '',
//         companyUEN: '',
//         fullName: '',
//         email: '',
//         confirmEmail: '',
//         mobileNumber: '',
//         position: '',
//         files: [],
//         termsAccepted: false,
//     });

//     const [stepEnabled, setStepEnabled] = useState({
//         applicantInfo: false,
//         uploadDocs: false,
//         termsConditions: false,
//     });

//     const [modalOpen, setModalOpen] = useState(false);
//     const [submittedCompanies, setSubmittedCompanies] = useState<Company[]>([]);

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value, files } = e.target;
//         if (name === 'files' && files) {
//             const newFiles = Array.from(files).filter(file => file.type === 'application/pdf');
//             setFormData(prev => ({
//                 ...prev,
//                 files: [...prev.files, ...newFiles].slice(0, 6)
//             }));
//         } else {
//             setFormData(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleRemoveFile = (index: number) => {
//         setFormData(prev => ({
//             ...prev,
//             files: prev.files.filter((_, i) => i !== index)
//         }));
//     };

//     useEffect(() => {
//         const infoComplete = formData.fullName && formData.position;

//         setStepEnabled({
//             applicantInfo: Boolean(formData.companyUEN && formData.companyName),
//             uploadDocs: Boolean(infoComplete),
//             termsConditions: Boolean(formData.files.length > 0),
//         });
//     }, [formData]);

//     const handleSubmit = async (event: { preventDefault: () => void; }) => {
//         event.preventDefault();
    
//         const emailValid = /\S+@\S+\.\S+/.test(formData.email);
//         const phoneValid = /^\+65\d{8}$/.test(formData.mobileNumber);
//         const emailMatch = formData.email === formData.confirmEmail;
    
//         if (!emailValid || !phoneValid || !emailMatch) {
//             alert('Please enter a valid email, ensure emails match, and a 8-digit mobile number starting with +65.');
//             return;
//         }
    
//         if (formData.termsAccepted && stepEnabled.termsConditions) {
//             const formDataObj = new FormData();
//             formDataObj.append('companyName', formData.companyName);
//             formDataObj.append('companyUEN', formData.companyUEN);
//             formDataObj.append('applicantEmail', formData.email);
//             formDataObj.append('applicantPhoneNumber', formData.mobileNumber);
//             formDataObj.append('position', formData.position);
//             formDataObj.append('termsAccepted', 'true');
    
//             formData.files.forEach(file => {
//                 formDataObj.append('files', file);
//             });
    
//             try {
//                 const response = await fetch('http://localhost:3001/companies', {
//                     method: 'POST',
//                     body: formDataObj,
//                 });
    
//                 if (response.ok) {
//                     const data: Company[] = await response.json();
//                     setSubmittedCompanies(Array.isArray(data) ? data : []);
//                     setModalOpen(true);
//                 } else {
//                     alert('Failed to submit form. Please try again.');
//                 }
                
//             } catch (error) {
//                 console.error('Error submitting form:', error);
//                 alert('Failed to submit form. Please try again.');
//             }
//         } else {
//             alert('Please fill all required fields, upload documents, and accept the terms and conditions.');
//         }
//     };
    

//     const handleModalClose = () => setModalOpen(false);

//     return (
//         <>
//             <form onSubmit={handleSubmit} className={styles.applicationForm}>
//                 <h1 className={styles.title}>Application Process</h1>
//                 <div className={styles.step}>
//                     <div className={styles.stepNumber}>1</div>
//                     <CompanyInfo 
//                         companyName={formData.companyName} 
//                         companyUEN={formData.companyUEN} 
//                         handleChange={handleChange} 
//                         enabled={true} 
//                     />
//                 </div>
//                 <div className={styles.step}>
//                     <div className={styles.stepNumber}>2</div>
//                     <ApplicantInfo 
//                         formData={formData} 
//                         handleChange={handleChange} 
//                         enabled={stepEnabled.applicantInfo} 
//                     />
//                 </div>
//                 <div className={styles.step}>
//                     <div className={styles.stepNumber}>3</div>
//                     <DocumentUpload 
//                         files={formData.files} 
//                         handleChange={handleChange} 
//                         handleRemoveFile={handleRemoveFile} 
//                         enabled={stepEnabled.uploadDocs} 
//                     />
//                 </div>
//                 <div className={styles.step}>
//                     <div className={styles.stepNumber}>4</div>
//                     <TermsConditions 
//                         termsAccepted={formData.termsAccepted} 
//                         setFormData={setFormData} 
//                         enabled={stepEnabled.termsConditions} 
//                     />
//                 </div>
//                 <div className={styles.navigationButtons}>
//                     <button className={styles.button} type="submit">Submit</button>
//                 </div>
//             </form>
//             <SubmittedCompaniesModal 
//                 isOpen={modalOpen} 
//                 onClose={handleModalClose} 
//                 // companies={submittedCompanies} 
//             />
//         </>
//     );
// };

// export default Stepper;












import React, { useState, useEffect, ChangeEvent } from 'react';
import CompanyInfo from './CompanyInfo';
import ApplicantInfo from './ApplicantInfo';
import DocumentUpload from './DocumentUpload';
import TermsConditions from './TermsConditions';
import SubmittedCompaniesModal from './SubmittedCompaniesModal';
import styles from './Stepper.module.css';
import { FormData as FormDataType } from './types';

const Stepper = () => {
    const [formData, setFormData] = useState<FormDataType>({
        companyName: '',
        companyUEN: '',
        fullName: '',
        email: '',
        confirmEmail: '',
        mobileNumber: '',
        position: '',
        files: [],
        termsAccepted: false,
    });

    const [stepEnabled, setStepEnabled] = useState({
        applicantInfo: false,
        uploadDocs: false,
        termsConditions: false,
    });

    const [modalOpen, setModalOpen] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === 'files' && files) {
            const newFiles = Array.from(files).filter(file => file.type === 'application/pdf');
            setFormData(prev => ({
                ...prev,
                files: [...prev.files, ...newFiles].slice(0, 6)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleRemoveFile = (index: number) => {
        setFormData(prev => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index)
        }));
    };

    useEffect(() => {
        const infoComplete = formData.fullName && formData.position;

        setStepEnabled({
            applicantInfo: Boolean(formData.companyUEN && formData.companyName),
            uploadDocs: Boolean(infoComplete),
            termsConditions: Boolean(formData.files.length > 0),
        });
    }, [formData]);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const emailValid = /\S+@\S+\.\S+/.test(formData.email);
        const phoneValid = /^\+65\d{8}$/.test(formData.mobileNumber);
        const emailMatch = formData.email === formData.confirmEmail;

        if (!emailValid || !phoneValid || !emailMatch) {
            alert('Please enter a valid email, ensure emails match, and a 8-digit mobile number starting with +65.');
            return;
        }

        if (formData.termsAccepted && stepEnabled.termsConditions) {
            const formDataObj = new FormData();
            formDataObj.append('companyName', formData.companyName);
            formDataObj.append('companyUEN', formData.companyUEN);
            formDataObj.append('applicantEmail', formData.email);
            formDataObj.append('applicantPhoneNumber', formData.mobileNumber);
            formDataObj.append('position', formData.position);
            formDataObj.append('termsAccepted', 'true');

            formData.files.forEach(file => {
                formDataObj.append('files', file);
            });

            try {
                const response = await fetch('http://localhost:3001/companies', {
                    method: 'POST',
                    body: formDataObj,
                });

                if (response.ok) {
                    setModalOpen(true);
                } else {
                    alert('Failed to submit form. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Failed to submit form. Please try again.');
            }
        } else {
            alert('Please fill all required fields, upload documents, and accept the terms and conditions.');
        }
    };

    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.applicationForm}>
                <h1 className={styles.title}>Application Process</h1>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <CompanyInfo 
                        companyName={formData.companyName} 
                        companyUEN={formData.companyUEN} 
                        handleChange={handleChange} 
                        enabled={true} 
                    />
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <ApplicantInfo 
                        formData={formData} 
                        handleChange={handleChange} 
                        enabled={stepEnabled.applicantInfo} 
                    />
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <DocumentUpload 
                        files={formData.files} 
                        handleChange={handleChange} 
                        handleRemoveFile={handleRemoveFile} 
                        enabled={stepEnabled.uploadDocs} 
                    />
                </div>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <TermsConditions 
                        termsAccepted={formData.termsAccepted} 
                        setFormData={setFormData} 
                        enabled={stepEnabled.termsConditions} 
                    />
                </div>
                <div className={styles.navigationButtons}>
                    <button className={styles.button} type="submit">Submit</button>
                </div>
            </form>
            <SubmittedCompaniesModal 
                isOpen={modalOpen} 
                onClose={handleModalClose} 
            />
        </>
    );
};

export default Stepper;
