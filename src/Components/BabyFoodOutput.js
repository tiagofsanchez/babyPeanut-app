import React from 'react';

class BabyFoodOutput extends React.Component {

    render() {
        const { food } = this.props
        return (
            <div>
                {food.data}
            </div>
        )
    }
}

export default BabyFoodOutput;