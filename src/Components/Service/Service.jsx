import React , { useState } from 'react';
import st from './Service.module.scss'
import Component from "./ServicesComponent/Component";
const arr = [
    {
        number:1,
        title: 'Strategy and Operations',
        text:'Strategy and Operations'
    },
    {
        number:2,
        title: 'Branding',
        text:'Optimizing your digital channels to conduct and maintain a conversation between the brand and its supporters and followers. Creating an engaging and relevant brand narrative that consistently highlights the brand value across the web and social media channels'
    },
    {
        number:3,
        title: 'Website’s',
        text:' Design and build a visually creative and exciting website for your company, organization or\n' +
            '                        brand for cross platform display.'
    },
    {
        number:4,
        title: 'Social Media Management',
        text:'Social Media Management'
    },
    {
        number:5,
        title: 'Technology',
        text:'Technology'
    },
    {
        number:6,
        title: 'Online Support',
        text:'Online Support'
    },
]
const Service = ()=>{
   
    const [a , setA] = useState ( null )
    return (
        <div className={ st.container }>
            <div className={ st.gradient }></div>
            <div className={st.content}>
                <div className={st.text}>
                    <div>
                        <div className={st.leftText}>
                            Wide & Powerful
                        </div>
                    </div>
                    <div>
                        <div className={st.header}>Our Services</div>
                        <div className={st.context}>
                            <p>As a part of a large international company we are a leading business factor in Bulgaria and all around the world. Our goal is to maintain a strong and effective relationship with both our employees and clients, and move forward to a better future.</p>
                            <p>We deliver first class and innovative solutions that support the business development of our clients and increase the personal complacency of our employers.</p></div>
                    </div>
                </div>
                <div className={st.container2}>
                    {arr.map(el=><Component setA={setA} text={el.text} title={el.title} number={el.number} a={a}/>)}
                </div>
                
            </div>
        </div>
    );
};

export default Service;