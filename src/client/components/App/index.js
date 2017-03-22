import React from 'react';
import { Grid, Jumbotron, Row, Col } from 'react-bootstrap';
import { BoardPanel } from '../Board';
import { Header, HeaderLeft, HeaderRight } from '../Header';
import { Icon, Title } from '../Widgets';

import './app.css';

const App = ({ board, player }) => (
  <Grid>
    <Row>
      <Header player={player}>
        <HeaderLeft>
          <Icon type='trophy' />
          <Title name='TicTacToe' />
        </HeaderLeft>
        <HeaderRight>
        </HeaderRight>
      </Header>
    </Row>
    <Jumbotron className="content">
      <Row>
        <Col md={6} xs={12}>
          <BoardPanel board={board} />
        </Col>
      </Row>
    </Jumbotron>
  </Grid>
);

App.propTypes = {
  board: React.PropTypes.array.isRequired,
  player: React.PropTypes.object.isRequired,
};

export default App;