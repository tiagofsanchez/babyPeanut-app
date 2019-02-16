import React from 'react';
import { Table, Input } from 'semantic-ui-react';


class BabyFoodOutput extends React.Component {
    
    
    handleEdit=( event , key )=> {
       this.props.onEdit (event.target.value, key) 
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
                        return (
                            <Table.Body>
                                <Table.Row key={food.id} >
                                    <Table.Cell key={food.id} >{food.datetime}</Table.Cell>
                                    <Table.Cell key={food.id} >{food.breast ? food.breast : <p>formula</p>}</Table.Cell>
                                    <Table.Cell key={food.id} >{food.duration ? food.duration : food.quantity}</Table.Cell>
                                    <Table.Cell>
                                        <Input
                                            key={food.id}
                                            value={food.text}
                                            onChange={( event )=>this.handleEdit(event, food.id )}
                                            transparent
                                        >
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