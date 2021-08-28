import React from 'react';


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {FormContainer,FormContent,FormTitle,FormInput,FormLabel,FormButton,Form,FormTextArea} from "./TouchStyles";
import { BiMessageAdd } from "react-icons/bi";




const Touch = () => {
    return (
        <Section  id='contact'>
            <SectionTitle>Get in touch</SectionTitle>
            <SectionText>Fill in your queries. I'll get back to you asap!</SectionText>
            <FormContainer>
            <Form>
                    <FormTitle><BiMessageAdd size='5rem'/></FormTitle>
                    <FormContent>
                        <FormInput required/>
                        <FormLabel>Name</FormLabel>
                        </FormContent>
                        <FormContent>
                        <FormInput required/>
                        <FormLabel>Email</FormLabel>   
                        </FormContent>
                        <FormContent style={{paddingBottom:40}}>
                            <FormTextArea required></FormTextArea>
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