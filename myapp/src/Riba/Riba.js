//@flow
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import circle from '../images/circle.png';
import styled from 'styled-components';
import {Paper, Switch} from '@material-ui/core';
import Baffle from "baffle-react";
import './par.css';

const StyledPaper = styled(Paper)`
  width: 200px;
  height: 200px;
  padding: 20px;
  position: relative;
  bottom: 60%;
  left: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
type Props = {
  changeState: (value: any) => void;
  checkedCgn: any;
};
class Riba extends Component {
  state = {
    checkedCgn: false,
    update: true,
    obfuscate: true
  };

  handleChange = name => event =>{
    this.props.changeState(event.target.checked);
    this.setState({[name]: event.target.checked});
  };

  render() {
    const { 
      update,
      obfuscate,
      checkedCgn,
    } = this.state;


    return (
          <StyledPaper>
            <h3>Ali je riba cgn?</h3>
            {checkedCgn && <Baffle
              speed={50}
              characters="1234567890qwertzuiopasdfghjklyxcvbnm!#$%&/()=[]\|€@{},.;:<>"
              exclude={[" ", "!"]}
              obfuscate={!checkedCgn}
              update={update}
              revealDuration={1000}
              revealDelay={10}

            >
            {!checkedCgn ? "oL8VF4EsYZccwulSpq" : "Da! In to številka 1!"}
            </Baffle>}
            <Switch
              checked={checkedCgn}
              onChange={this.handleChange('checkedCgn')}
              value="checkedCgn"
              color="primary"
            />
          </StyledPaper>
    );
  }
}

export default Riba;