import React, { Component } from 'react';
import styled from 'styled-components';

import Riba from './Riba/Riba';
import ParticlesWindow from './ParticlesWindow/ParticlesWindow';

const StyledCenter = styled.div`
  height: 100%;
  bottom: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  height: 100%;
  user-select: none;
`;

class App extends Component {
  state = {
    checkedCgn: false,
  };

  changeState = value =>{
    this.setState({checkedCgn: value});
  };

  render() {
    return (
      <StyledDiv>
        <ParticlesWindow
          checkedCgn = {this.state.checkedCgn}
        />
        <Riba 
          checkedCgn = {this.state.checkedCgn}
          changeState = {this.changeState}
        />
      </StyledDiv>
    );
  }
}

export default App;
