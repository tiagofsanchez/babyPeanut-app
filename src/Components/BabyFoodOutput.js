import React from 'react';
import { Table } from 'semantic-ui-react';


class BabyFoodOutput extends React.Component {

    render() {
        const { food } = this.props;

        return (
            <div style={{ margin: "10px" }}>
                <Table unstackable size="small" >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                            <Table.HeaderCell>Breast / Formula</Table.HeaderCell>
                            <Table.HeaderCell>Duration / Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Your Notes</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {food.data && food.data.map(food => {
                        return (
                            <Table.Row >
                                <Table.Cell >{food.datetime}</Table.Cell>
                                <Table.Cell >{food.breast ? food.breast : <p>formula</p>}</Table.Cell>
                                <Table.Cell >{food.duration ? food.duration : food.quantity}</Table.Cell>
                                <Table.Cell>{food.text}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table>
            </div>

        )
    }
}

export default BabyFoodOutput;