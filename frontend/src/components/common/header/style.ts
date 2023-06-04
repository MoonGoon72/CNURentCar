import { styled } from "styled-components";

export const HeaderButtonStyle = styled.button`
  display: inline-block;
  font-size: large;
  margin: 0px 30px;
  padding: 20px, 40px;
  border: none;
  border-radius: 10px;
  background-color: #ffb1cd;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:active {
    background-color: #ffe3e7;
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
`;

export const Conatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
