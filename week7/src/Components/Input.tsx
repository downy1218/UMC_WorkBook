import styled from "styled-components";
import { JSX, useState } from 'react';

interface InputProps {
    type:string;
    register:{
        name:string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
        ref: React.Ref<HTMLInputElement>;
    }
    placeholder:string;
}

function Input({ type, register, placeholder }:InputProps): JSX.Element{
    return (
        <div>
            <InputStyle {...register} type={type} placeholder={placeholder} />
        </div>
    )
};





const InputStyle = styled.input`
        display:flex;
        justify-content:center;
        align-items:center;
        width:500px;
        height:50px;
        border-radius:10px;
        padding-left:9px;
`

export default Input;