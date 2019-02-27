import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';


/* ****************** */
/* Styled Components */
/* ****************** */
const H2 = styled.div`
color: #f2711c; 
font-size: 1.5em; 
`;

/* ****************** */
/*     Component      */
/* ****************** */
export default class SidebarMenu extends Component {
    state = {
        activeItem: 'Food',
        visible: false
    }

    /* event handler that changes the state of this componemt by "checking in" the state of the parent component */
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.props.menu(name)
    }

    render() {

        const { activeItem, visible } = this.state;

        return (
            
                <div>
                    <H2 className='menu'><i className="em em-paperclip"></i> Menu</H2>
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
                            name='Dashboard'
                            active={activeItem === 'Dashboard'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </div>
            

        )
    }
}