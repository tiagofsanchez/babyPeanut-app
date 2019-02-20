import React from 'react';
import BabyFoodEditForm from './BabyFoodEditForm'
import { Table, Button, Modal } from 'semantic-ui-react';



class BabyFoodOutput extends React.Component {

    state = {
        openModal: false
    }
    
    /* 
    This is the old handle edit that was going directly to the state, now I want to try doing this with a Modal
    handleEdit = (event, key) => {
        this.props.onEdit(event.target.value, key)
    }; */

    /* Will change the varible that controls the Modal and will pass the information to the Modal to enable the user to change it */
    handleEditClick = (event , food) => {
        const { openModal } = this.state;
        this.setState({
            openModal: !openModal
        })
        debugger
        return <BabyFoodEditForm food ={ food } trigger = { openModal}  />
    }

    handleDelete =( event , id ) => {
        this.props.entryDelete(id)
    }

    render() {
        const { food } = this.props;
        const { openModal } = this.state;

        return (
            <div style={{ margin: "10px" }}>
                <Table unstackable size="small" striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell singleLine>Feeding</Table.HeaderCell>
                            <Table.HeaderCell singleLine>What</Table.HeaderCell>
                            <Table.HeaderCell>Your Notes</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {/* This will need to be here so that the header of the table doesn't repeact itself */}
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
                                    <Table.Cell textAlign='right' singleLine> 
                                        <Button
                                            basic
                                            color="orange"
                                            icon="edit"
                                            size='mini'
                                            onClick={event => this.handleEditClick(event, food)}
                                        />
                                        <Button
                                            basic
                                            color="red"
                                            icon='delete'
                                            size='mini'
                                            onClick={event => this.handleDelete(event, food.id)}
                                        />
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