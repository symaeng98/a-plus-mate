import React from 'react';
import styles from '../styles/Loading.module.css'

function Loading(props) {
    return (
        <div className={styles["loading"]}>
            <div>
                <img src="/loading.gif" alt="loading"/>
            </div>
            <p>문제를 생성 중입니다.</p>
        </div>
    );
}

export default Loading;