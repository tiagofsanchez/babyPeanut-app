import React from 'react'; 
import { Table , Label , Button } from 'semantic-ui-react';
import './EditBabyInput';
import EditBabyInput from './EditBabyInput';

class BabyOututOutput extends React.Component {

    state = { 
        openModal: false,
        editOuput: ''
    }

    /* Deleting the entry is the user selects that */
    handleDelete = ( event , id ) => { 
        const { entryDelete } = this.props;
        entryDelete(id);
    }

    /* Will change the state so that you can send it to the children component */
    handleEditClick = ( event , output ) => {
        const { openModal } = this.state;
        this.setState({
            openModal:!openModal,
            editOuput: output
        })

    }

    /* Will close the model by changing the state of the component openModal */
    closeModal = (isClose) => {
        this.setState({
            openModal: isClose
        })
    }

    render() {

        const { editOuput , openModal } = this.state;
        const { output } = this.props;
        
        return (
            <div style={{ margin: "10px" }}>
                <Table unstackable size="small" striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell singleLine>Output</Table.HeaderCell>
                            <Table.HeaderCell>Your Notes</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {output.data && output.data.map(item => {
                        return (
                            <Table.Body key={item.id}>
                                <Table.Row>
                                    <Table.Cell><Label> {item.datetime} </Label></Table.Cell>
                                    <Table.Cell>{item.output}</Table.Cell>
                                    <Table.Cell>{item.text}</Table.Cell>
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
                    })
                    }
                </Table>
                <EditBabyInput openModal={openModal} isClose={this.closeModal} editOuput={editOuput}/>
            </div>
        )
    }
}

export default BabyOututOutput;