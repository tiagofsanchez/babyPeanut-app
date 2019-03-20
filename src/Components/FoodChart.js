import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import * as moment from 'moment';
import Loading from './Loading';


/* ****************** */
/* Styled Components */
/* ****************** */
const GraphWrapper = styled.div`
    padding:25px 25px 0px 25px; 
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
        /* I am grouping the my object array food considering datetime property and returning a new objec */
        const groupByFood = this.groupBy(food, "datetime");
        /* defining variable data, that will go to the chart of my component considering the data on the state of tha app after transforming it for the format we would want */
        const data = Object.keys(groupByFood).map(item => {
            const date = item.substring(6, 10) + -+ item.substring(3, 5) + -+ item.substring(0, 2);
            const newDate = moment(date).format('Do MMM');
            return ({ 
                name: newDate, 
                formula: groupByFood[item].quantity, 
                breast: groupByFood[item].duration, 
            })
        })
        console.log(food.data);
        

        return (
            <div>
            {food.data.length<1 ?  
            <Loading /> 
            :
                        
                    <BarChart width={700} height={250} data={data} margin={{ top: 35, right: 25, bottom: 0, left: 25 }}>
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" label={{ value: 'time (mins)', angle: -90, position: 'insideLeft' }} orientation="left" stroke="rgb(0, 132, 180)" />
                        <YAxis yAxisId="right" label={{ value: 'quantity (ml)', angle: 90, position: 'insideRight' }} orientation="right" stroke="rgb(192, 222, 237)" />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                        <Bar yAxisId="left" dataKey="breast" fill="rgb(0, 132, 180)" legendType="circle" barSize={25}/>
                        <Bar yAxisId="right" dataKey="formula" fill="rgb(192, 222, 237)" legendType="circle" barSize={25}/>
                    </BarChart>
        
                    }
            </div>
        )
    }
}

export default FoodChart;


