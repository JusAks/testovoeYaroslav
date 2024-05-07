import React , { useState } from 'react';
import st from "./Header.module.scss";

const Header = ()=>{
    const [curLang,setCurLang]=useState(1)
    let lang1 = curLang === 1? st.choosen:null;
    let lang2 = curLang === 2? st.choosen:null;

    const [isOpen,setIsOpen]=useState(false)
    let slideMenu = isOpen? st.slideMenu + " " + st.shown: st.slideMenu
    return (
        <div className={ st.container }>
            <img src="/logo.png" alt=""/>
            <div className={ st.menuDesc }>
                <div className={ st.item }>Home</div>
                <div className={ st.item }>About</div>
                <div className={ st.item }>Services</div>
                <div className={ st.item }>Stories</div>
                <div className={ st.item }>Get in Touch</div>
                <button>JOIN US</button>
                <div className={ st.language }>
                    <div onClick={ ()=>{
                        setCurLang ( 1 )
                    } } className={ lang1 }>
                        <img src="/1.png" alt=""/>
                    </div>
                    <div onClick={ ()=>{
                        setCurLang ( 2 )
                    } } className={ lang2 }>
                        <img src="/2.png" alt=""/>
                    </div>


                </div>
            </div>
            <div onClick={()=>{setIsOpen(true)}} className={ st.menuMob }>
                <img src="/menu.png" alt=""/>
            </div>
            <div className={ slideMenu }>
                <div className={st.menuContainer}>
                    <div onClick={()=>{setIsOpen(false)}} className={st.close}>
                        <img src="/close%20(2).png" alt=""/>
                    </div>
                    <div className={st.language}>
                        <img src="/icon.png" alt=""/>
                        <span> English</span>
                    </div>
                    <div className={ st.item }>Home</div>
                    <div className={ st.item }>About</div>
                    <div className={ st.item }>Services</div>
                    <div className={ st.item }>Stories</div>
                    <div className={ st.item }>Get in Touch</div>
                    <button>JOIN US</button>
                </div>
            </div>
        </div>
    );
};

export default Header;