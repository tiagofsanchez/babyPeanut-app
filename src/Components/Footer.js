import React from 'react';
import styled from 'styled-components';

/* ****************** */
/* Styled Components */
/* ****************** */
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0, 132, 180);
    height: 100%;
`;

const P = styled.div`
    color: white; 
`;


/* ****************** */
/*     Component      */
/* ****************** */
class Footer extends React.Component {
    render ()  {
        return (
            <Div>
                <P>
                &copy; babyPeanut, made with <i class="em em-heart"></i> by TFS!
                </P>
            </Div>
        )
    }
}

export default Footer;