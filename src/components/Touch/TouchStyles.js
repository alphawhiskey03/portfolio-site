import styled from 'styled-components';

const assets={
    fistColor:'red',
    inputColor:'red',
    borderColor:'red'
}

export const FormContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom:30px;
margin-left:10px;
margin-right:10px;
`;

export const FormTitle=styled.h1`
font-weight:400;

`;

export const FormContent=styled.h1`
    position:relative;
    height:48px;
    margin-bottom:3rem;
    padding:3rem;
`;

export const FormInput=styled.input`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    font-size:red;
    border:1px solid red;
    border-radius:.5rem;
    outline:none;
    padding:1rem;
    background:none;
    z-index:1;
    color:white;
`;
export const FormTextArea=styled.textarea`
position:absolute;
top:0;
left:0;
width:100%;
font-size:red;
border:1px solid red;
border-radius:.5rem;
outline:none;
padding:1rem;
background:none;
z-index:1;
color:white;
`;

export const FormLabel=styled.label`
position:absolute;
left:1rem;
top:1rem;
padding:0.25rem;
background-color:#0F1624;
color:red;
font-size:18px;
font-weight:100;
transition:.3s;
${FormInput} : focus+&  {
    top:-1.5rem;
    left:.8rem;
    font-size:2rem;
    font-size:400;
    z-index:10;
}
${FormTextArea}:focus+&{
    top:-1.5rem;
    left:.8rem;
    font-size:2rem;
    font-size:400;
    z-index:10;

}
${FormInput}:valid+&{
    top:-1.5rem;
    left:.8rem;
    font-size:2rem;
    font-size:400;
    z-index:10;

}
${FormTextArea}:valid+&{
    top:-1.5rem;
    left:.8rem;
    font-size:2rem;
    font-size:400;
    z-index:10;

}
`;


export const FormButton=styled.input`
display:block;
margin-left:auto;
padding:.75rem 2rem;
outline:none;
border:none;
background-color:red;
color:#fff;
cursor:pointer;
font-size:18px;
border-radius:.5rem;

&:hover{
    box-shadow:3px 3px 20px rgba(80, 78, 78, 0.5);
}
`;
export const Form=styled.form`
min-width:45rem;
padding:4rem 2rem;
border-radius:1rem;
box-shadow:3px 3px 20px rgba(80, 78, 78, 0.5);
`;
