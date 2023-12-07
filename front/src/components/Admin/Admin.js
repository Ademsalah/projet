import React from 'react'
import "./Admin.css"
import StadiumCards from './zidenkeryet/Cards/StadiumCards'
import {useNavigate} from 'react-router-dom'
const Admin = ({auth}) => {
  const navigate = useNavigate()
  console.log('nthbtou foil aut',auth)
  return (
    <div className='bodyAdmin'>
    <header className="headerAdmin">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="#">
            <div>
              <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" />
            </div>
            <img src="https://assets.codepen.io/285131/untitled-ui.svg" />
          </a>
        </div>
        <div className="header-navigation">
          <nav className="header-navigation-links">
            <a href="#"> Home </a>
            <a href="#"> Dashboard </a>
            <a href="#"> Projects </a>
            <a href="#"> Tasks </a>
            <a href="#"> Reporting </a>
            <a href="#"> Users </a>
          </nav>
          <div className="header-navigation-actions">
            <a href="#" className="buttonAdmin">
              <i className="ph-lightning-bold" />
              <span>Upgrade now</span>
            </a>
            <a href="#" className="icon-button">
              <i className="ph-gear-bold" />
            </a>
            <a href="#" className="icon-button">
              <i className="ph-bell-bold" />
            </a>
            <a href="#" className="avatar">
              <img src="https://assets.codepen.io/285131/hat-man.png" alt="" />
            </a>
          </div>
        </div>
        <a href="#" className="buttonAdmin">
          <i className="ph-list-bold" />
          <span>Menu</span>
        </a>
      </div>
    </header>
    <main className="main">
      <div className="responsive-wrapper">
        <div className="main-header">
          <h1>Settings</h1>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <i className="ph-magnifying-glass-bold" />
            </button>
          </div>
        </div>
        <div className="horizontal-tabs">
          <a href="#">My details</a>
          <a href="#">Profile</a>
          <a href="#">Password</a>
          <a href="#">Team</a>
          <a href="#">Plan</a>
          <a href="#">Billing</a>
          <a href="#">Email</a>
          <a href="#">Notifications</a>
          <a href="#" className="active">
            Integrations
          </a>
          <a href="#">API</a>
        </div>
        <div className="content-headerAdmin">
       
          <div className="content-headerAdmin-actions">
            <a href="#" className="buttonAdmin">
              <i className="ph-faders-bold" />
              <span>Filters</span>
            </a>
            <a href="#" className="buttonAdmin">
              <i className="ph-plus-bold" />
              <span>Request integration</span>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="content-panel">
            <div className="vertical-tabs">
              <a href="#" className="active">
                View all
              </a>
              <a href="#">Developer tools</a>
              <a href="#">Communication</a>
              <a href="#">Productivity</a>
              <a href="#">Browser tools</a>
              <a href="#">Marketplace</a>
            </div>
          </div>
          <div className="content-main">
            <div className="card-grid">
              <StadiumCards/>
             
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  )
}
export default Admin
