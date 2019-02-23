import React from 'react';
import BabyFoodEditForm from './EditBabyInput'
import { Table, Button , Label } from 'semantic-ui-react';
import './BabyOutputForm.css'
import EditBabyInput from './EditBabyInput';



class BabyFoodOutput extends React.Component {

    state = {
        openModal: false,
        editFood: ''
    }
    
    /* 
    This is the old handle edit that was going directly to the state, now I want to try doing this with a Modal
    handleEdit = (event, key) => {
        this.props.onEdit(event.target.value, key)
    }; */

    /* Will change the varible that controls the Modal and will pass the information to the Modal to enable the user to change it in a new form */
    handleEditClick = (event , item = null ) => {
        const { openModal } = this.state;
        this.setState({
            openModal: !openModal,
            editFood: item
        }) 
    }

    /* Will close the model by changing the state of the component openModal */
    closeModal = (isClose) => {
        this.setState({
            openModal: isClose
        })
    }

    /* Will delete the item that was selected */
    handleDelete =( event , id ) => {
        this.props.entryDelete(id)
    }

    render() {
        
        const { openModal , editFood } = this.state;
        const { food , onEdit } = this.props;


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

                    {/* This will need to be here so that the header of the table doesn't repeat itself */}
                    {food.data && food.data.map(item => {
                        return (
                            <Table.Body key={item.id}>
                                <Table.Row >
                                    <Table.Cell singleLine><Label>{item.datetime}</Label></Table.Cell>
                                    <Table.Cell >{item.disabledFormula ? item.breast : <p>formula</p>}</Table.Cell>
                                    <Table.Cell >{item.disabledFormula ? item.duration : item.quantity}</Table.Cell>
                                    <Table.Cell  >
                                        {item.text}
                                        {/* 
                                        This was here to make the edit happen, but now i will 
                                        <Input
                                            value={item.text}
                                            onChange={(event) => this.handleEdit(event, item.id)}
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
                                            onClick={event => this.handleEditClick(event, item)}
                                        />
                                        <Button
                                            basic
                                            color="red"
                                            icon='delete'
                                            size='mini'
                                            onClick={event => this.handleDelete(event, item.id)}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        )
                    })}
                </Table>
                <EditBabyInput openModal={openModal} editFood={editFood} isClose={this.closeModal} onEdit={onEdit}/>
            </div>
            

        )
    }
}

export default BabyFoodOutput;