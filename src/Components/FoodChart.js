import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import * as moment from 'moment';


/* ****************** */
/* Styled Components */
/* ****************** */
const GraphWrapper = styled.div`
    padding: 40px 25px 25px 25px; 
`;


/* ****************** */
/*     Component      */
/* ****************** */


class FoodChart extends React.Component {

    /* Function que vai agregar a meu objectArray pela propriedade que eu quero */
    groupBy = (objectArray, property) => {
        return objectArray.data.reduce((acc, obj) => {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {})
    }

    /* Function que vai somar uma certa propriedade de um objectArray */
    sum = (objectArray, property) => {
        return objectArray.reduce((acc, obj) => {
            return acc + Number(obj[property]);
        }, 0)
    }

    render() {

        const { food } = this.props;

        const groupByFood = this.groupBy(food, "datetime");
        const newFood = Object.keys(groupByFood).reduce((objectArray, key) => {
            const totalDuration = this.sum(groupByFood[key], "duration");
            const totalQuantity = this.sum(groupByFood[key], "quantity");
            objectArray[key] = { duration: totalDuration, quantity: totalQuantity };
            return objectArray;
        }, {});

        console.log(newFood);
       const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      ]; 
        
        /* const data = {
            if(newFood) {
                newFood.map(item => {
                    const date = item.substring(6, 10) + -+ item.substring(3, 5) + -+ item.substring(0, 2) + " " + item.substring(11, 16);
                    const newDate = moment(date).format('Do MMM');
                       return ({ name: newDate, uv: item.duration, pv: item.quantity })
                })
            } else {return {}}
         
        } */


        return (
            <GraphWrapper>
                <BarChart width={600} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </GraphWrapper>
        )
    }
}

export default FoodChart;


