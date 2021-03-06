import React from "react"
import styled from "styled-components"
import { FieldError } from "react-hook-form"

const InputWrapper = styled.div`
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 0 8px 10px;
  font-size: 14px;
  line-height: 171%;
  background-color: #fff;
  color: #000;
  border: 1px solid ${(props) => props.theme.gray800};
  border-radius: 3px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${(props) => props.theme.gray900};
  }

  &:focus {
    border-color: ${(props) => props.theme.gray800};
  }

  &:hover {
    border-color: #000;
  }

  &:disabled &::placeholder {
    color: ${(props) => props.theme.grayText};
    border-color: ${(props) => props.theme.grayText};
  }

  &.error {
    border-color: ${(props) => props.theme.red};
  }
`

const InputTitle = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 171%;
  color: #000;
`

const InputError = styled.p`
  margin-top: 4px;
  font-size: 10px;
  line-height: 120%;
  color: ${(props) => props.theme.red};

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 155%;
  }
`

interface IInputProps {
  title: string
  name: string
  onChange: (value: never) => void
  onBlur: () => void
  value: string
  invalid: boolean
  error?: FieldError
  disabled?: boolean
}

const Input: React.FC<IInputProps> = ({
  name,
  onChange,
  onBlur,
  value,
  invalid,
  error,
  title,
  disabled,
}) => {
  return (
    <InputWrapper>
      <InputTitle>{title}</InputTitle>
      <StyledInput
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {invalid ? (
        <InputError>{error?.message || "Введите верное значение"}</InputError>
      ) : null}
    </InputWrapper>
  )
}

export default Input
