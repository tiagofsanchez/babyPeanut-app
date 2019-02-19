import React from 'react';
import { Table, Input } from 'semantic-ui-react';


class BabyFoodOutput extends React.Component {

    handleEdit = (event, key) => {
        this.props.onEdit(event.target.value, key)
    };

    render() {
        const { food } = this.props;

        return (
            <div style={{ margin: "10px" }}>
                <Table unstackable size="small" >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell singleLine>Feeding</Table.HeaderCell>
                            <Table.HeaderCell singleLine>What</Table.HeaderCell>
                            <Table.HeaderCell>Your Notes</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {food.data && food.data.map(food => {
                        return (
                            <Table.Body key={food.id}>
                                <Table.Row >
                                    <Table.Cell singleLine>{food.datetime}</Table.Cell>
                                    <Table.Cell >{food.breast ? food.breast : <p>formula</p>}</Table.Cell>
                                    <Table.Cell >{food.duration ? food.duration : food.quantity}</Table.Cell>
                                    <Table.Cell>
                                        {food.text}
                                        {/* 
                                        This was here to make the edit happen, but now i will 
                                        <Input
                                            value={food.text}
                                            onChange={(event) => this.handleEdit(event, food.id)}
                                            transparent
                                            fluid
                                        /> */}
                                
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        )
                    })}
                </Table>
            </div>

        )
    }
}

export default BabyFoodOutput;