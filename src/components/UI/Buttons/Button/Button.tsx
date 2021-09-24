import * as React from "react"
import styled from "styled-components"

interface IButtonProps {
  type?: string
  title: string
  onClick: (e: React.MouseEvent) => void
  size: "small" | "big",
  color: "primary" | "alternative"
  disabled?: boolean
}

const StyledRedButton = styled.button.attrs<
  { size: string, color: string},
  {
    small: boolean
    primary: boolean
  }
>(({ size,color }) => ({
  small: size === "small",
  primary: color === "primary"
}))<{ size: string, color: string}>`
  width: 100%;
  padding: ${(props) => props.small ? "12px" : "16px"};
  font-size: ${(props) => props.small ? "14px" : "16px"};
  line-height: ${(props) => props.small ? "133%": "150%"};
  font-weight: 500;
  white-space: nowrap;

  color: #fff;
  background: ${(props) => props.primary ? props.theme.redGrad : "transparent"};
  border-radius: 6px;
  box-shadow: ${(props) => props.primary ? props.theme.mainShadow : "none"};
  outline: none;
  border: ${props => props.primary ? "none" : "1px solid #fff"};
  cursor: pointer;
  
  transition: all .2s ease-in-out;
  &:hover {
    background: ${(props) => props.primary ? props.theme.red : "#fff"};
    color: ${props => props.primary ? "" : "#000"};
  }
  
  &:disabled {
    background: ${(props) => props.theme.gray900};
    box-shadow: none;
    border: ${props => props.primary ? "" : "none"}
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`

const Button: React.FC<IButtonProps> = ({
  title,
  disabled,
  size,
  color,
  onClick,
}) => {
  return (
    <StyledRedButton
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={color}
    >
      {title}
    </StyledRedButton>
  )
}

export default Button
