import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url("https://images.pexels.com/photos/1201673/pexels-photo-1201673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 90vh;
`;

export const Signin = styled.div`
  padding: 20px;
  margin: 100px auto;
  background-color: white;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
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

export default RegisterStyled;