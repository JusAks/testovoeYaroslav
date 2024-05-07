import React , { useRef , useState } from 'react';
import Header from "../Header/Header";
import st from './HeaderBanner.module.scss'
import JobOffers from "../../../JobsOffers/JobOffers";
import WeAreHiring from "../../../WeAreHiring/WeAreHiring";
import Service from "../../../Service/Service";
import Blog from "../../../Blog/Blog";
import Contacts from "../../../Contacts/Contacts";
import Footer from "../../../Footer/Footer";
import Slider from "../../../Block1/Slider/Slider";

const HeaderBanner = ()=>{
    let sliderRef= useRef()
    const [slide,setSlide]=useState(false)
    const switchSlide=()=>{
        setSlide(prevState=>!prevState)
    }
    let pagging = setSlide?'/pagging2.png':'/pagging.png'
    return (
        <div className={ st.container }>
            <Header/>
                <img className={st.slide} onClick={ switchSlide } src={ pagging } alt=""/>
            <Slider sliderRef={sliderRef} slider={slide}/>
            <div className={st.secondLayer}>
                <div className={st.dots}>
                    <div className={st.about}>
                        <div className={st.aboutMain}>ABOUT</div>
                        <div className={st.aboutSecond}>All New Tech LTD</div>
                        <div className={st.aboutThird}>AN Allnew Tech Ltd is part of international company providing Out-Source Tech Service to customers worldwide. For the past 5 years the company has expanded its activities on the market and strives to become one of the best Out-Source companies in the industry. Services are provided in some of the most spoken languages in the world – English, Spanish, Arabic, Italian, Russian, German.</div>
                    </div>
                    <div className={st.jobsOffer}>
                        <JobOffers/>
                    </div>
                    
                </div>
            </div>
            <WeAreHiring/>
            <Service/>
            <Blog/>
            <Contacts scrollRef={sliderRef}/>
            <div className={st.newsLetter}>
                <div>
                    <img src="/newsletter%20icon.png" alt=""/>
                    <span>Never miss Another opportunity</span>
                </div>
                <button>Create a Job alert</button>
            </div>
            <Footer/>
        </div>
    );
};

export default HeaderBanner;