import React from "react";
 
class Menubar extends React.Component {
  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>



      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="row">
            </div>
          </div>
        </div>
      </React.Fragment>

      
    );
  }
}
 
export default Menubar;