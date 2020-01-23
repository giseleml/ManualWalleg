import React from 'react';
import { Link } from "react-router-dom";

import linksToRoute from './links.js'

export class SideNav extends React.Component {
  render() {
    return(
      <div className="side-nav">
        <div className="side-nav-info">
          <img className="logo-walleg" src="https://1.bp.blogspot.com/--8K7QPoVvdg/XO1ZmPR_l4I/AAAAAAAAA3Q/gu1RRp4YDGAvkl1H1NBSbSNS_gKHQ7MQgCLcBGAs/s1600/walleg-logo.png" alt = "Logo Walleg"/>
        </div>
        <div className="side-nav-menu">
          {
            linksToRoute.map((link, i) => <Link to={link.url} key={i}>{link.title}</Link>)
          }
        </div>
     </div>
    )
  }
}

