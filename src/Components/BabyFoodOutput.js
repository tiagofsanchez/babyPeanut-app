import React from 'react';
import { Segment , Table } from 'semantic-ui-react';

/* This component is not loaded because the sate has not passed any information ?*/
class BabyFoodOutput extends React.Component {
    state = {
        show: null
    }

    render() {
        const { food } = this.props;

        return (
            <div style={{margin:"10px"}}>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>
            
            </div>

            
            
            
            /* <Segment basic>
            <thead>
                    <tr>
                        <th>Time</th>
                        <th>Breast / Formula</th>
                        <th>Duration / Quantity</th>
                        <th>Your Notes</th>
                    </tr>
                </thead>
            <table>
                <tbody>
                    <tr>
                        <td>{food.datetime}</td>
                        {food.breast? <td>{food.breast}</td> : <td>formula</td> }
                        {food.duration? <td>{food.duration}</td> : <td>{food.quantity}</td> }
                        <td>{food.text}</td>
                    </tr>
                </tbody>
            </table>
            </Segment> */
        )
    }
}

export default BabyFoodOutput;