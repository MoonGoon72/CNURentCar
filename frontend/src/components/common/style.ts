import { styled } from "styled-components";
import { Props } from "../reserve/style";

export const cardStyle = {
  width: "300px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  background: "#FFB1CD",
};

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
  margin: "0 5px",
  padding: "5px 10px",
  border: "none",
  borderRadius: "10px",
  background: "#FFFFF",
  color: "#333",
  textDecoration: "none",
};

const Cfonts = styled.div<Props>`
  font-weight: 600;
  font-size: ${(props: Props) => props.size}px;
  color: ${(props: Props) => props.color || "black"};
`;
export default Cfonts;
