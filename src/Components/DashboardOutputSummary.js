import React from 'react';
import { Statistic } from 'semantic-ui-react';

/* ****************** */
/* Styled Components */
/* ****************** */


/* ****************** */
/*     Component      */
/* ****************** */
class DashboardOutputSummary extends React.Component {
    render () {

        const { output } = this.props;

        const totalOutput = output.data.length;

        return (
            <div>
                <Statistic.Group widths="1">
                    <Statistic>
                        <Statistic.Label>N. of Outputs</Statistic.Label>
                        <Statistic.Value>{output ? totalOutput : "0"}</Statistic.Value>
                    </Statistic>
                </Statistic.Group>
            </div>
        )
    }
}

export default DashboardOutputSummary;