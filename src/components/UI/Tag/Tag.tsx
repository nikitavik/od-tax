import React from "react"
import styled from "styled-components"

const HiddenRadio = styled.input.attrs({ type: "radio" })`
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
    color: #fff;
    background: ${(props) => props.theme.redGrad};
  }
`

const TagContainer = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const StyledTag = styled.div`
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 171%;
  color: #000;
  background-color: #eef0f2;
  border-radius: 50px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.gray800};
  }
`

interface ITagProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

const Tag: React.FC<ITagProps> = ({ children, onChange, name, value }) => {
  return (
    <TagContainer>
      <HiddenRadio value={value} onChange={onChange} name={name} />
      <StyledTag>{children}</StyledTag>
    </TagContainer>
  )
}

export default Tag
