import { IoIosSearch } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaExpand } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <IoIosSearch className="icon" />
        <AiOutlineAppstore className="icon" />
        <FaExpand className="icon" />
        <div className="notification">
          <IoNotificationsOutline />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
          <span>Jane</span>
        </div>
        <IoSettingsOutline className="icon" />
      </div>
    </div>
  )
}

export default Navbar