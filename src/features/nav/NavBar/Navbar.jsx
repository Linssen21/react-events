import React, { Component } from 'react'
import {Menu, Container, Button} from 'semantic-ui-react';

 class Navbar extends Component {

  render() {
    return (
     <Menu inverted fixed="top" >
         <Container>
             <Menu.Item>
                 <img src="assets/images/logo.png" alt="logo"/>
                 React Events
             </Menu.Item>
             <Menu.Item>
                 <Button className="mainbutton" floated="right"   color="blue" content="Create Event"/>
             </Menu.Item>
             <Menu.Item position="right">
                <Button basic inverted content="Login"/>
                <Button basic inverted content="Sign out" style={{marginLeft: '0.5em'}}/>
             </Menu.Item>
         </Container>
     </Menu>
    )
  }

}

export default Navbar
