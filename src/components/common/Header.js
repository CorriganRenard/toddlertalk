import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {

    return(
      <div className="container-fluid" id="header">
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
{/*
          <!-- Brand and toggle get grouped for better mobile display -->
*/}
          <div className="navbar-header">

            <Link to="/" className="navbar-brand">Brand</Link>
          </div>

{/*
           Collect the nav links, forms, and other content for toggling -->
*/}
          <div className="">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <IndexLink to="/" activeClassName="active">Home </IndexLink>
              </li>
              <li className="nav-item">
                <Link to="/beehives" activeClassName="active">Yard</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" activeClassName="active">About

                </Link>
              </li>

            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <IndexLink to="/about" activeClassName="active">Register </IndexLink>
              </li>
              <li className="nav-item">
                <Link to="/about" activeClassName="active">Sign In</Link>
              </li>

            </ul>
          </div> {/*/.navbar-collapse -->*/}
        </div> {/*/.container-fluid -->*/}
      </nav>
</div>

    );
};




export default Header;
