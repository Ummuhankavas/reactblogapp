import styled from "styled-components";

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url("https://alhubab.com/wp-content/uploads/2021/03/photo-1432821596592-e2c18b78144f.jpg");
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
  gap: 20px;
  width: 25rem;
  opacity: 0.8;
  border-radius: 5px;
  box-shadow: 18px 25px 42px 1px black;
`;
export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

export default ProfileStyled;