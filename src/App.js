import React, { Component } from 'react';
import './App.css';
import VerticalMenu from './Components/VerticalMenu';
import BabyFoodForm from './Components/BabyFoodForm';
import BabyFoodOutput from './Components/BabyFoodOutput';
import BabyOutputForm from './Components/BabyOutputForm'




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
      sleep: {
        title: 'Sleep',
        data: []
      },
      type: 'Food',
    }

    this.babyFood = this.babyFood.bind(this);
    this.changeBabyForm = this.changeBabyForm.bind(this);
  }

  /* Menu changes */
  changeBabyForm = (menu) => {
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
    console.log(this.state.food);
  }

  /* Receives information from BabyOutputForm and saves it into the App state */
  babyOutput = (babyOutput) => {
    this.setState((prevState)=> ({
      output : {
        ...this.state.output,
        data: [babyOutput, ...this.state.output.data]
      }
    }))
    console.log(this.state.output);
  }


  /* receive the edits of text and change the state of the App so that we have a single source of true */
  updateBabyFood = (text, id) => {
    console.log(id);
    console.log(text);
    const { food } = this.state;
    console.log(food.data[0].id);
    console.log(food)
    food.data.map(food => {
      if (food.id === id) {
        return (this.setState({
          food: {
            ...food,
            text: text
          }
        }))
      }
    })
  }


  render() {

    const { type, food } = this.state;

    return (
      <div className="flexContainer flexColumn fullHeight ">
        <nav className="flexContainer blueBackground">
          <ul className="nav flexItem flexStart">
            <li><i className="em em-baby"></i> babyPeanut <i className="em em-peanuts"></i> app</li>
          </ul>
        </nav>
        <div className="flexContainer flexItem">
          <main className="flexItem main flexContainer flexColumn">
            <div className="menuTitle" >
              {type === 'Food' ?
                <h3> <span className="highlight"> Food </span> for your <i className="em em-baby"></i> </h3>
                :
                type === 'Output' ?
                  <h3> <span className="highlight"> Baby  </span> <i className="em em-hankey"></i> </h3>
                  :
                  type === 'Sleep' ?
                    <h3> Your <span className="highlight"> baby </span> is <i className="em em-sleeping"></i></h3>
                    :
                    null}

            </div>
            <div className="babyInput flexItem">
              {type === 'Food' ?
                <BabyFoodForm babyFood={this.babyFood} />
                :
                type === 'Output' ?
                  <BabyOutputForm babyOutput={this.babyOutput}/>
                  :
                  null
              }
            </div>
            <div className="babyOutput flexItem">
              {type === 'Food' ?
                <BabyFoodOutput food={food} onEdit={this.updateBabyFood} />
                :
                null
              }
            </div>

          </main>
          <aside className="sidebar sidebarLeft">
            <h2><i className="em em-paperclip"></i> menu</h2>
            <VerticalMenu menu={this.changeBabyForm} />

          </aside>

        </div>
        <footer className="flexContainer flexCenter blueBackground whiteText height50 footer">&copy; babyPeanut </footer>
      </div >
    );
  }
}

export default App;
