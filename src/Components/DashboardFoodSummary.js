import React from 'react';
import { Statistic } from 'semantic-ui-react';

/* ****************** */
/*     Component      */
/* ****************** */
class DashboardFoodSummary extends React.Component {

    /* NOTA: isto foi como eh fiz, e sem o return do .map(). Isto esta errado! :NOTA
    Calculating the number of breastFeeding sessions that the user input in the array */ 
   /*  breastFeeding = (array) => {
        debugger
        let counter = 0;
        return array.data.map(item => {
            if (item.breast !== null) {
                return (counter++)
            } else return counter
        });
    }; */


    breastFeeding = (array) => {
        return array.data.reduce((acc, arrayItem)=> {
            if (arrayItem.breast) return acc +1
            else return acc 
        }, 0)
    }
 
    formulaFeeding = (array) => {
        return array.data.reduce((acc, arrayItem)=> {
            if (arrayItem.quantity) return acc +1
            else return acc
        }, 0)
    }

    render() {
        
        const { food } = this.props;
        
        const totalMeals = food.data.length;
        const breastFeeding = this.breastFeeding(food);
        const formulaFeeding = this.formulaFeeding(food);
       
        return (
            <div>
                <Statistic.Group>
                <Statistic>
                    <Statistic.Value>{ food ? totalMeals : "0" }</Statistic.Value>
                    <Statistic.Label>N. of feedings</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{ food ? breastFeeding : "0" }</Statistic.Value>
                    <Statistic.Label>breast</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{ food ? formulaFeeding : "0" }</Statistic.Value>
                    <Statistic.Label>formula</Statistic.Label>
                </Statistic>
                </Statistic.Group>
            </div>
        )
    }
}

export default DashboardFoodSummary;