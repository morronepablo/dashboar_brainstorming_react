import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie';

export default function Aside() {
  const cookies = new Cookies();
  let getCookie = cookies.get('userBrainstorming');
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    if(getCookie !== undefined) {
      fetch(`/api/userEmail/${getCookie}`)
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((data) => {
            setUserLogin(data)
        })
        .catch((error) => console.log(error));
    }
  }, []);


  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="http://Localhost:4000/home" className="brand-link">
        <img
          src="dist/img/Brainstorming_logo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Brainstorming</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={`http://localhost:4000/img/users/${userLogin.avatar ? userLogin.avatar : 'user_default.png'}`}
              className="img-circle elevation-2"
              alt="User Image"
              style={{ "width": '30px'},{"height": '30px' }}
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {userLogin.fullName}
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <Link to="/" className="nav-link bg-primary">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-down" />
                </p>
              </Link>
            </li>
            <li className="nav-item menu-open">
              <Link to="/allProducts" className="nav-link bg-warning">
                <i className="nav-icon fas fa-boxes" />
                <p>
                  Todos los productos
                  <i className="right fas fa-angle-down" />
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
