import React from 'react';
import './BabyOutputForm.css';
import shortid from 'shortid';
import { Segment, Form } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';



const initialstate = {
    output: '',
    datetime: '',
    text: '',
}

const outputOptions = [
    { key: 'motion', text: 'pass motion', value: 'pass motion' },
    { key: 'urine', text: 'pass urine', value: 'pass urine' },
    { key: 'both', text: 'urine and motion', value: 'urine and motion' },
]

class BabyOutputForm extends React.Component {

    state = initialstate;

    componentDidMount = () => {
        const { editOuput } = this.props; 
        if (editOuput) { 
            this.setState({
                id: editOuput.id,
                output: editOuput.output,
                datetime: editOuput.datetime,
                text: editOuput.text,
            })
        }
     }

    /* Handling all changes of this component and saves it on the component state */
    handleChange = (event, name, value) => {
        this.setState({
            [name ? name : event.target.name]: value ? value : event.target.value
        })
        
    }

    /* Here we will pass the state of this component to the parent App in a new array babyOutput to be added to App state */
    handleSubmit = (event) => {
        const { output, datetime, text } = this.state;
        const babyOutput = {
            id: shortid.generate(),
            output: output,
            datetime: datetime,
            text: text,
        }
        this.props.babyOutput(babyOutput);
        this.setState(initialstate);
        
    }

    handleEdit = (event) => { 
         
        const { output, datetime, text } = this.state;
        const { editOuput , onEdit , onClose } = this.props ; 

        const newBabyOutput = { 
            id: editOuput.id, 
            output: output, 
            datetime: datetime, 
            text: text, 
        }
        onEdit(newBabyOutput);
        onClose();

    }

    render() {

        const { output, datetime, text } = this.state;
        const { editOuput } = this.props

        return (
            <Segment basic>
                <Form onSubmit={!editOuput ? this.handleSubmit : this.handleEdit }>
                    <div className='field-container1'>
                        <i className="em em-hankey"></i>
                        <Form.Dropdown
                            className='dropdown'
                            name='output'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='pass urine or motion ...'
                            selection
                            options={outputOptions}
                            value={output}
                        />
                        <DateTimeInput
                             className="date-time"
                             name='datetime'
                             placeholder='data and time'
                             value={datetime}
                             onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                             iconPosition="left"
                             closable
                             clearable
                             animation="slide down"
                             initialDate={new Date()}
                             maxDate={new Date()}
                             marked={new Date()}
                             markColor="orange"
                        />
                        <i className="em em-spiral_note_pad"></i>
                        <Form.TextArea
                            className='text'
                            name='text'
                            value={text}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='Any notes that you want...'
                            width={16}
                        />
                        <Form.Button className='button' color='orange'>Save</Form.Button>
                    </div>
                </Form>
            </Segment>
        )
    }
}

export default BabyOutputForm;
