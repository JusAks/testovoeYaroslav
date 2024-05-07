import React  from 'react';
import st from './Slider.module.scss'

const Slider = ({sliderRef,slider})=>{
    let slide = slider? st.container + " " + st.active: st.container;
    
    return (
        <div ref={sliderRef} className={slide}>
            <div className={st.slide1}>
                <div className={st.content}>
                    <div className={st.baner}>
                        <img src="/1baner.png" alt=""/>
                    </div>
                    <div className={ st.textContent }>
                        <div className={ st.header }>
                            <span>Awarded <span style={ { paddingLeft : "10%" } }>Company</span></span>
                        </div>
                        <div className={ st.group2 }>
                            <div className={ st.text }><span>In our business </span></div>
                            <div className={ st.items }>
                                <span>Join</span>
                                <div></div>
                                <span>Learn</span>
                                <div></div>
                                <span>Earn</span></div>
                            <button>UPLOAD YOUR CV</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ st.slide2 }>
                <div className={ st.contContainer }>
                    <div className={ st.mainText }>
                        Out-Source<br/> Tech Service
                    </div>
                    <div className={ st.socndaryText }>
                        Тo customers worldwide.
                    </div>
                    <button>UPLOAD YOUR CV</button>
                </div>

            </div>
        </div>
    );
};

export default Slider;