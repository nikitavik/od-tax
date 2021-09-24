import * as React from "react"
import styled from "styled-components"

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:checked + div {
    background-image: ${(props) => props.theme.checkBoxRed};
    border: none;
  }
`
const StyledCheckBox = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;

  border: 1px solid ${(props) => props.theme.gray800};
  border-radius: 6px;

  background: #fff;
  box-sizing: border-box;

  &:hover {
    border-color: #000;
  }
  &.disabled {
    background-image: ${(props) => props.theme.checkBoxGray};
  }
`
interface CheckBoxProps {
  value: number
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  name,
  onChange,
  checked,
}) => {
  return (
    <CheckBoxContainer>
      <label>
        <HiddenCheckBox
          type="checkbox"
          value={value}
          checked={checked}
          name={name}
          onChange={onChange}
        />
        <StyledCheckBox />
      </label>
    </CheckBoxContainer>
  )
}

export default CheckBox
