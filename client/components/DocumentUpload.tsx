import React from 'react';
import styles from './Stepper.module.css';

interface DocumentUploadProps {
    files: File[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemoveFile: (index: number) => void; 
    enabled: boolean;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ files, handleChange,handleRemoveFile, enabled }) => {
    return (
        <div className={styles.formSection} style={{ opacity: enabled ? 1 : 0.5, pointerEvents: enabled ? 'all' : 'none' }}>
            <h2>Upload Documents</h2>
            <div className={styles.uploadArea}>
                <input id="fileInput" className={styles.hiddenInput} type="file" multiple name="files" onChange={handleChange} accept="application/pdf" />
                <label htmlFor="fileInput" className={styles.fileInputArea}>
                    Click to upload or drag and drop Bank Statements
                </label>
                <p>PDFs only. Upload up to 6 documents.</p>
                {files.map((file, index) => (
                    <div key={index} className={styles.fileChip}>
                        <span>{file.name}</span>
                        <span className={styles.closeIcon} onClick={() => handleRemoveFile(index)}>✖</span>
                    </div>
                ))}
            </div>
            <div className={styles.instructions}>
                <ul>
                    <li>PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months.</li>
                    <li>Example: If today is 03 May 24, then please upload bank statements from Nov 23 to Apr 24 (both months inclusive).</li>
                    <li>If your company is multi-banked, then please upload 6 months bank statements for each bank account</li>
                    <li>If your file is password protected, we request you to remove the password and upload the file to avoid submission failure</li>
                    <li>In case you are facing any issue while uploading bank statements, Please contact us on support@crediling.ai</li>
                </ul>
            </div>
        </div>
    );
};

export default DocumentUpload;
