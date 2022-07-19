import React, { useCallback } from 'react';
import loginStyle from "./login.module.css";
import {
    Input,
    Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { queryCode } from '../service/action/cart';

export const RecoverPassword = () => {

    const [email, setEmail] = React.useState('');
    const inputRef = React.useRef(null);

    // const history = useHistory();
    const { recoverPasswordRequest, recoverPasswordFailed } =
        useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const onClickRecover = useCallback((e) => {
        e.preventDefault()
        dispatch(queryCode(email))
        setEmail('');
        // history.replace({ pathname: '/login/forgot-password/reset-password' });
    }, [email, dispatch])

    if (recoverPasswordRequest) return <div>ЗАГРУЗКА</div>
    if (recoverPasswordFailed) return <div>ОШИБКА</div>

    return (
        <div className={loginStyle.container}>
            <form className={loginStyle.loginBox}>
                <p className={"text text_type_main-medium " + loginStyle.title}>Восстановление пароля</p>
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
                <div className={loginStyle.button}>
                    <Button
                        onClick={onClickRecover}
                        type="primary"
                        size="medium"
                    >Востановить</Button>
                </div>
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