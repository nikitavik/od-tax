import * as React from "react"
import styled from "styled-components"

const StyledTextButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 171%;
  text-align: start;
  padding: 0;

  color: ${(props) => props.theme.red};
  border: none;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.orange};
  }
  &:active {
    color: ${(props) => props.theme.red};
  }
`

interface ITextButtonProps {
  title: string
  onClick: () => void
  type?: "button"
}

const TextButton: React.FC<ITextButtonProps> = ({ title, onClick, type}) => {
  return <StyledTextButton type={type} onClick={onClick}>{title}</StyledTextButton>
}

export default TextButton
