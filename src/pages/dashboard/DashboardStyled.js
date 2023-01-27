import styled from "styled-components";

const DashboardStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  gap: 10px;
  padding: 20px;
`;

export const Blogdiv = styled.div`
  padding: 20px;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 19rem;
  height: 22rem;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px grey;
  position: relative;
`;
export const Image = styled.img`
  width: 21.5rem;
  height: 10rem;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Index = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  top: 10rem;
  width: 21.5rem;
  height: 8rem;
  background-color: #efeefe;
  font-size: 13px;
`;
export const Bottom = styled.div`
  position: absolute;
  left: 0;
  top: 18rem;
  width: 21.5rem;
  padding-left: 5px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default DashboardStyled;