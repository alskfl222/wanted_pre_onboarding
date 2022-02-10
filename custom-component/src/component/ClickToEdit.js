import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
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
`

const InputBox = styled.div`
  width: 10rem;
  height: 3rem;
  margin-left: 1rem;
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  line-height: 3rem;
`;

const InputEdit = styled.input`
  width: 10rem;
  height: 3rem;
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  line-height: 3rem;
`;

const InputView = styled.div`
  text-align: center;
  align-items: center;
`;

const InputStatus = styled.div`
  margin-bottom: 2rem;
  align-items: center;
  text-align: center;
`;

const InputBar = ({ type, value, handleValueChange }) => {
  const inputEl = useRef();
  const [isEditMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {
    setEditMode(true)
  };

  const handleBlur = () => {
    setEditMode(false)
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    if (newValue !== e.target.value) setNewValue(e.target.value);
  };

  return (
    <>
      <strong>{type}</strong>
      <InputBox onClick={handleClick}>
        {isEditMode ? (
          <InputEdit
            type='text'
            value={newValue}
            ref={inputEl}
            onBlur={handleBlur}
            onChange={(e) => handleInputChange(e)}
          />
        ) : (
          <span>{newValue}</span>
        )}
      </InputBox>
    </>
  );
}

const initialData = {
  name: '신한결',
  age: 32
};

export const ClickToEdit = () => {
  const [name, setName] = useState(initialData.name);
  const [age, setAge] = useState(initialData.age);

  return (
    <Container>
      <Title>ClickToEdit</Title>
      <InputView>
        <InputBar type={"이름"} value={name} handleValueChange={(newValue) => setName(newValue)} />
      </InputView>
      <InputView>
        <InputBar type={"나이"} value={age} handleValueChange={(newValue) => setAge(newValue)} />
      </InputView>
      <InputStatus>
        이름 <strong>{name}</strong> 나이 <strong>{age}</strong>
      </InputStatus>
    </Container>
  );
};