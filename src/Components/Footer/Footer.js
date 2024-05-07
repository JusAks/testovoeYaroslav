import React , { useEffect , useState } from 'react';
import st from './Footer.module.scss'

const Footer = ()=>{
    const [showHide,setShowHide]=useState(false)
    useEffect ( ()=>{
        window.addEventListener("resize" , ()=>{
            if(window.innerWidth<=570 && !showHide){
                setShowHide(true)
            }
            if(window.innerWidth>570 && showHide){
                setShowHide(false)
            }
        })
        return ()=>{
            window.removeEventListener("resize",null)
        }
    } , [window.innerWidth] );
    return (
        <div className={st.container}>
            <div className={st.map}>
                {showHide && <img src='/pinMap.png' alt=''></img>}
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