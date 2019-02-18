import React from 'react';
import { Form, Label, Segment } from 'semantic-ui-react';
import shortid from 'shortid';
import { DateTimeInput } from 'semantic-ui-calendar-react';




const timeOptions = [
    { key: '5', text: '5 min', value: '5 min' },
    { key: '10', text: '10 min', value: '10 min' },
    { key: '15', text: '15 min', value: '15 min' },
    { key: '20', text: '20 min', value: '20 min' },
];

const breastOptions = [
    { key: 'right', text: 'right breast', value: 'right breast' },
    { key: 'left', text: 'left breast', value: 'left breast' },
    { key: 'both', text: 'both breasts', value: 'both breasts' },
];


const quantityOptions = [
    { key: '5', text: '5 ml', value: '5 ml' },
    { key: '10', text: '10 ml', value: '10 ml' },
    { key: '15', text: '15 ml', value: '15 ml' },
    { key: '20', text: '20 ml', value: '20 ml' },
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

    /* will pass the state of the form to the parent, App in a newly created array babyFood an will create an ID for that */
    handleSubmit = (event) => {
        const { breast, duration, quantity, datetime, text } = this.state
        event.preventDefault();
        const babyFood = {
            id: shortid.generate(),
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
                        <i className="em em-breast-feeding"></i>
                        <Form.Dropdown
                            name='breast'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='breast side...'
                            selection
                            options={breastOptions}
                            value={breast}
                        />
                        <Form.Dropdown
                            name='duration'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='time of breastfeeding...'
                            selection
                            options={timeOptions}
                            value={duration}
                        />
                        <i className="em em-baby_bottle"></i>
                        <Form.Dropdown
                            name='quantity'
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='quantity given..'
                            selection
                            options={quantityOptions}
                            value={quantity}
                        />
                        <DateTimeInput
                            name='datetime'
                            placeholder='data and time'
                            value={datetime}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            iconPosition="left"
                        />
                        <i className="em em-spiral_note_pad"></i>
                        <Form.TextArea
                            name='text'
                            value={text}
                            onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                            placeholder='Any notes that you want...'
                            width={16}
                        />
                   

                   <Form.Button className='button' color='orange'>Save</Form.Button>
                </Form>
            </Segment>



        )
    }
}

export default BabyFoodForm;