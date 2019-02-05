import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
/* (why whenever I import semantic ui css I lose the fonts that i wanted to have) */


export default class VerticalMenu extends Component {
  state = { 
      activeItem: 'Food' 
    }
  
  /* event handler that changes the state of this componemt by "checking in" the state of the parent component */  
  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      this.props.menu(name); 
    }

  render() {
    const { activeItem } = this.state; 
  
      return (
          <div>
              <Menu vertical secondary fluid>
                  <Menu.Item
                      name='Food'
                      active={activeItem === 'Food'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='Output'
                      active={activeItem === 'Output'}
                      onClick={this.handleItemClick}
                     
                  />
                  <Menu.Item
                      name='Sleep'
                      active={activeItem === 'Sleep'}
                      onClick={this.handleItemClick}
                  />
              </Menu>
          </div>
        )
    }
}