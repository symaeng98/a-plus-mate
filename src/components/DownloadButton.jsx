import React from 'react';
import styles from '../styles/Button.module.css'
function DownloadButton(props) {
    const downloadFile = () => {
        const url = window.URL.createObjectURL(props.data);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'output.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <button className={styles.download} onClick={downloadFile}>{props.content}</button>
    );
}

export default DownloadButton;