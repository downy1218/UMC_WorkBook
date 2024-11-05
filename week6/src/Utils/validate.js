const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


//여기서 values는 {email:'',password:''} 입력하는 객체 값
function validateUser(values){
    const errors = {
        email:'',
        password:''
    }
    if (emailPattern.test(values.email)===false){
        errors.email = '올바른 형식을 입력하세요'
    }
    if(values.password.length < 8 || values.password.length > 16){
        errors.password = '다시 입력하세요'
    }
    return errors;
};

function validateLogin(values){
    return validateUser(values)
};
export {validateLogin};