import React , { useRef  } from 'react';
import st from './Test.module.scss'
import Slider from "../../Block1/Slider/Slider";
const Test = ()=>{
    let sliderRef = useRef()
    console.log(sliderRef)
    return (
        <div className={ st.container }>
           <Slider sliderRef={sliderRef} />
        </div>
    );
};

export default Test;