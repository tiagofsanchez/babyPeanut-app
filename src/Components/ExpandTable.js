import React from 'react';
import { Modal , Table, Button , Label } from 'semantic-ui-react';
import * as moment from 'moment';


class ExpandTable extends React.Component {

    close = () => this.props.isClose(false)

    render() {

        const { openTable , food } = this.props

        return (
            <div>
                <Modal
                    open={openTable}
                    onClose={this.close}
                    closeIcon
                >
                    <Modal.Header>Here you can find all your data</Modal.Header>
                    <Modal.Content>
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
                            {food.data && food.data.map(item => {
                                const newDate = item.datetime.substring(6, 10) + -+ item.datetime.substring(3, 5) + -+ item.datetime.substring(0, 2) + " " + item.datetime.substring(11, 16);
                                return (
                                    <Table.Body key={item.id}>
                                        <Table.Row >
                                            <Table.Cell singleLine><Label>{moment(newDate).format('Do, MMM, hA')}</Label></Table.Cell>
                                            <Table.Cell >{item.disabledFormula ? item.breast : <p>formula</p>}</Table.Cell>
                                            <Table.Cell >{item.disabledFormula ? item.duration : item.quantity}</Table.Cell>
                                            <Table.Cell >{item.text}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                )
                            })}
                        </Table>
                    </Modal.Content>

                </Modal>
            </div>
        )
    }

}

export default ExpandTable; 