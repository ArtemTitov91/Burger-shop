import React from 'react';
// import loginStyle from "./login.module.css";
import {
    Input,
    // Button
} from "@ya.praktikum/react-developer-burger-ui-components";
// import { Link, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import profileStyle from "./profile.module.css";

export const Profile = () => {

    const [name, setName] = React.useState('Марк');
    const [Login, setLogin] = React.useState('mail@stellar.burgers');
    const [password, setPassword] = React.useState('******');
    const inputRef = React.useRef(null);
    
    return (
        <div className={profileStyle.cover}>
            <div>
       <ul className = {profileStyle.list}>
           <li><p className={"text text_type_main-medium " + profileStyle.tab}>Профиль</p></li>
           <li><p className={"text text_type_main-medium text_color_inactive " + profileStyle.tab}>История заказов</p></li>
           <li><p className={"text text_type_main-medium text_color_inactive " + profileStyle.tab}>Выход</p></li>    
       </ul>
       <p className={"text text_type_main-default text_color_inactive " + profileStyle.description}>В этом разделе вы можете
       изменить свои персональные данные</p>
       </div>
       <form className={profileStyle.form}>
       <Input
                    type='text'
                    placeholder='Имя'
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name='profileName'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                    icon={'EditIcon'}
                />
                <Input
                    type='email'
                    placeholder='Логин'
                    onChange={e => setLogin(e.target.value)}
                    value={Login}
                    name='email'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                    icon={'EditIcon'}
                />
                <Input
                    type='text'
                    placeholder='Пароль'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name='profilePassword'
                    error={false}
                    ref={inputRef}
                    errorText='Ошибка'
                    size='default'
                    icon={'EditIcon'}
                />
       </form>
       </div>
    )
}