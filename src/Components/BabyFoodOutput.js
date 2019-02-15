import React from 'react';
import { Table, Input } from 'semantic-ui-react';


class BabyFoodOutput extends React.Component {
    
    handleCorrection=(event , value )=> {
        console.log(this.props.food.id);
    };

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
                        console.log(food.key);
                        return (
                            <Table.Body>
                                <Table.Row key={food.id} >
                                    <Table.Cell >{food.datetime}</Table.Cell>
                                    <Table.Cell >{food.breast ? food.breast : <p>formula</p>}</Table.Cell>
                                    <Table.Cell >{food.duration ? food.duration : food.quantity}</Table.Cell>
                                    <Table.Cell>
                                        <Input
                                            value={food.text}
                                            onChange={(event, value) =>this.handleCorrection(event, value) }>
                                        </Input>
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