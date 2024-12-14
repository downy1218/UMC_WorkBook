const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface Values{
    email:string;
    password:string;
}

//여기서 values는 {email:'',password:''} 입력하는 객체 값
function validateUser(values:Values){
    const errors = {
        email:'',
        password:''
    }
    if (emailPattern.test(values.email)===false){
        errors.email = '올바른 형식을 입력하세요'
    }
    if(values.password.length < 8 || values.password.length > 16){
        errors.password = '비밀번호가 일치하지 않습니다'
    }
    return errors;
};

function validateLogin(values:Values){
    return validateUser(values)
};
export {validateLogin};