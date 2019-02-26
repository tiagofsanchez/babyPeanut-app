import React, { Component } from 'react';
import './App.css';
import SidebarMenu from './Components/SidebarMenu';
import BabyFoodForm from './Components/BabyFoodForm';
import BabyFoodOutput from './Components/BabyFoodOutput';
import BabyOutputForm from './Components/BabyOutputForm'
import BabyOututOutput from './Components/BabyOutputOutput';
import Dashboard from './Components/Dashboard';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import styled from 'styled-components';

/* ****************** */
/* Styled Components */
/* ****************** */
const AppFrame = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 50px 1fr 30px;
  min-height: 100vh;
  grid-template-areas: 
    "nav nav"
    "menu content"
    "footer footer"
`;

const NavBar = styled.div`
  grid-area: nav;
`;

const Menu = styled.div`
  grid-area: menu;
  background-color: rgb(192, 222, 237);
  height: 100%;
  padding: 10px;
`;

const AppContent = styled.div`
  grid-area: content;
`;

const FooterBar = styled.div`
  grid-area: footer; 
`;

/* ****************** */
/*     Component      */
/* ****************** */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {
        title: 'Food',
        data: [],
      },
      output: {
        title: 'Output',
        data: [],
      },
      type: 'Food',
    }

    this.babyFood = this.babyFood.bind(this);
    this.changeComponents = this.changeComponents.bind(this);
  }

  /* Handles the different Menu changes depending on user actions */
  changeComponents = (menu) => {
    this.setState({
      type: menu
    })
  }

  /* Taking information from BabyFoodForm and saving into the App state */
  babyFood = (babyFood) => {
    this.setState((prevState) => ({
      food: {
        ...this.state.food,
        data: [babyFood, ...this.state.food.data]
      }
    }))
  }

  /* Receives information from BabyOutputForm and saves it into the App state */
  babyOutput = (babyOutput) => {
    this.setState((prevState) => ({
      output: {
        ...this.state.output,
        data: [babyOutput, ...this.state.output.data]
      }
    }))
  }

  /* Updating the selected item from the Modal via BabyFoodForm and BabyOutputForm */
  editEntry = (edit) => {
    const { food, output } = this.state;
    this.setState(prevState => ({
      food: {
        ...food,
        data: food.data.map(item => {
          if (item.id === edit.id) {
            return {
              id: edit.id,
              breast: edit.breast,
              duration: edit.duration,
              quantity: edit.quantity,
              datetime: edit.datetime,
              text: edit.text,
              disabledFormula: edit.disabledFormula,
            }
          } else {
            return item
          }
        })
      }
    }))
    this.setState(prevState => ({
      output: {
        ...output,
        data: output.data.map(item => {
          if (edit.id === item.id) {
            return {
              id: edit.id,
              output: edit.output,
              datetime: edit.datetime,
              text: edit.text
            }
          } else {
            return item
          }
        })
      }
    }))
  }

  /* Delete the entry that the user selected form food input as well as from output */
  entryDelete = (id) => {
    const { food, output } = this.state;
    this.setState(prevState => ({
      food: {
        ...food,
        data: food.data.filter(entry => entry.id !== id)
      },
      output: {
        ...output,
        data: output.data.filter(entry => entry.id !== id)
      }
    }))
  }


  render() {

    const { type, food, output } = this.state;

    return (
      <div>
        {type === 'Dashboard' ?
          <AppFrame>
            <NavBar>
              <Nav/> 
            </NavBar> 
            <Menu>
              <SidebarMenu menu={this.changeComponents} />
            </Menu>
            <AppContent>
              <Dashboard />
            </AppContent>
            <FooterBar>
              <Footer />
            </FooterBar>
          </AppFrame>
        :
        <div className="flexContainer flexColumn fullHeight ">
          <nav className="flexContainer blueBackground">
            <ul className="nav flexItem flexStart">
              <li><i className="em em-baby"></i>babyPeanut <i className="em em-peanuts"></i> app</li>
            </ul>
          </nav>
          <div className="flexContainer flexItem">
            <main className="flexItem main flexContainer flexColumn ">
              <div className="menuTitle" >
                {type === 'Food' ?
                  <h3> <span className="highlight"> Food </span> for your <i className="em em-baby"></i> </h3>
                  :
                  type === 'Output' ?
                    <h3> Your <span className="highlight">Baby</span>  <i className="em em-hankey"></i> </h3>
                    :
                    null}
              </div>
              <div className="babyInput ">
                {type === 'Food' ?
                  <BabyFoodForm babyFood={this.babyFood} />
                  :
                  type === 'Output' ?
                    <BabyOutputForm babyOutput={this.babyOutput} />
                    :
                    null
                }
              </div>
              <div className="babyOutput flexItem">
                {type === 'Food' ?
                  <BabyFoodOutput food={food} entryDelete={this.entryDelete} onEdit={this.editEntry} />
                  :
                  <BabyOututOutput output={output} entryDelete={this.entryDelete} onEdit={this.editEntry} />
                }
              </div>
            </main>
            <aside className="sidebar sidebarLeft">
              <SidebarMenu menu={this.changeComponents}/>
            </aside>
          </div>
          <footer className="flexContainer flexCenter blueBackground whiteText height50 footer">&copy; babyPeanut </footer>
        </div>
        }
      </div>
    );

  }
}


export default App;
