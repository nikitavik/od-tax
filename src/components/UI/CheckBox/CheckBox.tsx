import React from "react"
import styled from "styled-components"

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;

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
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #000;
  }

  &.disabled {
    background-image: ${(props) => props.theme.checkBoxGray};
  }
`

const CheckBoxBlockLine = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.gray800};
`

const CheckBoxTitle = styled.div`
  display: inline-block;
  margin-left: 11px;
`

const CheckBoxMainText = styled.span`
  font-size: 14px;
  line-height: 171%;
`

const CheckBoxSubText = styled.span`
  font-size: 14px;
  line-height: 171%;
  color: ${(props) => props.theme.gray900};
`

interface ICheckBoxProps {
  value: number
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  title: number
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  value,
  name,
  onChange,
  title,
  checked,
}) => {
  return (
    <CheckBoxBlockLine>
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
      <CheckBoxTitle>
        <CheckBoxMainText>
          {title.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          &nbsp;рублей&nbsp;
        </CheckBoxMainText>
        <CheckBoxSubText>
          в {value}-{wordEnd(value)} год
        </CheckBoxSubText>
      </CheckBoxTitle>
    </CheckBoxBlockLine>
  )
}

export default CheckBox

////// Calculate word ending
function wordEnd(value: number): string {
  let wordEnd
  const lChr = value.toString().slice(-1)
  if (value === 12 || value === 16 || value === 17) {
    wordEnd = "ый"
  } else if (lChr === "3" && value !== 13) {
    wordEnd = "ий"
  } else if (lChr === "2" || lChr === "6" || lChr === "7" || lChr === "8") {
    wordEnd = "ой"
  } else wordEnd = "ый"
  return wordEnd
}
