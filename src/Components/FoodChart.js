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

    /* Function que vai agregar a meu objectArray pela propriedade que eu quero e soma o quantity e duration*/
    groupBy = (objectArray, property) => {
        return objectArray.data.reduce((acc, obj) => {
            const key = obj[property].slice(0, 10);
            return {
                ...acc,
                [key]: {
                    data: acc[key] ? [...acc[key].data, obj] : [obj],
                    quantity: acc[key] ? acc[key].quantity + Number(obj.quantity) : Number(obj.quantity),
                    duration: acc[key] ? acc[key].duration + Number(obj.duration) : Number(obj.duration),
                }}
        }, [])
    }

    render() {

        const { food } = this.props;

        const groupByFood = this.groupBy(food, "datetime");
        const data = Object.keys(groupByFood).map(item => {
            const date = item.substring(6, 10) + -+ item.substring(3, 5) + -+ item.substring(0, 2);
            const newDate = moment(date).format('Do MMM');
            return ({ 
                name: newDate, 
                uv: groupByFood[item].quantity, 
                pv: groupByFood[item].duration 
            })
        })

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


