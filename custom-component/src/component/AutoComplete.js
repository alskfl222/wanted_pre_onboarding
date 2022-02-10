import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'want',
  'wanted',
  '원티드',
  'codestates',
  '코드스테이츠',
  '코딩',
  '원하는',
];

const Container = styled.div`
  width: 100%;
  min-height: 200px;
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

  > p {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const InputContainer = styled.div`
  position: relative;
  align-self: center;
  width: 80%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 1rem;
  z-index: 10;
`;

const SearchBarContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  flex: 1 0 0;
  background-color: transparent;
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
`;

const DeleteButton = styled.button`
  position: relative;
  align-self: flex-end;
  top: -1rem;
  right: 1rem;
  width: 16px;
  height: 16px;
  margin: 0 0 0 0.3rem;
  border: 0;
  border-radius: 50%;
  outline: none;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 2px;
    width: 12px;
    height: 2px;
    border-radius: 1px;
    background-color: #4000c7;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 7px;
    left: 2px;
    width: 12px;
    height: 2px;
    border-radius: 1px;
    background-color: #4000c7;
    transform: rotate(-45deg);
  }
`;

const DropDownContainer = styled.ul`
  position: absolute;
  top: 1rem;
  left: -1px;
  width: 100%;
  padding: 1rem 0;
  display: block;
  list-style-type: none;
  background-color: white;
  border: 1px solid rgb(223, 225, 229);
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  z-index: -9;

  > li {
    padding: 0.5rem 1rem;

    &:hover {
      background-color: #ccc;
      cursor: pointer;
    }
  }

  .select {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DropDown = ({ options, select, handleComboBox }) => {
  return (
    <DropDownContainer>
      {options.map((el, index) => {
        return (
          <li
            key={el}
            onClick={(event) => {
              handleComboBox(event.target.textContent);
            }}
            className={index === select ? 'select' : ''}
          >
            {el}
          </li>
        );
      })}
    </DropDownContainer>
  );
};

export const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [select, setSelect] = useState(0);

  const changeSelect = (event) => {
    if (event.key === 'ArrowDown' && select < options.length - 1) {
      setSelect(select + 1)
    }
    if (event.key === 'ArrowUp' && select > 0) {
      setSelect(select - 1)
    }
    if (event.key === 'Enter') {
      setInputValue(options[select])
    }
  };

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setHasText(true);
    setInputValue(event.target.value);
    setOptions(
      deselectedOptions.filter((el) => {
        return el.includes(event.target.value);
      })
    );
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
  };

  const handleDeleteButtonClick = () => {
    setHasText(false);
    setInputValue('');
  };

  return (
    <Container>
      <Title>AutoComplete
        <p>(ex. 원티드, 코드스테이츠)</p>
      </Title>

      <InputContainer>
        <SearchBarContainer>
          <SearchInput
            type='text'
            value={inputValue}
            onChange={(event) => handleInputChange(event)}
            onKeyUp={(event) => changeSelect(event)}
          />
          <DeleteButton onClick={handleDeleteButtonClick} />
        </SearchBarContainer>
        {hasText ? (
          <DropDown
            options={options}
            select={select}
            changeSelect={changeSelect}
            handleComboBox={handleDropDownClick}
          />
        ) : null}
      </InputContainer>
    </Container>
  );
};
