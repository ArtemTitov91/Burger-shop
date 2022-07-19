import React, { useCallback } from 'react';
import loginStyle from "./login.module.css";
import {
    Input,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { queryNewPassword } from '../service/action/cart';

export const ForgotPassword = () => {

    const [newPassword, setnewPassword] = React.useState('');
    const [letter, setletter] = React.useState('');
    const inputRef = React.useRef(null);


    const { recoverPasswordRequest, recoverPasswordFailed } =
        useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const onClickRecover = useCallback((e) => {
        const restorePass = {
            "password": newPassword,
            "token": ""
        };
        e.preventDefault()
        dispatch(queryNewPassword(restorePass))
        setnewPassword('');

    }, [newPassword, dispatch ])

    if (recoverPasswordRequest) return <div>ЗАГРУЗКА</div>
    if (recoverPasswordFailed) return <div>ОШИБКА</div>

    return (
        <div className={loginStyle.container}>
            <form className={loginStyle.loginBox}>
                <p className={"text text_type_main-medium " + loginStyle.title}>Восстановление пароля</p>
                <Input
                    type='text'
                    placeholder='Введите новый пароль'
                    onChange={e => setnewPassword(e.target.value)}
                    value={newPassword}
                    name='newPassword'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                />
                <Input
                    type='text'
                    placeholder='Введите код из письма'
                    onChange={e => setletter(e.target.value)}
                    value={letter}
                    name='letter'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                />
                <div className={loginStyle.button}><Button
                onClick={onClickRecover}
                    type="primary"
                    size="medium">Сохранить</Button></div>
                <div className={loginStyle.settings}>
                    <p className={"text text_type_main-default text_color_inactive " + loginStyle.text}>
                        Вспомнили пароль?
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