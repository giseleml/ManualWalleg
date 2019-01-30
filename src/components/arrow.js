import React from 'react'

export class UpArrow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false
    }
  }

  TakeMeHome() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset >= 400) {
        return this.setState({ isVisible: true})
      }
      return this.setState({ isVisible: false})
    }
  }

  render(){
    return(
    <div className={ this.state.isVisible? 'up-arrow' : 'up-arrow-invisible' } onClick={this.TakeMeHome}>
      <img src="https://4.bp.blogspot.com/-fOBBkanbek0/W7ZttepLxBI/AAAAAAAAAc0/YU0nO4dPzVwH4stdm4AyPq8hYYRvM2O-gCLcBGAs/s1600/arrows.png"
      alt="an arrow"/>
    </div>
    )
  }
}
