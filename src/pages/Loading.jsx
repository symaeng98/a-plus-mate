import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import styles from '../styles/Loading.module.css'

function Loading(props) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);  // 페이지 URL을 보고
    }, []);
    return (
        <div className={styles["loading"]}>
            <div>
                <img src="/pacman.gif" alt="loading"/>
            </div>
            <p>교안 양에 따라 최대 1분 정도 소요될 수 있습니다</p>
        </div>
    );
}

export default Loading;