import React, {useCallback} from 'react';
import loginStyle from "./login.module.css";
import {
    Input,
    PasswordInput,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { queryAuthorization } from '../service/action/auth';

export const Login = () => {

    const [email, setEmail] = React.useState('');
    const inputRef = React.useRef(null);
    const [password, setPassword] = React.useState('')
    const onChange = e => { setPassword(e.target.value) }

    const {authorization, authorizationRequest, authorizationFailed } =
        useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const onClickAuthorization = useCallback((e) => {
        e.preventDefault()
        const userInfo =  {
            "email": email, 
            "password": password, 
        }
        dispatch(queryAuthorization(userInfo))
        setEmail('');
        setPassword('');
        // history.replace({ pathname: '/' })
    }, [email, password, dispatch])
    console.log(authorization);
    if (authorizationRequest) return <div>ЗАГРУЗКА</div>
    if (authorizationFailed) return <div>ОШИБКА</div>
    
    return (
        <div className={loginStyle.container}>
            <form className={loginStyle.loginBox}>
                <p className={"text text_type_main-medium " + loginStyle.title}>Вход</p>
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
                    onClick={onClickAuthorization}
                    type="primary"
                    size="medium">Войти </Button></div>
                <div className={loginStyle.settings}>
                    <p className={"text text_type_main-default text_color_inactive " + loginStyle.text}>
                    Вы—новый пользователь?
                    </p>
                    <Link to = "/login/registration">
                    <Button className='button-link' type="secondary" size="medium">
                        Зарегестрироваться
                    </Button></Link>
                </div>
                <div className={loginStyle.settings}>
                <p className={"text text_type_main-default text_color_inactive " + loginStyle.text}>
                    Забыли пароль?
                    </p>
                    <Link to = "/login/forgot-password">
                    <Button className={loginStyle.link} type="secondary" size="medium">
                        Восстановить пароль
                    </Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}