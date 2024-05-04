import { FormData } from './types';
import React from 'react';
import styles from './Stepper.module.css';

interface TermsConditionsProps {
    termsAccepted: boolean;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    enabled: boolean;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ termsAccepted, setFormData, enabled }) => {
    const handleCheckboxChange = () => {
        setFormData(prev => ({
            ...prev,
            termsAccepted: !prev.termsAccepted
        }));
    };

    return (
        <div className={styles.formSection} style={{ opacity: enabled ? 1 : 0.5, pointerEvents: enabled ? 'all' : 'none' }}>
            <h2>Terms & Conditions</h2>
            <label className={styles.termsLabel}>
                <input className={styles.checkboxField} type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} />
                By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
            </label>
            <ul className={styles.termsList}>
                <li>✓ I confirm that I am the authorized person to upload bank statements on behalf of my company</li>
                <li>✓ I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated</li>
                <li>✓ I understand that this is a general report based on the bank statements and CrediLinq is not providing a solution or guiding me for my business growth</li>
                <li>✓ I have read and understand the <a href="https://smehealthcheck.credilinq.ai/terms-and-conditions"> Terms & Conditions</a>.</li>
            </ul>
        </div>
    );
};

export default TermsConditions;

