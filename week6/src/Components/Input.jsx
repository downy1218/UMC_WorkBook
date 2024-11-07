import styled from "styled-components";

function Input({ type, register, placeholder }) {
    return (
        <div>
            <InputStyle {...register(type)} type={type} placeholder={placeholder} />
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