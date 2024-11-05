function Input() {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'email'}{...register('email')} placeholder='이메일을 입력하세요' />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
                <input type={'password'}{...register('password')} placeholder='비밀번호를 입혁하세요' />
                <p style={{ color: 'red' }}>{errors.password?.message}</p>
                <button type='submit'></button>
            </form>
        </div>
    )
};
export default Input;