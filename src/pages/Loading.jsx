import React from 'react';
import styles from '../styles/Loading.module.css'

function Loading(props) {
    return (
        <div className={styles["loading"]}>
            <div>
                <img src="/loading.gif" alt="loading"/>
            </div>
            <p>교안 양에 따라 최대 1분 정도 소요될 수 있습니다</p>
        </div>
    );
}

export default Loading;