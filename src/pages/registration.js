import React, { useCallback } from 'react';
import loginStyle from "./login.module.css";
import {
    Input,
    PasswordInput,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { queryRegistration } from '../service/action/auth';

export const Registration = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const inputRef = React.useRef(null);
    const [password, setPassword] = React.useState('')
    const onChange = e => { setPassword(e.target.value) }
    


    // const history = useHistory();
    const { registrationRequest, registrationFailed } =
        useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const onClickRegistration = useCallback((e) => {
        e.preventDefault()
        const userInfo =  {
            "email": email, 
            "password": password, 
            "name": name
        }
        dispatch(queryRegistration(userInfo))
        setEmail('');
        setName('');
        setPassword('');
        // history.replace({ pathname: '/login' })
    }, [email, password, name, dispatch ])


    if (registrationRequest) return <div>ЗАГРУЗКА</div>
    if (registrationFailed) return <div>ОШИБКА</div>

    return (
        <div className={loginStyle.container}>
            <form className={loginStyle.loginBox}>
                <p className={"text text_type_main-medium " + loginStyle.title}>Регистрация</p>
                <Input
                    type='text'
                    placeholder='Имя'
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name='name'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                />
                <Input
                    type='email'
                    placeholder='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name='email'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                />
                <PasswordInput onChange={onChange} value={password} name={'password'} />
                <div className={loginStyle.button}><Button
                    onClick={onClickRegistration}
                    type="primary"
                    size="medium">Регистрация</Button></div>
                <div className={loginStyle.settings}>
                    <p className={"text text_type_main-default text_color_inactive " + loginStyle.text}>
                        Уже зарегистрированы?
                    </p>
                    <Link to="/login">
                        <Button className='button-link' type="secondary" size="medium">
                            Войти
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}