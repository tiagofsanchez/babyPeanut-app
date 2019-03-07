import React from 'react';
import styled from 'styled-components';
import DashboardSummary from './DashboardSummary';

/* ****************** */
/* Styled Components */
/* ****************** */
const DashboardWrapper = styled.div`
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33% ;
    grid-template-row: 50% 50% ;  
    height: 100%;
    padding: 50px;  
    grid-gap: 20px;
    justify-content: space-around;
    grid-template-areas: 
    "Graph1 Graph2 Graph3"
    "Graph4 Graph5 Graph6"
`;

const Graph1Wrapper = styled.div`
    grid-area: Graph1
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph2Wrapper = styled.div`
    grid-area: Graph2
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph3Wrapper = styled.div`
    grid-area: Graph3
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph4Wrapper = styled.div`
    grid-area: Graph4
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph5Wrapper = styled.div`
    grid-area: Graph5
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Graph6Wrapper = styled.div`
    grid-area: Graph6
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
            <DashboardWrapper>
                <Graph1Wrapper>
                    <DashboardSummary food={food} output={output}/>
                </Graph1Wrapper>
                <Graph2Wrapper>
                    Heeeee
                </Graph2Wrapper>
                <Graph3Wrapper>
                    Heeeee
                </Graph3Wrapper>
                <Graph4Wrapper>
                    Heeeee
                </Graph4Wrapper>
                <Graph5Wrapper>
                    Heeeee
                </Graph5Wrapper>
                <Graph6Wrapper>
                    Heeeee
                </Graph6Wrapper>
            </DashboardWrapper>
        )
    }
}

export default Dashboard;
