import React from 'react';

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
        <button style={{backgroundColor:"white", border:"none", fontSize : "24px", color:"#B9A3F8", fontWeight : "800"}} onClick={downloadFile}>{props.content}</button>
    );
}

export default DownloadButton;