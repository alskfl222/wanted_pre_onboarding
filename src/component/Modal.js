import { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
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
`;

const Title = styled.div`
  padding: 2rem 3rem 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

const ModalBackdrop = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBtn = styled.button`
  align-self: center;
  margin-bottom: 1rem;
  width: 70%;
  margin-bottom: 2rem;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  background-color: #4000c7;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: grab;
`;

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  position: relative;
  top: 30%;
  width: 70vw;
  min-width: 270px;
  height: 240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fff;
  border-radius: 24px;
`;

const ModalMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ModalCloseButton = styled.button`
  position: relative;
  align-self: center;
  z-index: 1000;
  width: 70%;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  background-color: #4000c7;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: grab;
  
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ModalHandler = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <Title>Modal</Title>
      <ModalBtn onClick={(e) => ModalHandler(e)}>{!isOpen ? 'Open' : 'Opened!'}</ModalBtn>
      {isOpen ? (
        <ModalBackdrop onClick={ModalHandler}>
          <ModalView>
            <ModalMessage>Modal Viewer</ModalMessage>
            <ModalCloseButton onClick={() => setIsOpen(false)}>
              Close
            </ModalCloseButton>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};
