import React from 'react';
import { Statistic } from 'semantic-ui-react';

/* ****************** */
/*     Component      */
/* ****************** */
class DashboardSummary extends React.Component {
    render() {

        const { food , output } = this.props;
        const totalMeals = food.data.length;
        
       
        return (
            <div>
                <Statistic.Group>
                <Statistic>
                    <Statistic.Value>{ food ? totalMeals : "0" }</Statistic.Value>
                    <Statistic.Label>testing</Statistic.Label>
                </Statistic>
                </Statistic.Group>
            </div>
        )
    }
}

export default DashboardSummary;