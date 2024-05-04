import React from 'react';
import styles from './Stepper.module.css';

interface CompanyInfoProps {
    companyName: string;
    companyUEN: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    enabled: boolean;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyName, companyUEN, handleChange, enabled }) => {
    return (
        <div className={styles.formSection} style={{ opacity: enabled ? 1 : 0.5, pointerEvents: enabled ? 'all' : 'none' }}>
            <h2>Company Information</h2>
            <input className={styles.inputField} name="companyName" type="text" value={companyName} onChange={handleChange} placeholder="Company Name" />
            <input className={styles.inputField} name="companyUEN" type="text" value={companyUEN} onChange={handleChange} placeholder="Company UEN" />
        </div>
    );
};

export default CompanyInfo;
