import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";

export default function TabsEx() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabSelect = (eventKey) => setActiveTab(eventKey);

  return (
    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">Content for tab 1 goes here</Tab.Pane>
        <Tab.Pane eventKey="tab2">Content for tab 2 goes here</Tab.Pane>
        <Tab.Pane eventKey="tab3">Content for tab 3 goes here</Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
