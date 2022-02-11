import { useState } from 'react';
import styled from 'styled-components';

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
`

const Title = styled.div`
  padding: 2rem 3rem 1rem;
  font-size: 2rem;
  font-weight: 700;
`

const TagsContainer = styled.div`
  align-self: center;
  width: 80%;
  min-height: 3rem;
  margin-bottom: 2rem;
  padding: 0 .5rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

const TagInput = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  
  &:focus {
    outline: transparent;
  }
`

const Taglist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: .5rem 0 0 0;
`

const Tagitem = styled.li`
  width: auto;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 .5rem;
  font-size: .9rem;
  list-style: none;
  border-radius: 6px;
  margin: 0 .5rem .5rem 0;
  background: #4000c7;
`

const DeleteButton = styled.button`
  position: relative;
  align-self: flex-end;
  top: -6px;
  width: 16px;
  height: 16px;
  margin: 0 0 0 .3rem;
  border: 0;
  border-radius: 50%;
  outline: none;
  background-color: white;
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
`

export const Tag = () => {
  const initialTags = ['Wanted', 'CodeStates'];

  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.slice(0, indexToRemove), ...tags.slice(indexToRemove+1)])
  };
  
  const addTags = (event) => {
    if (tags.includes(event.target.value) || event.target.value === '') return
    else {
      setTags([...tags, event.target.value])
      event.target.value = ""
    }
  }
  

  return (
    <Container>
      <Title>Tag</Title>
      <TagsContainer>
        <Taglist>
          {tags.map((tag, index) => (
            <Tagitem key={index}>
              <span>{tag}</span>
              <DeleteButton onClick={() => removeTags(index)}/>
            </Tagitem>
          ))}
        </Taglist>
        <TagInput
          type='text'
          onKeyUp={(event) => {
            if (event.key === 'Enter')
              addTags(event)
            }
          }
          placeholder='Add Tag and Press Enter'
        />
      </TagsContainer>
    </Container>
  );
};