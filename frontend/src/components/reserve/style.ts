import { styled } from "styled-components";

export const Card1 = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffb1cd;
  position: absolute;
  top: 50px;
  right: 10px;
`;

export const dividerStyle = {
  margin: "20px 0",
  borderTop: "1px solid #ccc",
};

export const buttonStyle = {
  display: "inline-block",
  margin: "0 30px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
  background: "#FFB1CD",
  color: "#333",
  textDecoration: "none",
};

export const selectCarButtonStyle = {
  display: "inline-block",
  margin: "0 10px",
  padding: "5px 10px",
  border: "none",
  borderRadius: "10px",
  background: "Red",
  color: "#333",
  textDecoration: "none",
};

export const selectCarButtonStyle1 = {
  display: "inline-block",
  margin: "0 10px",
  padding: "5px 10px",
  border: "none",
  borderRadius: "10px",
  background: "#FFFFF",
  color: "#333",
  textDecoration: "none",
};

interface TypeButtonProps {
  isSelected: boolean;
}

export const TypeButton = styled.button<TypeButtonProps>`
  padding: 5px 15px;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #000;
  background-color: ${(props) => (props.isSelected ? "#FFB1CD" : "#ffe3e3")};
  border: ${(props) => (props.isSelected ? "1px solid #ccc" : "none")};
  border-radius: 15px;
  box-shadow: 0 3px #999;

  &:active {
    background-color: wheat;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Button = styled.button`
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #ffe3e3;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px #999;

  &:active {
    background-color: #ffe3e7;
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
`;

export interface Props {
  $$typeof: any;
  componentStyle: any;
  foldedComponentIds: any;
  inlineStyle: any;
  onPress: any;
  src: any;
  width: string;
  height: string;
  size: number;
  color: string;
}
