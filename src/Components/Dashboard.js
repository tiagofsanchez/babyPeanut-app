import React from 'react';
import styled from 'styled-components';
import DashboardFoodSummary from './DashboardFoodSummary';
import DashboardOutputSummary from './DashboardOutputSummary';
import PlaceHolder from './PlaceHolder';

/* ****************** */
/* Styled Components */
/* ****************** */
const DashboardWrapper = styled.div`
    display: flex;
`;

const Graph1Wrapper = styled.div`
    flex-basis: 200px; 
    height:50%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph2Wrapper = styled.div`
    flex-basis: 800px; 
    height:50%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;



const Graph4Wrapper = styled.div`
    flex-basis: 200px; 
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph5Wrapper = styled.div`
    flex-basis: 800px; 
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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
                    <Graph1Wrapper>
                        <DashboardFoodSummary food={food} />
                    </Graph1Wrapper>
                    <Graph2Wrapper>
                        <PlaceHolder />
                    </Graph2Wrapper>
                </DashboardWrapper>
                <DashboardWrapper>
                <Graph4Wrapper>
                    <DashboardOutputSummary output={output} />
                </Graph4Wrapper>
                <Graph5Wrapper>
                    <PlaceHolder />
                </Graph5Wrapper>
                </DashboardWrapper>
            </div>
        )
    }
}

export default Dashboard;
