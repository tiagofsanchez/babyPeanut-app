import React from 'react';
import { Table, Button, Label, Menu , Icon } from 'semantic-ui-react';
import './BabyOutputForm.css'
import * as moment from 'moment';
import EditBabyInput from './EditBabyInput';



class BabyFoodOutput extends React.Component {

    state = {
        openModal: false,
        editFood: '',
        currentPage: 1,

    }

    /* Will change the varible that controls the Modal and will pass the information to the Modal to enable the user to change it in a new form */
    handleEditClick = (event, item) => {
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
    handleDelete = (event, id) => {
        this.props.entryDelete(id)
    }

    /* Calculting the number of pages that I need in my pagination */
    getNumberOfPages = (array) => { 
        const numberPerPage = 5;
        if (array.length < numberPerPage ) {
            const numberOfPages = 1
            return numberOfPages
        } else { 
            const numberOfPages = Math.ceil(array.length/ numberPerPage)
            return numberOfPages
        }     
    }

    /* Get the list to load on the table, depending on pagination*/
    getLoadList = (array) => {
        let pageList = [];
        const numberPerPage = 5;

        const { currentPage } = this.state;
        const begin = ((currentPage -1)* numberPerPage)
        const end = begin + numberPerPage; 
        return pageList = array.slice (begin, end)
    }

    previousPage = () => { 
        const { currentPage } = this.state;
        
        if ( currentPage > 1 ) {
            this.setState({
                currentPage: currentPage - 1,
            })
        }
    }

    nextPage = () => { 
        const { currentPage } = this.state;
        const { food } = this.props;
        const pages = this.getNumberOfPages(food.data);
        
        if (pages > currentPage) { 
            this.setState({
                currentPage: currentPage + 1,
            })
        } 

    }
 
    render() {

        const { openModal, editFood , currentPage } = this.state;
        const { food, onEdit } = this.props;
        
        const pages = this.getNumberOfPages(food.data);
        const list = this.getLoadList(food.data);
        

        return (
            <div style={{ margin: "10px" }}>
                <Table unstackable size="small" >
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
                    {list && list.map(item => {
                        const newDate = item.datetime.substring(6, 10) + -+ item.datetime.substring(3, 5) + -+ item.datetime.substring(0, 2) + " " + item.datetime.substring(11, 16);
                        return (
                            <Table.Body key={item.id}>
                                <Table.Row >
                                    <Table.Cell singleLine><Label>{moment(newDate).format('Do, MMM, hA')}</Label></Table.Cell>
                                    <Table.Cell >{item.disabledFormula ? item.breast : <p>formula</p>}</Table.Cell>
                                    <Table.Cell >{item.disabledFormula ? item.duration : item.quantity}</Table.Cell>
                                    <Table.Cell >{item.text}</Table.Cell>
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
                <Menu pagination size="tiny">
                    <Menu.Item
                        onClick={this.previousPage}
                        as='a'
                        icon>
                        <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item >{currentPage} of {pages}</Menu.Item>
                    <Menu.Item
                        onClick={this.nextPage}
                        as='a'
                        icon>
                        <Icon name='chevron right' />
                    </Menu.Item>
                </Menu>
            
                <EditBabyInput openModal={openModal} editFood={editFood} isClose={this.closeModal} onEdit={onEdit} />
            </div>


        )
    }
}

export default BabyFoodOutput;