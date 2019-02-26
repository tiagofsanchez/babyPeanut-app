import React from 'react';
import styled from 'styled-components';

/* ****************** */
/* Styled Components */
/* ****************** */
const H2 = styled.div`
    color: white; 
    font-size: 1.5em;
    padding-left: 20px;  
`;

const Bar = styled.div`
    display: flex;
    align-items: center;
    background: rgb(0, 132, 180);
    height: 100%;
`;


/* ****************** */
/*     Component      */
/* ****************** */
class Nav extends React.Component {
    render() {
        return (
            <Bar>
                <H2><i className="em em-baby"></i> babyPeanut <i className="em em-peanuts"></i> app </H2>
            </Bar>
        )
    }
}

export default Nav;