import React from 'react';
import BabyFoodOutput from './BabyFoodOutput'

class BabyData extends React.Component {

    render() {
        const { food } = this.props
        return (
            <div>
                {/* This will happen only if food.data is true */}
                {food.data && food.data.map(data => {
                    return <BabyFoodOutput food={data} />
                })}
            </div>
        )
    }
}

export default BabyData;