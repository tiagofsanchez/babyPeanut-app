import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import * as moment from 'moment';
import Loading from './Loading';



/* ****************** */
/* Styled Components */
/* ****************** */
const GraphWrapper = styled.div`
    padding: 40px 25px 25px 25px; 
`;

class OutputChart extends React.Component {
    render () {
        return ( 
            <div>
                <Loading/>
            </div>
        )
        }
}

export default OutputChart;