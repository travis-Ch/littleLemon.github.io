import { Link, Outlet } from "react-router-dom"
import React from "react"

//images
import  logoWordmark  from "../assets/logoWordmark.png"
import logoFooter from "../assets/logoFooter.png"

export default function Layout() {
  return (
    <div className="rootLayout">
        <header>
            <nav className="navBar">
                <img src={ logoWordmark } alt="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><Link to="/orderOnline">Order Online</Link></li>
                </ul>
                <Link to="/login">Login</Link>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <img src={logoFooter} alt="footer-logo"/>
            <dl>
                <dt className="siteMap">Site Map</dt>
                <dd><Link to="/">Home</Link></dd>
                <dd><a href="">Menu</a></dd>
                <dd><Link to="/reservation">Reservation</Link></dd>
                <dd><Link to="/orderOnline">Order Online</Link></dd>
                <dd><Link to="/login">Login</Link></dd>
            </dl>
            <dl>
                <dt>Contact</dt>
                <dd><p>22 Road, Chicago </p></dd>
                <dd><p>0012345678</p></dd>
                <dd><a href="ContactUs@little-lemon.com">ContactUs@little-lemon.com</a></dd>
            </dl>
            <dl>
                <dt>Social-Media</dt>
                <dd><a href="www.facebook.com">Facebook</a></dd>
                <dd><a href="www.instagram.com">Instagram</a></dd>
                <dd><a href="www.twitter.com">Twitter</a></dd>
            </dl>
        </footer>
    </div>
  )
}
