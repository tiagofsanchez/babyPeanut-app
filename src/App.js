import React, { Component } from 'react';
import './App.css';
import VerticalMenu from './Components/VerticalMenu';
import BabyFoodForm from './Components/BabyFoodForm';



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

  /* Taking information from BabyFoodForm and saving into the App State */
  babyFood = (babyFood) => {
    this.setState( (prevState) => ({
      food: {
        ...this.state.food,
        data: [...this.state.food.data, babyFood]
      }
    }))
  }

  


  render() {

    const { type } = this.state;

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
              <BabyFoodForm babyFood={this.babyFood}/>
            </div>
            <div className="babyOutput flexItem">
             {this.state.food.title} 
            </div>

          </main>
          <aside className="sidebar sidebarLeft">
            <h2><i className="em em-paperclip"></i> menu</h2>
            <VerticalMenu menu={this.changeBabyForm} />

          </aside>

        </div>
        <footer className="flexContainer flexCenter blueBackground whiteText height50">&copy; babyPeanut </footer>
      </div >
    );
  }
}

export default App;
