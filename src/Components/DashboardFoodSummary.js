import React from 'react';
import { Statistic } from 'semantic-ui-react';
import styled from 'styled-components';

/* ****************** */
/* Styled Components */
/* ****************** */
const DashboardFrame = styled.div` 
    padding: 20px; 
`;


/* ****************** */
/*     Component      */
/* ****************** */
class DashboardFoodSummary extends React.Component {

    /* Counting the number of breastFeeding */
    breastFeeding = (array) => {
        return array.data.reduce((acc, arrayItem) => {
            if (arrayItem.breast) return acc + 1
            else return acc
        }, 0)
    }

    /* Counting the number of formulaFeeding */
    formulaFeeding = (array) => {
        return array.data.reduce((acc, arrayItem) => {
            if (arrayItem.quantity) return acc + 1
            else return acc
        }, 0)
    }

    render() {

        const { food } = this.props;

        const totalMeals = food.data.length;
        const breastFeeding = this.breastFeeding(food);
        const formulaFeeding = this.formulaFeeding(food);

        return (
            <DashboardFrame>
                <Statistic.Group widths="1">
                    <Statistic>
                        <Statistic.Label>N. of feedings</Statistic.Label>
                        <Statistic.Value>{food ? totalMeals : "0"}</Statistic.Value>
                    </Statistic>
                </Statistic.Group>
                <br />
                <Statistic.Group size="mini" widths="2">
                    <Statistic >
                        <Statistic.Value>{food ? breastFeeding : "0"}</Statistic.Value>
                        <Statistic.Label><i className="em em-breast-feeding"></i></Statistic.Label>
                    </Statistic>
                    <Statistic >
                        <Statistic.Value>{food ? formulaFeeding : "0"}</Statistic.Value>
                        <Statistic.Label> <i className="em em-baby_bottle"></i></Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </DashboardFrame>
        )
    }
}

export default DashboardFoodSummary;