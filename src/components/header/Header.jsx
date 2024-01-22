// import Container from 'react-bootstrap/Container';
// import  { user } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Chiqish from "../../assets/images/chiqish.svg"
import "./Header.scss"
function Header({user}) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  navbar">
      <div className="w-100 mx-auto px-5">
        <Navbar.Brand>
          <Link to="/home" className='link'><div className="nav_text">
            {/* <p className="tovar">Товары</p>
            <p className="tovor">Главная / Товары</p> */}
            <NavLink to="/" className="tovar">Товары</NavLink><br />
            <NavLink to="home" className="tovor">Главная</NavLink>
            <NavLink to="/" className="tovor"> / </NavLink>
            <NavLink to="/" className="tovor">Товары</NavLink>
            </div>
            {user ? (
              <Nav.Link>
                <NavLink to="/profile"><div className="loginn">
                {user.name}
                </div></NavLink>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <NavLink  to="/login"><div className='loginn'>
                <img src={Chiqish} alt="" />
                  <p className="p1">Выйти</p>
                </div></NavLink>
              </Nav.Link>
            )}
              {/* <Nav.Link>
                <NavLink  to="/login"><div className='loginn'>
                <img src={Chiqish} alt="" />
                  <p className="p1">Выйти</p>
                </div></NavLink>
              </Nav.Link> */}

                
             
              </Link>
            
            
        </Navbar.Brand>
        
      </div>
    </Navbar>
  );
}

export default Header;
