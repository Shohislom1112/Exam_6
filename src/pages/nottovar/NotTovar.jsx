// import React from 'react'
import "./NotTovar.scss"
import nottovar from "../../assets/images/image.png"
import { NavLink } from "react-router-dom"

function NotTovar() {
  return (
    <div className='Nottovar'>
        <h3 className='h3'>Вы пока не создали ни одного товара</h3>
        <img className="image2" src={nottovar} alt="" />
        <NavLink className="butt" to="addtovar" >Создать товар</NavLink>
    </div>
  )
}

export default NotTovar