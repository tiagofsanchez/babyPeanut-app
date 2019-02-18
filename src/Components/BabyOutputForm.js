import React from 'react';
import './BabyOutputForm.css';
import shortid from 'shortid';
import { Segment, Form, Label, Icon } from 'semantic-ui-react';
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

    /* Handling all changes of this component and saves it on the component state */
    handleChange = (event, name, value) => {
        this.setState({
            [name ? name : event.target.name]: value ? value : event.target.value
        })
    }

    /* Here we will pass the state of this component to the parent App in a new array babyOutput to be added to App state */
    handleSubmit = (event) => {
        const { output, datetime, text } = this.state;
        event.preventDefault();
        const babyOutput = {
            id: shortid.generate(),
            output: output,
            datetime: datetime,
            text: text,
        }
        this.props.babyOutput(babyOutput);
        this.setState(initialstate);
    }

    render() {

        const { output, datetime, text } = this.state;

        return (
            <Segment basic>
                <Form onSubmit={this.handleSubmit}>
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
                            className='date-time'
                            name='datetime'
                            placeholder='date and time '
                            value={datetime}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            iconPosition="left"
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
