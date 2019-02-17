import React from 'react';
import { Segment, Form } from 'semantic-ui-react';


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

    
    
    render () {

        const { output, datetime, text } = this.state;

        return (
            <Segment basic>
                <Form>
                <Form.Dropdown
                            name='output'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='pass urine or motion ...'
                            selection
                            options={outputOptions}
                            value={output}
                />

                </Form>
            </Segment>
        )
    }
}

export default BabyOutputForm;
