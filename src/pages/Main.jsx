import React, {useState} from 'react';
import Button from '../components/Button';
import uploadIcon from '../assets/upload.svg';
import { Link, useNavigate } from 'react-router-dom';
import UploadButton from '../components/UploadButton';
import QuizGenerateButton from '../components/QuizGenerateButton';
import styles from '../styles/Main.module.css'
import axios from 'axios';
import pdf from '../files/sample.pdf';

const Main = () => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (file) => {
        // 파일 업로드 처리 로직
        setUploadedFile(file);
    };
    
    const navigate = useNavigate();

    const sendPdfToServer = () => {
        const backendServerUrl = "http://localhost:8000/pdf";
        const formData = new FormData();
        formData.append('pdf', uploadedFile);
        axios.post(backendServerUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'blob'
        })
        .then(response => {
            const data = response.data;
            console.log(data); // 외부 URL로 전송된 파일의 정보 출력

            navigate('/result', {state: {data}});
        })
        .catch(error => {
            alert("오류가 발생했습니다.")
        })

    };

    return (
        <div className={styles["main"]}>
            <div className={styles["title"]}>
                <span>강의 교안 업로드하기</span>
                <p>강의 교안이나 정리한 내용을 업로드해주세요.</p>
                <p style={{ color: "red" }}>무조건 PDF로 업로드해야됨미다</p>
            </div>

            <div>
                <UploadButton onFileUpload={handleFileUpload} content="PDF 업로드" icon={uploadIcon} />
            </div>

            <div className={styles["navigation"]}>
                <Link style={{ marginRight: "auto" }} to={"/"}>
                    <Button type="prev" content="이전으로" />
                </Link>
                <QuizGenerateButton uploadedFile={uploadedFile} content="문제 만들기" onFileUpload={sendPdfToServer} />
            </div>
        </div>
    );
};

export default Main;