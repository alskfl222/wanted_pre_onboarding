import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(20, 126, 255, 0.1);
  }
`

const Title = styled.div`
  padding: 2rem 3rem 1rem;
  font-size: 2rem;
  font-weight: 700;
`

const ToggleContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  align-self: center;
  line-height: 2rem;
  text-align: center;
  font-weight: 700;
  cursor: pointer;

  > .toggle-container {
    width: 100px;
    height: 48px;
    border-radius: 60px;
    background-color: #8b8b8b;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.toggle--checked {
      background-color: #4000c7;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.toggle--checked {
      left: 58px;
    }
  }
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <Container>
      <Title>Toggle</Title>
      <ToggleContainer
        onClick={toggleHandler}
      >
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}/>
        {isOn ? "ON" : "OFF"}
      </ToggleContainer>
    </Container>
  );  
}