import React from 'react';
import { Form, Segment, Button, ButtonGroup } from 'semantic-ui-react';
import shortid from 'shortid';
import './BabyFoodForm.css'
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
    disabledFormula: 'true'
};

class BabyFoodForm extends React.Component {

    state = initialState;

    /* will manage the lifecycle of my component by changing the state if the the user wants to edit something*/
    componentDidMount =() => {
        const { editFood } = this.props;
        if (editFood) {
            this.setState({
                id: editFood.id,
                breast: editFood.breast,
                duration: editFood.duration,
                quantity: editFood.quantity,
                datetime: editFood.datetime,
                text: editFood.text,
                disabledFormula: editFood.disabledFormula,
            })
        }
    }    

    /* This handleChange takes care of all the events, input and textarea selected */
    handleChange = (event, name = null, value = null) => {
        name ? console.log(name) : console.log(event.target.name);
        this.setState({ [name ? name : event.target.name]: value ? value : event.target.value })
        console.log(value);
        
    };

    /* will pass the state of the form to the parent, App in a newly created array babyFood an will create an ID for that */
    handleSubmit = (event) => {
        const { breast, duration, quantity, datetime, text, disabledFormula } = this.state
        const { editFood , onEdit , babyFood } = this.props
        
        if (!editFood) { 
            const food = {
                id: shortid.generate(),
                breast: breast,
                duration: duration,
                quantity: quantity,
                datetime: datetime,
                text: text,
                disabledFormula: disabledFormula,
            }
            babyFood(food);
            this.setState(initialState);
            
          debugger 
        } else {
            const editBabyFood = { 
                id: editFood.id,
                breast: breast,
                duration: duration,
                quantity: quantity,
                datetime: datetime,
                text: text,
                disabledFormula: editFood.disabledFormula,
            } 
            onEdit(editBabyFood);            
        }
    }

    /* Will disable the Formula feeding option for the user. It will be possible to enable it as well */
    changeDisable = () => {
        const { disabledFormula } = this.state;
        this.setState({
            ...this.setState(initialState),
            disabledFormula: !disabledFormula
        })
    }

    render() {

        const { breast, text, duration, datetime, quantity, disabledFormula } = this.state;
        const { editFood } = this.props;

        return (
            <div>

                <Segment basic >
                    <Form onSubmit={this.handleSubmit}>
                        <div className='field-container0'>
                            <i className="em em-breast-feeding"></i>
                            <Form.Dropdown
                                className="breast-dropdown"
                                name='breast'
                                onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                                placeholder='breast side...'
                                selection
                                options={breastOptions}
                                value={breast}
                                disabled={!disabledFormula}
                            />
                            <Form.Dropdown
                                className="duration-dropdown"
                                name='duration'
                                onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                                placeholder='time of breastfeeding...'
                                selection
                                options={timeOptions}
                                value={duration}
                                disabled={!disabledFormula}

                            />
                            <i className="em em-baby_bottle"></i>
                            <Form.Dropdown
                                className="quantity-dropdown"
                                name='quantity'
                                onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                                placeholder='quantity given..'
                                selection
                                options={quantityOptions}
                                value={quantity}
                                disabled={disabledFormula}
                            />
                            <i className="em em-calendar"></i>
                            <DateTimeInput
                                className="date-time1"
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
                                className="text"
                                name='text'
                                value={text}
                                onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                                placeholder='Any notes that you want...'
                                width={16}
                            />
                            <div className='button'>
                                <Form.Button color='orange'>Save</Form.Button>
                                {editFood ? null :
                                    <Button.Group color="standard" size="mini" >
                                        <Button
                                            content="Breast"
                                            onClick={this.changeDisable}
                                            active={disabledFormula}
                                            disabled={!disabledFormula}
                                        >
                                        </Button>
                                        <Button.Or />
                                        <Button
                                            content="Formula"
                                            onClick={this.changeDisable}
                                            active={!disabledFormula}
                                            disabled={disabledFormula}
                                        >
                                        </Button>
                                    </Button.Group>
                                }
                            </div>
                        </div>
                    </Form>
                    
                </Segment>
                <div>
                </div>
            </div>


        )
    }
}

export default BabyFoodForm;