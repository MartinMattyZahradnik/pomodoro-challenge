import React, { Component } from "react";
import styled from "styled-components";

// Components
import PomodoroForm from "components/PomodoroForm";

const StyledApplicationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

const StyledApplication = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.sm};
`;

class App extends Component {
  render() {
    return (
      <StyledApplicationWrapper>
        <StyledApplication className="app">
          <PomodoroForm />
        </StyledApplication>
      </StyledApplicationWrapper>
    );
  }
}

export default App;