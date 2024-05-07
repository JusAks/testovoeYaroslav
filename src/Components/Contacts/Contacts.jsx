import React from 'react';
import st from './Contacts.module.scss'
import { useForm } from "react-hook-form";

const initialValue={
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    message:''
}

const Contacts = ({scrollRef})=>{ 
    
    const {
        register, 
        formState:{dirtyFields}, 
        handleSubmit}=useForm({mode:"onChange",defaultValues:initialValue})

    const onSubmit = ()=>{
        debugger
    }
    const scroll=()=>{
    
        scrollRef.current.scrollIntoView({behavior:"smooth"})
    }
    console.log(scrollRef)
    return (<>

            <div className={ st.container }>
                <div className={st.info}>
                    <div className={st.header}>
                        Get in Touch With Us
                    </div>
                    <div className={st.text}>
                        at
                        <span> All New Tech LTD</span>
                        , we value our customers and appreciate hearing how we can improve and better support you.
                        If you have any question, do not hesitate to contact us!

                        <p>Sofia, ul.“Okolovrasten pat” 251 G, 1715 g.k. Mladost 4</p>
                        <span>info@allnewtechltd.com</span> +359 02 426 36 48

                    </div>
                </div>
                <div className={ st.form }>
                    <form>
                        <label>
                            <div hidden={ dirtyFields.firstName }>First Name</div>
                            <input  { ...register (
                                'firstName' ,
                                {
                                    required : "This field is require!"
                                }
                            ) } type="text"/>
                        </label>
                        <label>
                            <div hidden={ dirtyFields.lastName }>Last Name</div>
                            <input { ...register (
                                'lastName' ,
                                {
                                    required : "This field is require!"
                                }
                            ) } type="text"/>
                        </label>
                        <label>
                            <div hidden={ dirtyFields.phone }>Phone</div>
                            <input { ...register (
                                'phone' ,
                                {
                                    required : "This field is require!"
                                }
                            ) } type="text"/>
                        </label>
                        <label>
                            <div hidden={ dirtyFields.email }>Email</div>
                            <input { ...register (
                                'email' ,
                                {
                                    required : "This field is require!"
                                }
                            ) } type="text"/>
                        </label>
                        <label>
                            <div hidden={ dirtyFields.message }>Your Message</div>
                            <input { ...register (
                                'message' ,
                                {
                                    required : "This field is require!"
                                }
                            ) } type="text"/>
                        </label>
                    </form>
                    <button onClick={handleSubmit(onSubmit)}>SEND MESSAGE</button>
                </div>
                <div onClick={scroll} className={st.scroll1}>
                    <img src="/up.png" alt=""/>
                </div>
            </div>
        </>
    );
};

export default Contacts;