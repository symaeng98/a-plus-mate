import React from 'react';
import backgroundImage from '../assets/homeBackgroundImage.png'
import BackgroundImage from "../components/BackgroundImage";
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import styles from "../styles/Home.module.css"

// TODO
// 버튼 클릭 시 #CEC8D8로 색깔 바꾸기
function Home(props) {
    return (
        <div className={styles.home}>
            <BackgroundImage url={backgroundImage}/>
            <div className={styles.description}>
                <div>
                    <span className={styles.title}>에이플 메이트</span><br/>
                    <div className={styles.detail}>
                        교수님이 주신
                        <span style={{color:"red"}}> 강의 자료</span>
                        , 내가 직접
                        <span style={{color:"green"}}> 정리한 자료</span>
                        를 문제로 만들어보세요!
                        <p style={{fontSize:"14px", color:"grey"}}>현재 PC에서만 이용 가능합니다</p>
                    </div>
                    <div>
                        <Link to={"/main"}>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop:"150px"}}>
                                <Button type="big" content={"문제 만들기"}></Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;