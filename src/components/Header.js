import React, { Component } from "react";
import  { ReactTyped } from 'react-typed';

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
    }

    let title1 = this.props.resumeBasicInfo?.titles[0] || "Experienced Software Developer";
    let title2 = this.props.resumeBasicInfo?.titles[1] || "3rd Year Student @OAMK";

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <div className="title-anime-div">
        <ReactTyped
          className="title-anime-style"
          strings={[
            title1
          ]}
          typeSpeed={100} 
          showCursor={false}                      
        />
        <ReactTyped
          className="title-anime-style"
          strings={[
            title2
          ]}
          typeSpeed={100} 
          showCursor={false}                         
        />
      </div>
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
