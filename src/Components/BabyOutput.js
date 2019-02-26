import React from 'react';
import styled from 'styled-components';
import BabyOuputForm from './BabyOutputForm';
import BabyOutputOuput from './BabyOutputOutput';

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

class BabyOutput extends React.Component{
    render () {
        
        const { babyOutput , output , entryDelete , onEdit } = this.props;

        return (
            <FlexBox>
                <H3>Your baby <Span> output </Span></H3>
                <Form>
                    <BabyOuputForm babyOutput={babyOutput} />
                </Form>
                <BabyOutputOuput output={output} entryDelete={entryDelete} onEdit={onEdit}/>
            </FlexBox>
        )
    }
}

export default BabyOutput;