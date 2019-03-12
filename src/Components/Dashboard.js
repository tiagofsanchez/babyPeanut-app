import React from 'react';
import styled from 'styled-components';
import DashboardFoodSummary from './DashboardFoodSummary';
import DashboardOutputSummary from './DashboardOutputSummary';
import PlaceHolder from './PlaceHolder';

/* ****************** */
/* Styled Components */
/* ****************** */
const DashboardWrapper = styled.div`
    display: grid;
    padding: 30px; 
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr; 
    grid-gap: 20px;
    grid-template-areas:
    " 1 "
    " 2 " 
`;

const SummaryWrapper1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    grid-area: 1; 
`;

const SummaryWrapper2 = styled.div`
    display: flex;
    justify-content: space-around;
    grid-area: 2; 
`;

const Graph1Wrapper = styled.div`
    flex-basis: 200px; 
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph2Wrapper = styled.div`
    flex-basis: 1050px; 
`;




/* ****************** */
/*     Component      */
/* ****************** */
class Dashboard extends React.Component {
    render() {

        const { food, output } = this.props;

        return (
            <div>
                <DashboardWrapper>
                    <SummaryWrapper1>
                        <Graph1Wrapper>
                            <DashboardFoodSummary food={food} />
                        </Graph1Wrapper>
                        <Graph2Wrapper>
                            <PlaceHolder />
                        </Graph2Wrapper>
                    </SummaryWrapper1>
                    <SummaryWrapper2>
                        <Graph1Wrapper>
                            <DashboardOutputSummary output={output} />
                        </Graph1Wrapper>
                        <Graph2Wrapper>
                            <PlaceHolder />
                        </Graph2Wrapper>
                    </SummaryWrapper2>
                </DashboardWrapper>
            </div>
        )
    }
}

export default Dashboard;
