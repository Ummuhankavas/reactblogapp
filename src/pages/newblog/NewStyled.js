import styled from "styled-components";

const NewStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* background-image: url("https://source.unsplash.com/FrSEEdYr418"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 90vh;
`;

export const Signin = styled.div`
  padding: 10px;
  margin-top: 150px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
`;
export const Input = styled.input`
  width: 20rem;
  margin-bottom: 0.9rem;
  height: 2rem;
`;
export const Input2 = styled.textarea`
  width: 20rem;
  margin-bottom: 2rem;
  height: 12rem;
  resize: none;
`;
export const Btn = styled.button`
  width: 20rem;
  height: 3rem;
  padding: 5px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.body};
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.header};
  }
`;

export default NewStyled;