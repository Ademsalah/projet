import React from 'react'
import "./Admin.css"
const Admin = () => {
  return (
    <div>
      <>
  
    
  
    
      
      <section className="main-content">
        <div className="app">
          <header className="sub-menu">
            <div className="title"> Projects </div>
            {<ul className="menu">
              <li>
                {" "}
                All
                <div className="badge"> 87 </div>
              </li>
              <li className="selected">
                {" "}
                Current
                <div className="badge"> 6 </div>
              </li>
              <li>
                {" "}
                Pending
                <div className="badge"> 2 </div>
              </li>
              <li>
                {" "}
                Completed
                <div className="badge"> 79 </div>
              </li>
              <li> Failed </li>
            </ul>}
            <div className="user-options">
              <div className="icon">
                {" "}
                <i className="fa fa-search" aria-hidden="true" />{" "}
              </div>
              <div className="icon">
                {" "}
                <i className="fa fa-bell-o" aria-hidden="true" />
                <div className="badge"> 3 </div>
              </div>
              <div className="icon user-img">
                {" "}
                <img
                  src="https://source.unsplash.com/36x36/?human"
                  alt="Image 001"
                />{" "}
              </div>
            </div>
          </header>
          <section className="app-content">
            <header>
              <div className="searchbox">
                <div className="icon">
                  {" "}
                  <i className="fa fa-search" aria-hidden="true" />{" "}
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search a project"
                  className="search-text"
                />
              </div>
              <div className="app-list-options">
     
                  </div>
               
             
            </header>
            <ul className="projects">
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                
                
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "94%" }}
                    data-value={94}
                  />
                  <progress max={100} value={94} data-value={94}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 2
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brand"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Homechoice </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> homchoice.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "64%" }}
                    data-value={64}
                  />
                  <progress max={100} value={64} data-value={64}>
                    {" "}
                    64%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days warning">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 4
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?icon"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Big Money Real Estate </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> bigmoneyrealestate.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "59%" }}
                    data-value={59}
                  />
                  <progress max={100} value={59} data-value={59}>
                    {" "}
                    59%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days warning">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 5
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?adventure"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Springfield media </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> springfieldmedia.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "94%" }}
                    data-value={94}
                  />
                  <progress max={100} value={94} data-value={94}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 7
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?flower"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Regular Logistics </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> regularlogistics.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "44%" }}
                    data-value={44}
                  />
                  <progress max={100} value={44} data-value={44}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 9
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Foursquare Agency </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> foursquareagency.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "39%" }}
                    data-value={39}
                  />
                  <progress max={100} value={39} data-value={39}>
                    {" "}
                    39%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 11
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?r"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Piece Studio </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> piecestudio.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "34%" }}
                    data-value={34}
                  />
                  <progress
                    max={100}
                    value={34}
                    data-value={34}
                    className="low"
                  >
                    {" "}
                    34%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 12
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?sanfrancisco"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Legacy Foundation </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> legacyfoundation.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "32%" }}
                    data-value={32}
                  />
                  <progress max={100} value={32} data-value={94}>
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 12
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Sports Interactive </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> sportsinteractive.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "94%" }}
                    data-value={94}
                  />
                  <progress max={100} value={94} data-value={94}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 2
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Sports Interactive </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> sportsinteractive.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "94%" }}
                    data-value={94}
                  />
                  <progress max={100} value={94} data-value={94}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 2
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Legacy Foundation </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a href="#"> legacyfoundation.com </a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Web resource which contains all about transfer in the world
                    of sports.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "32%" }}
                    data-value={32}
                  />
                  <progress max={100} value={32} data-value={32}>
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 2
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    
  
</>

    </div>
  )
}

export default Admin
