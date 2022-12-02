import styled from 'styled-components';

export const FormPhone = styled.form`
display: flex;
flex-direction: column;
gap:16px;
border: 1px solid black;
width:40%;
margin-left: 15px;
`;

export const Input = styled.input`
margin-top: 5px;
width: 200px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin: 15px 0 0 15px;
`;

export const Button = styled.button`
width: 100px;
margin-left: 15px;
margin-bottom: 15px;
background-color: transparent;
border-radius: 5px;
cursor:pointer;
`;