import {ButtonToolbar, OverlayTrigger, Button, Popover} from "react-bootstrap";
import React, { Component } from "react";


class ContactButton extends Component {
    render() {
        return (
                
                <ButtonToolbar>
                {['left'].map(placement => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">Contact Info</Popover.Title>
                        <Popover.Content>
                          <strong>Email:</strong> scottfinlay@protonmail.com
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button variant="secondary" id="contactButton">Contact Info</Button>
                  </OverlayTrigger>
                ))}
              </ButtonToolbar>
        )
    }
}

export default ContactButton;