/* eslint-disable no-undef */
import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { onAuthStateChanged,signOut} from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";
import {FaPowerOff, FaSearch} from 'react-icons/fa';

export default function Navbar() {
  const [ isScrolled,setisScrolled] = useState(false);
  window.onscroll = () => {
    setisScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
    const links=
        [{ name:"Home" , link: "/"},
        { name:"TV Shows" , link: "/tv"},
        { name:"Movies" , link: "/movies"},
        {name:"My List" , link: "/mylist"},
        {name:"Profile" , link: "/profile"}
      ];

        const navigate = useNavigate();
        onAuthStateChanged(firebaseAuth, (currentUser) => {
          // eslint-disable-next-line no-undef
          if (!currentUser) navigate("/login");
        })
    
        const [showSearch,setshowSearch] = useState(false);
        const [inputHover, setInputHover] = useState(false);
  return (
  
    <Container>
    
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo}alt="logo"/>
          </div>
          <ul className='links flex'>
            {links.map(({name,link})=>{
              return(
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button onFocus={()=> setshowSearch(true)} onBlur={
              ()=>{
                if(!inputHover) setshowSearch(false);
              }
            } >
              <FaSearch />
            </button>
            <input type="text" placeholder='Search' onMouseEnter={()=>setInputHover(true)}
            onMouseLeave={()=>setInputHover(false)}
            onBlur={()=>{
            setshowSearch(false);
            setInputHover(false)
            }} />
          </div>
          <button onClick={() =>signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
   
        </div>
      </nav>
    </Container>
  )
}
const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff; /* change as needed */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* This will make the icon slightly larger when hovered */
  }

  &:active {
    transform: scale(0.9); /* This will make the icon slightly smaller when clicked */
  }
`;
const Container = styled.div`
.scrolled{
  background-color:black;
}
nav{
  position:sticky;
  top:0;
  height:6.5rem;
  width:100%;
  justify-content:space-between;
  position:fixed;
  z-index:2;
  padding:0 4rem;
  align-items:center;
  transition: 0.3s ease-in-out;
.left{
  gap:2rem;
  .brand{
    img{
      height:2rem;
    }
  }
  .links{
    list-style-type:none;
    gap: 2rem;
    li{
      a{
        color:white;
        text-decoration:none;
      }
         text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .7s;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
    }
  }
}
.right{
  gap: 1rem;
  button{
    background-color:transparent;
    border:none;
    cursor:pointer;
    &:focus{
      outline:none;
    }
    svg{
      color: #098de5;
      font-size: 1.2rem;
    }
  }
  .search{
  
    display:flex;
    gap:0.4rem;
    align-items:center;
    justify-content:center;
    padding:0.2rem;
    padding-left:0.5rem;
    button{
      background-color:transparent;
      svg{
        color:white;
      }
        
    }
    input{
    width: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  border: none;
  color: white;
  border-radius: 25px; /* This will create rounded corners */

  &:focus {
    outline: none;
    width: 200px; /* or any width you want when the input is focused */
    opacity: 1;
    visibility: visible;
      }
    }
  }
  .show-search{
    border:1px solid white;
    background-color: rgba(0,0,0,0.6);
    input{
      width:100%;
      opacity:1;
      visibility:visible;
      padding: 0.3rem;
    }
  }
}
}
`;