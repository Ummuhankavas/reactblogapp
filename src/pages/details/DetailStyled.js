import styled from "styled-components";

const Blogdiv = styled.div`
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px grey;
`;

export const Image = styled.img`
  width: 100%;
  min-height: 40vh;
`;
export const Index = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
  background-color: #efeefe;
  /* padding-left: 5px; */
  font-size: 13px;
`;
export const Bottom = styled.div`
  width: 100%;
  height: 20%;
  padding-left: 5px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BtnDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;
`;
export const Btn = styled.button`
  width: 10rem;
  height: 3rem;
  padding: 5px;
  border-radius: 8px;
  background-color: red;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Blogdiv;