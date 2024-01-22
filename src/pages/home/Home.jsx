// import React from 'react'
import { useEffect, useState } from "react";
import "./Home.scss"
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Header from "../../components/header/Header";
function Home() {
  // const [error, setError] = useState('');
const [allcard, setAllcard] = useState([])
const [search, setSearch] = useState('');
  


  const FetchCard = async () => {
      const res = await axios.get('http://localhost:3000/products');
      const data = await res.data;
      console.log(data);
      setAllcard(data)
    
  };
  useEffect(()=> {
    FetchCard()
  }, [])
 
    const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // searchContact(e.target.value);
  };
 
 
 
 
 
 
  return (
    <div className="div">
         <div className="div2">
          <h4>Все товары ()</h4>
          <input type="search"
            id="search"
            placeholder="Поиск"
            className="search"
            // className="form-control" 
            value={search}
            onChange={handleSearchChange}
          />
         </div>
         <div>
        <div className='tovar_name'>
          <div className="tovarr">
              {/* <Header /> */}
              <p className='home__text p'>Наименование</p>
            <p className='home__category p1'>Артикул</p>
            <p className='home__brend p2'>Бренд</p>
            <p className='home__cost p3'>Цена</p>
            <p className='home__stock p4'>Цена со скидкой</p>
                     

          </div>
<hr />
            {
                allcard.map((allcard) => (
                  <ul key={allcard.id} className='tovarr'>
                  <li className='home__text p'>
                  <input type="checkbox" />
                  Товар{allcard.id}
                  </li>
              <li className='home__category p1'>
                  {allcard.category}
              </li>
              <li className='home__brend p2'>
                  {allcard.brand}
              </li>
              <li className='home__cost p3'>
                  {allcard.price} $
              </li>
              <li className='home__stock p4'>
                  {allcard.stock}$
                  <hr />
              </li>
              
              </ul>
                ))
              }
              <hr />


        </div>
    </div>
    </div>
  )
}

export default Home