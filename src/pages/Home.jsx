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
                    <span className={styles.title}>에이플 메이트</span>
                    <p className={styles.detail}>강의 교안을 올리고 문제를 생성해보세요!</p>
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