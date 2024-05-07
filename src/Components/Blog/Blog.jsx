import React from 'react';
import st from "./Blog.module.scss";

const Blog = ()=>{
    return (
        <div className={ st.container }>
            <div className={ st.header }>
                <div></div>
                <div className={ st.center }>
                    STORIES
                </div>
                <div></div>
            </div>
            <div className={ st.viewMore }>
                View<br/>More
            </div>
            <div className={ st.news }>
                <div className={ st.news1 }>
                    <div>
                        <div className={ st.tex1 }>January 24, 2022</div>
                        <div className={ st.tex2 }>World's largest and most liquid market</div>
                        <div className={ st.tex3 }>Allnew Tech Ltd is an international company providing Out-Source Tech
                            Service to customers worldwide...
                        </div>
                    </div>
                </div>
                <div className={ st.news2 }>
                    <div>
                        <div className={ st.tex1 }>Services</div>
                        <div className={ st.tex2 }>Hiring the best trading educators</div>
                        <div className={ st.tex3 }>Allnew Tech Ltd is an international company providing Out-Source Tech
                            Service to customers worldwide...
                        </div>
                    </div>
                </div>
                <div className={ st.news3 }>
                    <div>
                        <div className={ st.tex1 }>Careers</div>
                        <div className={ st.tex2 }>Be part of All New Investments</div>
                        <div className={ st.tex3 }>Allnew Tech Ltd is an international company providing Out-Source Tech
                            Service to customers worldwide...
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;