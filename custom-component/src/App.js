import React from "react";
import styled from "styled-components"

import { Toggle } from "./component/Toggle";
import { Modal } from "./component/Modal";
import { Tab } from "./component/Tab";
import { Tag } from "./component/Tag";
import { Autocomplete } from "./component/AutoComplete";
import { ClickToEdit } from "./component/ClickToEdit";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  width: calc(100vw - 10rem);
  min-width: 360px;
  max-width: 960px;
`

const Header = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
`

const ComponentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Footer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
`

function App() {
  return (
    <Background>
      <Container>
        <Header>
          <h2>원티드 프리온보딩 프론트엔드 코스 선발과제</h2>
        </Header>
        <ComponentContainer>
          <Toggle />
          <Modal />
          <Tab />
          <Tag />
          <Autocomplete />
          <ClickToEdit />
        </ComponentContainer>
        <Footer>
            <strong>신한결</strong>
            <a href='https://github.com/alskfl222/'>GitHub</a>
        </Footer>
      </Container>
    </Background>
  );
}

export default App;
