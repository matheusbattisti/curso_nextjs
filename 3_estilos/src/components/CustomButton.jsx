"use client";

import styled from "styled-components";

// Definindo um componente de botão estilizado
const MyStyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default function CustomButton({ children }) {
  return <MyStyledButton>{children}</MyStyledButton>;
}
