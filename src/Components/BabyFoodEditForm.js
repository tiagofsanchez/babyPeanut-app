import React from 'react'; 
import { Modal } from 'semantic-ui-react';
import BabyFoodForm from './BabyFoodForm';

class BabyFoodEditForm extends React.Component {

    
    close = () => this.props.isClose(false)
    
    render() {

        const { editFood , open , onEdit } = this.props;
        
        return (
            <div> 
                <Modal
                    open={open}
                    onClose={this.close}
                    closeIcon
                >
                <Modal.Header>Edit your entry below</Modal.Header>
                <Modal.Content>
                    <BabyFoodForm editFood={editFood} onEdit={onEdit} onClose={this.close}/>
                </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default BabyFoodEditForm;