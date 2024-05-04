import React from 'react';
import styles from './Stepper.module.css';

interface ApplicantInfoProps {
    formData: {
        fullName: string;
        email: string;
        confirmEmail: string;
        mobileNumber: string;
        position: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    enabled: boolean;
}

const ApplicantInfo: React.FC<ApplicantInfoProps> = ({ formData, handleChange, enabled }) => {
    return (
        <div className={styles.formSection} style={{ opacity: enabled ? 1 : 0.5, pointerEvents: enabled ? 'all' : 'none' }}>
            <h2>Applicant Information</h2>
            <input className={styles.inputField} name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
            <input className={styles.inputField} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
            <input className={styles.inputField} name="confirmEmail" type="email" value={formData.confirmEmail} onChange={handleChange} placeholder="Re-enter Email Address" />
            <input className={styles.inputField} name="mobileNumber" type="text" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" />
            <input className={styles.inputField} name="position" type="text" value={formData.position} onChange={handleChange} placeholder="Position within company" />
        </div>
    );
};

export default ApplicantInfo;
