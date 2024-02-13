import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {

  const[activeLink , setActiveLink] =useState('/');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">
        <Link className='navbar-brand' to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={activeLink === '/'? 'active nav-link' : 'nav-link'} to="/" onClick={()=>{
                onUpdateActiveLink('/')
              }}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={activeLink === '/create'? 'active nav-link' : 'nav-link'} to="/create" onClick={()=>{
                onUpdateActiveLink('/create')
              }}>NEW BLOG</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

