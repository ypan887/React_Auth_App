import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const MainSection = (props) => {
  return (
    <Grid>
      <Row>
        {props.children}
      </Row>
    </Grid>
  );
}

export default MainSection;
