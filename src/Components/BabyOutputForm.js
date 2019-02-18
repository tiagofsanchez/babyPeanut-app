import React from 'react';
import shortid from 'shortid';
import { Segment, Form , Label } from 'semantic-ui-react';


const initialstate = {
    output:'',
    datetime: '',
    text:'',
}

const outputOptions = [
    { key: 'motion', text: 'pass motion', value: 'pass motion' },
    { key: 'urine', text: 'pass urine', value: 'pass urine' },
    { key: 'both', text: 'urine and motion', value: 'urine and motion' },
]

class BabyOutputForm extends React.Component {
    
    state = initialstate;

    /* Handling all changes of this component and saves it on the component state */
    handleChange = (event , name , value) => {
        this.setState({
            [name ? name : event.target.name]: value ? value : event.target.value   
        })
    }
    
    /* Here we will pass the state of this component to the parent App in a new array babyOutput to be added to App state */
    handleSubmit = (event) => {
        const { output , datetime , text } = this.state;
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

    render () {

        const { output, datetime, text } = this.state;

        return (
            <Segment basic>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                    <Label basic><i className="em em-spiral_calendar_pad"></i></Label>
                    <Form.Dropdown
                        name='output'
                        onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        placeholder='pass urine or motion ...'
                        selection
                        options={outputOptions}
                        value={output} 
                    /> 
                    </Form.Group>
                    <Form.Group  >
                        <Label basic><i className="em em-spiral_calendar_pad"></i></Label>
                        <Form.Input
                            name='datetime'
                            type="datetime-local"
                            value={datetime}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        />
                    </Form.Group>
                    <Form.Group >
                        <Label basic><i className="em em-spiral_note_pad"></i></Label>
                        <Form.TextArea
                            name='text'
                            value={text}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='Any notes that you want...'
                            width={16}
                        />
                    </Form.Group>
                    <Form.Button color="grey" inverted fluid>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default BabyOutputForm;
