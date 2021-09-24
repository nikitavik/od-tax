import * as React from "react"
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

interface InputProps {
  title: string
  name: string
  onChange: (value: never) => void
  onBlur: () => void
  isDirty: boolean
  value: string
  invalid: boolean
  isTouched: boolean
  error?: FieldError
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  onBlur,
  value,
  invalid,
  isTouched,
  error,
  title,
  isDirty,
}) => {
  return (
    <InputWrapper>
      <InputTitle>{title}</InputTitle>

      <StyledInput
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />

      {(isTouched || isDirty) && invalid ? (
        <InputError>{error?.message}</InputError>
      ) : (
        ""
      )}
    </InputWrapper>
  )
}

export default Input
