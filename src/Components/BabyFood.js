import React from 'react';
import styled from 'styled-components';
import BabyFoodForm from './BabyFoodForm';
import BabyFoodOuput from './BabyFoodOutput';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  `;

const H3 = styled.h3`

`;

const Span = styled.span`   
    background: linear-gradient(180deg,rgba(255,255,255,0) 50%, rgb(255, 203, 167) 50%);
`;

const Form = styled.div`
    margin: 5px;
    background-color:  rgb(192, 222, 237, 0.3);
    border-radius: 10px;
    flex-basis: 200px; 
`;

class BabyFood extends React.Component{
    render () {
        
        const { babyFood , food , entryDelete , onEdit } = this.props;

        return (
            <FlexBox>
            <H3>Your baby <Span>food</Span></H3>
            <Form>
            <BabyFoodForm babyFood={babyFood}/>
            </Form>
            <BabyFoodOuput food={food} entryDelete={entryDelete} onEdit={onEdit}/>
            </FlexBox>
        )
    }
}

export default BabyFood;