import React from 'react';


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {FormContainer,FormContent,FormTitle,FormInput,FormLabel,FormButton,Form,FormTextArea} from "./TouchStyles";
import { BiMessageAdd } from "react-icons/bi";
import {useState,useRef} from 'react';
import emailjs from "emailjs-com";




const Touch = () => {
    const form=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        emailjs.sendForm("service_a7cqsni", "template_uuirldu", form.current,"user_foWM7aUuJbmE4ek69B0vV")
        .then((result) => {
            alert("Query sent!")
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <Section  id='contact'>
            <SectionTitle>Get in touch</SectionTitle>
            <SectionText>Fill in your queries. I'll get back to you asap!</SectionText>
            <FormContainer>
            <Form onSubmit={e=>handleSubmit(e)} ref={form}>
                    <FormTitle><BiMessageAdd size='5rem'/></FormTitle>
                    <FormContent>
                        <FormInput
                        required
                        name="from_name"
                        />
                        <FormLabel>Name</FormLabel>
                        </FormContent>
                        <FormContent>
                        <FormInput 
                        name="from_email"
                        type="email"
                        required/>
                        <FormLabel>Email</FormLabel>   
                        </FormContent>
                        <FormContent style={{paddingBottom:80}}>
                            <FormTextArea 
                            required
                            name="message"
                            ></FormTextArea>
                            <FormLabel>Query</FormLabel>
                            <br/>
                        </FormContent>
                    <FormButton type='submit' value='submit'/>
                    </Form>
          </FormContainer>
            
       
            <SectionDivider colorAlt/>

        </Section>
      );
}
 
export default Touch;
