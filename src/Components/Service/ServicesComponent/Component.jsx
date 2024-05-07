import React from 'react';
import st from "./Component.module.scss";

const Component = ({a,setA,number,title,text})=>{
    let caSe = a===number
    return (
        <div style={ { width : caSe ? "263px" : "60px" } } className={ st.wrapper }>
            <div className={ caSe ? st.large + " " + st.visible : st.large }>
                <div className={ st.top }>
                    <div className={ st.number }>
                        <div>0{number}.</div>
                        <div className={ st.line }></div>
                    </div>
                    <div onClick={ ()=>{
                        setA ( null )
                    } } className={ st.close }>
                        <img src="/Close.png" alt=""/>
                    </div>
                </div>
                <div className={ st.center }>
                    <div className={ st.header }>
                        { title }
                    </div>
                    <div className={ st.content }>
                        {text }
                    </div>
                </div>

            </div>
            <div onClick={ ()=>{
                setA ( number )
            } } style={ { opacity : caSe ? "0" : "1" } } className={ st.small }>
                <div className={ st.number }>
                    <div>0{number}.</div>
                    <div className={ st.line }></div>
                </div>

                <div className={ st.text }>{ title }</div>
            </div>
        </div>
    )
};

export default Component;