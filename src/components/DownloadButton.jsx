import React from 'react';
import styles from '../styles/Button.module.css'

function DownloadButton(props) {
    const downloadFile = () => {
        // const url = './files/sample.pdf';
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'sample.pdf');
        // document.body.appendChild(link);
        // link.click();
        // const url = URL.createObjectURL(data);
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = 'data.txt';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url);
    };

    return (
        <div>
            <button onClick={downloadFile} className={styles["big"]}>
                <span className={styles["big-span"]}>{props.content}</span>
            </button>
        </div>
    );
}

export default DownloadButton;