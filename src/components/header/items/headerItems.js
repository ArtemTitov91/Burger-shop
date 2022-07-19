import React from "react";
import headerItem from "./headerItems.module.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const HeaderItems = (props) => {
  const {link, discription, icon } = props;

  return (
    <Link to = {link} className={"text text_type_main-default " + headerItem.link}>
      <div className={headerItem.icon}>{icon}</div>
      {discription}
    </Link>
  );

};

export default HeaderItems;

HeaderItems.propTypes = {
  icon: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
};