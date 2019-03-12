import React from 'react'
import { Placeholder } from 'semantic-ui-react'
import styled from 'styled-components'; 

const PlaceholderWrapper = styled.div` 
padding: 20px; 
`;

const PlaceholderExamplePlaceholder = () => (
    <PlaceholderWrapper>
    <Placeholder fluid>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
    </PlaceholderWrapper>
  )

export default PlaceholderExamplePlaceholder