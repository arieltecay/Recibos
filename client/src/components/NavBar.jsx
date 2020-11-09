import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'


export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <p>Logo</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active ">
              <Link className="text-white text-uppercase align-center h5 " to="/saldo">Saldo&nbsp;<i class="fas fa-home"></i></Link>
            </li>
            <li className="nav-item ml-2">
              <Link className="text-white text-uppercase align-center h5" to="/addMovements"> Movimientos&nbsp;<i class="fas fa-home"></i></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}