import React from "react";
import style from './UsersList.module.css'

const usersList = (props) => {
  return (
    <p className={style.li}>
      {props.name} ({props.age} years old)
    </p>
  );
};

export default usersList;
