import React from 'react';
import { Form, Label, Segment } from 'semantic-ui-react';
import './BabyFoodForm.css';



const timeOptions = [
    { key: '5', text: '5 min', value: '5' },
    { key: '10', text: '10 min', value: '10' },
    { key: '15', text: '15 min', value: '15' },
    { key: '20', text: '20 min', value: '20' },
];

const breastOptions = [
    { key: 'right', text: 'right breast', value: 'right' },
    { key: 'left', text: 'left breast', value: 'left' },
];


const quantityOptions = [
    { key: '5', text: '5 ml', value: '5' },
    { key: '10', text: '10 ml', value: '10' },
    { key: '15', text: '15 ml', value: '15' },
    { key: '20', text: '20 ml', value: '20' },
]

const initialState = {
    breast: '',
    duration: '',
    quantity: '',
    datetime: '',
    text: '',
};

class BabyFoodForm extends React.Component {

    state = initialState;

    /* This handleChange takes care of all the events, input and textarea selected */
    handleChange = (event, name = null, value = null) => {
        name ? console.log(name) : console.log(event.target.name);
        this.setState({ [name ? name : event.target.name]: value ? value : event.target.value })
    };

    /* will pass the state of the form to the parent, App in a newly created array babyFood */
    handleSubmit = (event) => {
        const { breast, duration, quantity, datetime, text } = this.state
        event.preventDefault();
        const babyFood = {
            breast: breast,
            duration: duration,
            quantity: quantity,
            datetime: datetime,
            text: text,
        }
        console.log(this.state);
        this.props.babyFood(babyFood);
        this.setState(initialState);
    }

    render() {

        const { breast, text, duration, datetime, quantity } = this.state

        return (
            <Segment basic >
                <Form onSubmit={this.handleSubmit}>
                    
                    <Form.Group className="itemCenter">
                    <Label basic><i className="em em-breast-feeding"></i></Label>
                        <Form.Dropdown
                            name='breast'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='breast side...'
                            selection
                            options={breastOptions}
                            value={breast}
                        />
                        <label> and duration:</label>
                        <Form.Dropdown
                            name='duration'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='time of breastfeeding...'
                            selection
                            options={timeOptions}
                            value={duration}
                        />
                    </Form.Group>
                    <Form.Group className="itemCenter" >
                    <Label basic><i className="em em-baby_bottle"></i></Label>
    
                        <Form.Dropdown
                            name='quantity'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='quantity given..'
                            selection
                            options={quantityOptions}
                            value={quantity}
                        />
                    </Form.Group>

                    <Form.Group className="itemCenter" >
                        <Label basic><i className="em em-spiral_calendar_pad"></i></Label>
                        <Form.Input
                            name='datetime'
                            type="datetime-local"
                            value={datetime}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        />
                    </Form.Group>

                    <Form.Group  >
                    <Label basic><i className="em em-spiral_note_pad"></i></Label>
                    <Form.TextArea
                        name='text'
                        value={text}
                        onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        placeholder='Any notes that you want...'
                        width = {16}
                    />
                    </Form.Group>  

                    <Form.Button color="grey" inverted >Submit</Form.Button>
                </Form>
            </Segment>



        )
    }
}

export default BabyFoodForm;