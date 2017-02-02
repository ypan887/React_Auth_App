import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const MainSection = (props) => {
  return (
    <Grid>
      <Row className='main-content'>
        {props.children}
      </Row>
    </Grid>
  );
}

export default MainSection;
