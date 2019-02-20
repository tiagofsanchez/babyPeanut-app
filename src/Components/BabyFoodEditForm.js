import React from 'react'; 
import { Modal } from 'semantic-ui-react';
import BabyFoodForm from './BabyFoodForm';

class BabyFoodEditForm extends React.Component {

    
    close = () => this.props.isClose(false)
    
    render() {

        const { editFood , open  } = this.props;
        debugger
        return (
            <div> 
                <Modal
                    open={open}
                    onClose={this.close}
                >
                
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                    <BabyFoodForm food={editFood}/>
                </Modal.Content>
                </Modal>
            </div>

        )
    }
}

export default BabyFoodEditForm;