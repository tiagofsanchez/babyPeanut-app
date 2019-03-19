import React from 'react'; 
import { Dimmer , Loader, Image, Segment, Card } from 'semantic-ui-react'; 
import styled from 'styled-components';


/* ****************** */
/* Styled Components */
/* ****************** */
const Wrapper = styled.div`
  height: auto ;
`;

const Loading = () => (
  <Wrapper>
    <Segment placeholder color='grey' inverted>
      <Dimmer active inverted>
        <Loader size='huge'>waiting for your data!!!</Loader>
      </Dimmer>
    </Segment>
  </Wrapper>
)

export default Loading;
