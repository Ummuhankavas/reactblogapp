import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url("https://source.unsplash.com/FrSEEdYr418");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 90vh;
`;

export const Signin = styled.div`
  padding: 20px;
  margin-top: 150px;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  opacity: 0.8;
  border-radius: 5px;
  box-shadow: 18px 25px 42px 1px black;
`;
export const Input = styled.input`
  width: 20rem;
  margin-bottom: 2rem;
  height: 1.5rem;
  border-radius: 10px;
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

export default LoginStyled;