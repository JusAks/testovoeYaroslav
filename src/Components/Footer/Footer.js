import React  from 'react';
import st from './Footer.module.scss'

const Footer = ()=>{
    return (
        <div className={st.container}>
            <div className={st.map}>
                 <img src='/pinMap.png' alt=''></img>
            </div>
            <div className={st.info}>
                <div className={st.left}>
                    <div className={st.follow}>
                        Follow us on:
                    </div>
                    <div className={st.links}>
                        <img src="/link1.png" alt=""/>
                        <img src="/link2.png" alt=""/>
                    </div>
                </div>
                <div className={st.right}>
                    All New Tech LTD © All Rights Reserved 2022
                </div>
            </div>
        </div>
    );
};

export default Footer;