import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
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

const TabMenu = styled.ul`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  background-color: #4000c7;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: bold;
  list-style: none;

  .submenu {
    padding: .5rem 2rem;
  }

  .selected {
    background-color: #885BC7;
  }

  & > li {
    cursor: pointer;
  }
`;

const Desc = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

export const Tab = () => {
  const [curTab, setTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    setTab(index)
  };

  return (
    <Container>
      <Title>Tab</Title>
      <TabMenu>
        {menuArr.map((el, index)=> {
          return (
            <li className={`submenu${index === curTab ? " selected" : ""}`}
                onClick={() => selectMenuHandler(index)}>{el.name}</li>
          )
        })}
      </TabMenu>
      <Desc>
        <p>{menuArr[curTab].content}</p>
      </Desc>
    </Container>
  );
};