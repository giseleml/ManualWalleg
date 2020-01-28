import React from 'react';
import { Link } from "react-router-dom";

import linksToRoute from './routes.js'

export class SideNav extends React.Component {
  render() {
    return(
      <div className="side-nav">
        <input type="checkbox" id="hamb-btn"/>
          <label htmlFor="hamb-btn">
              <span></span>
              <span></span>
              <span></span>
          </label>
        <div className="side-nav-menu">
          {
            linksToRoute.map((link, i) => <Link to={link.url} key={i}>{link.title}</Link>)
          }
        </div>
     </div>
    )
  }
}

