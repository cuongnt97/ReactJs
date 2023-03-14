import React from 'react'
import { useState } from 'react';

import {Nav, Tab, TabContainer} from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthForm() {

    const [activeTab, setActiveTab] = useState("loginForm");
    const handleTabSelect = (eventKey) => setActiveTab(eventKey)

  return (
    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="loginForm">Login</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="signupForm">Signup</Nav.Link>
        </Nav.Item> */}
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="loginForm"><LoginForm/></Tab.Pane>
        {/* <Tab.Pane eventKey="signupForm"><SignupForm /></Tab.Pane> */}
      </Tab.Content>
    </Tab.Container>
  );
}
