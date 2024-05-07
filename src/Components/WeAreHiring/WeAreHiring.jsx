import React from 'react';
import st from './WeAreHiring.module.scss'

const WeAreHiring = ()=>{
    return (
        <div className={st.container}>
            <div className={st.backImg}>
                <img src="/Group%202.png" alt=""/>
            </div>
            <div className={st.block1}>
                <div>
                    <img src="/Hiring%20icon.png" alt=""/>
                </div>
                <div className={st.text}>
                    <h2>We are Hiring</h2>
                </div>
            </div>
            <div className={st.block2}>
                <button>UPLOAD YOUR CV</button>
            </div>
        </div>
    );
};

export default WeAreHiring;