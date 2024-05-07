import React , { useState } from 'react';
import st from './JobOffers.module.scss'
const list=[
    {
        number:1,
        title:'Backoffice /Payments Specialist/',
    },
    {
        number:2,
        title:'Our Experience',
    },
    {
        number:3,
        title:'Quality Assurance / Russian-English, Spanish-English/',
    }
]
const Component=({number,title,setArr})=>{
   return <div className={ st.component }>
        <div className={ st.start }>


            <div className={ st.nomer }>
                <div className={ st.line }>
                </div>
                0{number}

            </div>
        </div>
        <div className={ st.center }>
            <div className={ st.title }>{ title }</div>
            <div onClick={ ()=>{
                setArr ( [number] )
            } } className={ st.link }>View more
            </div>
        </div>
        <div className={ st.endLink }>
            <div>
                <img src="/Vector.png" alt=""/>
            </div>

        </div>
    </div>
}

const JobOffers = ()=>{
    const [arr , setArr] = useState ( [] )
    let case1 = arr.some ( el=>el === 1 )
    let case2 = arr.some ( el=>el === 2 )
    let case3 = arr.some ( el=>el === 3 )
    return (
        <div className={ st.container }>
            <div className={ st.header }>
                <div  className={ st.header1 }>JOIN US
                </div>
                <div className={ st.header2 }>More Jobs Offers</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"17px"}} className={ arr.length > 0 ? st.hidden : st.visible }>
                {list
                    .map(el=>
                        <Component title={el.title} setArr={setArr} number={el.number}/> 
                    )
                }
            </div>
            <div className={ case1 ? st.component + " " + st.visible : st.component + " " + st.hidden }>
                <div className={ st.start }>


                    <div className={ st.nomer }>
                        <div className={ st.line }>
                        </div>
                        01

                    </div>
                </div>
                <div className={ st.center }>
                    <div className={ st.title }>Backoffice /Payments Specialist/</div>
                    <div className={ st.text }>
                        <p>Resolve and research undelivered payments.</p>
                        <p>Manage anti-money laundering (AML) and know your customer (KYC) processes.</p>
                        <p>Communicate with appropriate internal teams, when necessary to resolve open issues or questions.</p>
                    </div>
                    <div className={ st.link }>View more</div>
                </div>
                <div className={ st.endClose }>
                    <div onClick={()=>{setArr([])}}>
                        <img src="/Close.png" alt=""/>
                    </div>

                </div>
            </div>
            <div className={ case2 ? st.component + " " + st.visible : st.component + " " + st.hidden }>
                <div className={ st.start }>


                    <div className={ st.nomer }>
                        <div className={ st.line }>
                        </div>
                        02

                    </div>
                </div>
                <div className={ st.center }>
                    <div className={ st.title }>Our Experience</div>
                    <div className={ st.text }>
                        <p>Resolve and research undelivered payments.</p>
                        <p>Manage anti-money laundering (AML) and know your customer (KYC) processes.</p>
                        <p>Communicate with appropriate internal teams, when necessary to resolve open issues or questions.</p>
                    </div>
                    <div className={ st.link }>View more</div>
                </div>
                <div className={ st.endClose }>
                    <div onClick={()=>{setArr([])}}>
                        <img src="/Close.png" alt=""/>
                    </div>

                </div>
            </div>
            <div className={ case3 ? st.component + " " + st.visible : st.component + " " + st.hidden }>
                <div className={ st.start }>


                    <div className={ st.nomer }>
                        <div className={ st.line }>
                        </div>
                        03

                    </div>
                </div>
                <div className={ st.center }>
                    <div className={ st.title }>Quality Assurance / Russian-English, Spanish-English/</div>
                    <div className={ st.text }>
                        <p>Resolve and research undelivered payments.</p>
                        <p>Manage anti-money laundering (AML) and know your customer (KYC) processes.</p>
                        <p>Communicate with appropriate internal teams, when necessary to resolve open issues or questions.</p>
                    </div>
                    <div className={ st.link }>View more</div>
                </div>
                <div className={ st.endClose }>
                    <div onClick={()=>{setArr([])}}>
                        <img src="/Close.png" alt=""/>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default JobOffers;