import React from 'react'

export class UpArrow extends React.Component {
  TakeMeHome() {
    window.scrollTo(0, 0);
  }
  render(){
    return(
    <div className="up-arrow" onClick={this.TakeMeHome}>
      <img src="https://4.bp.blogspot.com/-fOBBkanbek0/W7ZttepLxBI/AAAAAAAAAc0/YU0nO4dPzVwH4stdm4AyPq8hYYRvM2O-gCLcBGAs/s1600/arrows.png"
      alt="an arrow"/>
    </div>
    )
  }
}
