import * as React from "react"
import styled from "styled-components"
import PopUpForm from "../PopUpForm/PopUpForm"
import { useContext } from 'react'
import { PopUpContext } from '../Main/Main'

interface PopUpProps {
  isOpen: boolean
}

const PopUpOverlay = styled.div`
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: ${(props) => props.theme.dark30};
`

const StyledPopUp = styled.div`
  z-index: 1010;
  position: relative;

  margin: 0 auto;

  background: #fff;
  @media (max-width: 768px) {
    min-height: 100%;
  }
  @media (min-width: 768px) {
    max-width: 453px;
    border-radius: 30px;
    margin: 120px auto;
  }
  @media (min-width: 1440px) {
    max-width: 552px;
  }
`

const PopUpTitle = styled.h3`
  margin: 0;
  padding: 32px 16px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 143%;

    padding: 32px 32px 16px;
  }
`

const PopUpSubtitle = styled.div`
  font-size: 12px;
  line-height: 133%;

  padding: 0 16px 24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 171%;

    padding: 0 32px 24px;
  }
`

const CloseCross = styled.div`
  position: absolute;
  background-image: ${(props) => props.theme.smallRedCross};
  height: 12px;
  width: 12px;
  top: 22px;
  right: 22px;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 18px;
    width: 18px;
    top: 27px;
    right: 27px;
    background-image: ${(props) => props.theme.bigRedCross};
  }
`

const PopUp: React.FC<PopUpProps> = ({ isOpen }) => {
  const popUpContext = useContext(PopUpContext)
  return isOpen ? (
    <PopUpOverlay>
      <StyledPopUp>
        <CloseCross onClick={popUpContext?.closePopUp} />
        <PopUpTitle>Налоговый вычет</PopUpTitle>
        <PopUpSubtitle>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </PopUpSubtitle>
        <PopUpForm />
      </StyledPopUp>
    </PopUpOverlay>
  ) : null
}

export default PopUp
