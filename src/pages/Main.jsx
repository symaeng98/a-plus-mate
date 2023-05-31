import React, {useState} from 'react';
import Button from '../components/Button';
import uploadIcon from '../assets/upload.svg';
import { Link, useNavigate } from 'react-router-dom';
import UploadButton from '../components/UploadButton';
import Loading from '../pages/Loading';
import QuizGenerateButton from '../components/QuizGenerateButton';
import styles from '../styles/Main.module.css'
import axios from 'axios';

const Main = (props) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFileUpload = (file) => {
        // 파일 업로드 처리 로직
        setUploadedFile(file);
    };
    
    const navigate = useNavigate();

    const sendPdfToServer = () => {
        const backendServerUrl = process.env.React_APP_BACKEND_SERVER_URL;
        const formData = new FormData();
        setIsLoading(true);
        formData.append('pdf', uploadedFile);
        axios.post(backendServerUrl + '/upload', formData, {
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
            alert("현재 사용량이 많아 1분 뒤에 다시 시도해주세요.")
        })
        .finally (()=>{
            setIsLoading(false);
        });

    };

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles["main"]}>
                    <div className={styles["title"]}>
                        <span>강의 교안 업로드하기</span>
                        <p>강의 교안이나 정리한 내용을 업로드해주세요.</p>
                        <p style={{ color: "red" }}>.pdf 파일로 업로드해야합니다</p>
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
            )}
        </div>
    );
};

export default Main;