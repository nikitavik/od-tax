import * as React from 'react'
import styled from 'styled-components'

const TagContainer = styled.label`
    display: block;
    width: 100%;
    height: 100%;
`
const HiddenRadio = styled.input.attrs({type: 'radio'})`
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
    color: #fff;
    background: ${props => props.theme.redGrad};
  }
`
const StyledTag = styled.div`
  width: 100%;
  padding: 6px 12px;
  
  font-size: 14px;
  line-height: 171%;
  
  color: #000;
  background-color: #EEF0F2;
  border-radius: 50px;
  border: none;
  outline: none;
  &:hover{
    background-color: ${props => props.theme.gray800};
  }
`

interface TagProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string,
    value: string
}

const Tag: React.FC<TagProps> = ({ children , onChange, name,value}) => {

    return(
        <TagContainer>
            <HiddenRadio value={value} onChange={onChange} name={name}/>
            <StyledTag>{children}</StyledTag>
        </TagContainer>
    )
}

export default Tag