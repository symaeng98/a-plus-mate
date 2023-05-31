import React, { useState, useEffect } from 'react';
import styles from "../styles/Result.module.css"
import DownloadButton from '../components/DownloadButton';
import {Link, useLocation} from 'react-router-dom';

// TODO
// 버튼 클릭 시 #CEC8D8로 색깔 바꾸기
function Result(props) {
    const location = useLocation();
    const data = location.state.data;
    const surveyUrl = process.env.React_APP_Survey_URL;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 900); // 화면 너비가 768px 이하인 경우 핸드폰으로 간주
        };

        handleResize(); // 초기 로드 시 크기 확인

        window.addEventListener('resize', handleResize); // 창 크기 변경 시 크기 확인

        return () => {
        window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
        };
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.survey}>
                <div style={{height:"100%"}}>
                    <div className={styles.survey_detail}>
                        <p className={styles.survey_greetings}>안녕하세요!</p>
                        <p>저희는 세종대학교 디자인 씽킹 과목을 수강하고 있는</p>
                        <span style={{fontSize:"40px", fontWeight:"700",color:"#BB2D0E"}}>에이플 메이트</span>
                        <span> 입니다</span>
                        <p>저희가 만든 서비스에 대한 간단한 설문조사를 해주시면 추첨을 통해</p>
                        <span style={{color:"green"}}>스타벅스 아메리카노</span>
                        <span>를 드리니 많은 참여 부탁드립니다! </span>
                        <p style={{fontSize:"13px"}}>(1-2분 소요)</p>
                        <div>
                            <Link to={surveyUrl} target="_blank" rel="noopener noreferrer">설문조사 링크</Link>
                            <span >를 사용하셔도 됩니다!</span>
                        </div>
                    </div>
                    <div style={{alignItems:"left" ,overflow:"auto"}}>
                        <iframe title='form' src={surveyUrl} 
                        style = {{
                            width: isMobile ? '400px' : '700px',
                        }}
                        height="3600" frameBorder="0" marginHeight="0" marginWidth="0"
                        >로드 중…</iframe>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <div style={{width: "350px"}}>
                    <span className={styles.title}>완성!</span>
                    <p className={styles.detail}>다운로드 버튼을 눌러 생성된 문제를 확인해보세요!
                        <DownloadButton data={data} content={"다운로드"}></DownloadButton>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Result;