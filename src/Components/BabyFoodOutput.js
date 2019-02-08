import React from 'react';
import { Segment } from 'semantic-ui-react';

/* This component is not loaded because the sate has not passed any information ?*/
class BabyFoodOutput extends React.Component {


    render() {
        const { food } = this.props;

        return (
            <Segment basic>
            <table>
                <tbody>
                    <tr>
                        <td>{food.datetime}</td>
                        {food.breast? <td>{food.breast}</td> : <td>formula</td> }
                        {food.duration? <td>{food.duration}</td> : <td>{food.quantity}</td> }
                        <td>{food.text}</td>
                    </tr>
                </tbody>
            </table>
            </Segment>
        )
    }
}

export default BabyFoodOutput;