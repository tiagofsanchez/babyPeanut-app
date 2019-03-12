import React from 'react'; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend  } from 'recharts';
import styled from 'styled-components';


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
    render() {
        
        const { food } = this.props;
        
        const data = food.data.map(item =>  
             ({name: item.datetime , uv: item.duration, pv: item.quantity}));

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


