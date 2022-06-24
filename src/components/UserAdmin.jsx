import React from 'react'

import { useLocation } from "react-router-dom";

const UserAdmin = () => {
    let location = useLocation();
    if (!localStorage.getItem("token")) {
        return <div>Hola {useLocation}</div>
      }
}

export default UserAdmin