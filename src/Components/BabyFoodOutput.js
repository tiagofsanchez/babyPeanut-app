import React from 'react';
import { Table, Button, Label, Menu, Icon } from 'semantic-ui-react';
import './BabyOutputForm.css'
import moment from 'moment';
import EditBabyInput from './EditBabyInput';
import Pages from './Pages';
import ExpandTable from './ExpandTable';

class BabyFoodOutput extends React.Component {

    state = {
        openModal: false,
        openTable: false,
        editFood: '',
        currentPage: 1,

    }

    /* Will change the variable that controls the Modal and will pass the information to the Modal to enable the user to change it in a new form */
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
            openModal: isClose,
            openTable: isClose
        })
    }

    /* Will open the modal with the full table */
    openTable = () => {
        const { openTable } = this.state;
        this.setState({
            openTable: !openTable
        })
    }

    /* Will delete the item that was selected */
    handleDelete = (event, id) => {
        this.props.entryDelete(id)
    }

    /* Calculating the number of pages that I need in my pagination */
    getNumberOfPages = (array) => {
        const numberPerPage = 2;
        if (array.length < numberPerPage) {
            const numberOfPages = 1
            return numberOfPages
        } else {
            const numberOfPages = Math.ceil(array.length / numberPerPage)
            return numberOfPages
        }
    }

    /* Get the list to load on the table, depending on pagination*/
    getLoadList = (array) => {
        const { currentPage } = this.state;
        let pageList = [];
        const numberPerPage = 2;
        const begin = ((currentPage - 1) * numberPerPage)
        const end = begin + numberPerPage;
        return pageList = array.slice(begin, end)
    }

    changeCurrenPagetHandler = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
        })
        console.log(this.state.currentPage)
    }

    render() {

        const { openModal, editFood, currentPage , openTable } = this.state;
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
                    <Table.Body>
                        {list && list.map(item => {
                            return (
                                <Table.Row key={item.id}>
                                    <Table.Cell singleLine><Label>{moment(item.datetime, "DD-MM-YYYY hh:mm").format('Do, MMM, hA')}</Label></Table.Cell>
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
                            )
                        })}
                    </Table.Body>
                </Table>
                <Button
                    floated="right"
                    size="mini"
                    onClick={this.openTable}
                >Full Table</Button>
                <Pages food={food} changeCurrentPage={this.changeCurrenPagetHandler}/>
                <EditBabyInput openModal={openModal} editFood={editFood} isClose={this.closeModal} onEdit={onEdit} food={food}/>
                <ExpandTable openTable={openTable} isClose={this.closeModal} food={food}/>
            </div>


        )
    }
}

export default BabyFoodOutput;
