import * as React from "react"
import styled from "styled-components"

interface ButtonProps {
  type: "submit" | "button" | "reset"
  title: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  bSize: "small" | "big"
  altStyle: boolean
  disabled: boolean
}

const StyledRedButton = styled.button.attrs<
  { bSize: string },
  {
    padding: string
    fontSize: string
    lineHeight: string
  }
>(({ bSize }) => ({
  padding: bSize === "small" ? `12px` : "16px",
  fontSize: bSize === "small" ? "14px" : "16px",
  lineHeight: bSize === "small" ? "133%" : "150%",
}))<{ bSize: string }>`
  width: 100%;
  padding: ${(props) => props.padding};

  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: 500;
  white-space: nowrap;

  color: #fff;
  background: ${(props) => props.theme.redGrad};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.mainShadow};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.red};
  }
  &:disabled {
    background: ${(props) => props.theme.gray900};
    box-shadow: none;
  }
  &.alternative {
    border: 1px solid #fff;
    background: transparent;
    box-shadow: none;
    &:hover {
      color: #000;
      background: #fff;
    }
    &:disabled {
      border: none;
    }
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`

const Button: React.FC<ButtonProps> = ({
  title,
  disabled,
  bSize,
  altStyle,
  onClick,
}) => {
  return (
    <StyledRedButton
      disabled={disabled}
      onClick={onClick}
      bSize={bSize}
      className={altStyle ? "alternative" : ""}
    >
      {title}
    </StyledRedButton>
  )
}

export default Button
