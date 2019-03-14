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
class DashboardOutputSummary extends React.Component {
    render () {

        const { output } = this.props;

        const totalOutput = output.data.length;

        return (
            <DashboardFrame>
                <Statistic.Group widths="1">
                    <Statistic>
                        <Statistic.Label>N. of Outputs</Statistic.Label>
                        <Statistic.Value>{output ? totalOutput : "0"}</Statistic.Value>
                    </Statistic>
                </Statistic.Group>
                </DashboardFrame>
        )
    }
}

export default DashboardOutputSummary;