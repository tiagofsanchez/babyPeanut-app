import React from 'react'; 
import { Modal } from 'semantic-ui-react';
import BabyFoodForm from './BabyFoodForm';
import BabyOutputForm from './BabyOutputForm';


class EditBabyInput extends React.Component {

    close = () => this.props.isClose(false)
    
    render() {

        const { editFood , openModal , onEdit , editOuput } = this.props;


        return (
            <div> 
                <Modal
                    open={openModal}
                    onClose={this.close}
                    closeIcon
                >
                <Modal.Header>Edit your entry below</Modal.Header>
                <Modal.Content>
                    {editFood? 
                    <BabyFoodForm editFood={editFood} onEdit={onEdit} onClose={this.close}/>
                    :
                    <BabyOutputForm editOuput={editOuput} onEdit={onEdit} onClose={this.close}/>
                    }
                </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default EditBabyInput;