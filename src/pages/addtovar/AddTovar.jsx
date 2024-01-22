// import React from 'react'
// import {  } from "react-loader-spinner"
import { useState } from "react";
import "./AddTovar.scss"
import { NavLink, Navigate } from "react-router-dom";
function AddTovar() {
  // const navigate = <Navigate/>
  const [data, setData] = useState({
    name: '',
    username: '',
    brend: '',
    category:'',
    cost: '',
    stock:'' 
  });



  return (
    <div className="addtovar">
      <div className="addinput">
      <p className="p">Основные</p>
      <div className="input">
      <div className="input_first">
        <label htmlFor="" className="lab">Название <p className="red">*</p></label>
      <input
          className="usern"
          aria-label="Название *"
          type="text"
          id="Название"
          name="Название"
          // value={data.username}
          // onChange={(e) => setData((prevData) => ({ ...prevData, username: e.target.value }))}
        />
      </div>
      <div className="input_second">
        <div className="tt">
        <label htmlFor=""className="lab">Бренд <p className="red">*</p></label>
      <input
          className="usern"
          aria-label="Бренд *"
          type="text"
          id="Бренд"
          name="Бренд"
          value={data.brend}
          onChange={(e) => setData((prevData) => ({ ...prevData, brend: e.target.value }))}
        />
        </div>
        <div className="tt">
        <label htmlFor=""className="lab">Артикул производителя <p className="red">*</p></label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="text"
          id="Артикул"
          name="Артикул"
          value={data.category}
          onChange={(e) => setData((prevData) => ({ ...prevData, category: e.target.value }))}
        />
        </div>
      </div>
      <div className="input_third">
      <label htmlFor=""className="lab">Описание <p className="red">*</p></label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="text"
          id="Артикул"
          name="Артикул"
          // value={data.username}
          // onChange={(e) => setData((prevData) => ({ ...prevData, username: e.target.value }))}
        />
      </div>
      <div className="input_fourth">
      <div className="tt">
        <label htmlFor=""className="lab">Цена</label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="text"
          id="Артикул"
          name="Артикул"
          value={data.cost}
          onChange={(e) => setData((prevData) => ({ ...prevData, cost: e.target.value }))}
        />
        </div>
        <div className="tt">
        <label htmlFor=""className="lab">Цена со скидкой</label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="text"
          id="Артикул"
          name="Артикул"
          value={data.stock}
          onChange={(e) => setData((prevData) => ({ ...prevData, stock: e.target.value }))}
        />
        </div>
      </div>
      </div>
      <div className="button">
      <NavLink to="/home"><button className="btn btn-outline-success but">
          Сохранить
        </button></NavLink>
      <NavLink to="/home"><button className="btn btn-outline-dark but" >
           Отмена
        </button></NavLink>
      </div>
      </div>
    </div>
  )
}

export default AddTovar