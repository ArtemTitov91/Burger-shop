import React, {ReactNode} from 'react';
import headerItem from './header__items.module.css';

type componentProps = {
    link: string;
    discription: string;
    icon: ReactNode;
}

const  HeaderItems = (props: componentProps ) => {

        const {link, discription, icon} = props;
        
        return (<a href={ link } className = {'text text_type_main-default ' + headerItem.link}>
            <div className={ headerItem.icon }>{ icon }</div>
            { discription }
        </a>)
    }



export default HeaderItems;