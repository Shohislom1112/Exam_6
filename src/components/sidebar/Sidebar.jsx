
import { NavLink } from 'react-router-dom'
import group from "../../assets/images/Group 2.svg"
import maskGroup from "../../assets/images/Mask group.svg"
import nastroyka from "../../assets/images/Настройки.svg"
import profil from "../../assets/images/Профиль.svg"
import addcard from "../../assets/images/addcard.svg"
import "./Sidebar.scss"
function Sidebar() {
    return (
      <div className='sidebar'>
            <NavLink to="/" className="Img1"><img src={maskGroup} alt="" /></NavLink>
            <NavLink to="profile" className="Img"><img src={nastroyka} alt="" /></NavLink>
            <NavLink to="login" className="Img"><img src={profil} alt="" /></NavLink>
            <NavLink to="" className="Img"><img src={group} alt="" /></NavLink>
            <NavLink to="addtovar" className="Img2"><img className='add' src={addcard} alt="" /></NavLink>
      </div>
    )
  }
  
  export default Sidebar