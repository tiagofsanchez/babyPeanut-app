import React from 'react'; 
import { Dimmer , Loader, Image, Segment, Card } from 'semantic-ui-react'; 




const Loading = () => (
    <Segment placeholder color='grey' inverted>
      <Dimmer active inverted>
        <Loader size='huge'>waiting for your data!!!</Loader>
      </Dimmer>
      </Segment>
)

export default Loading;
