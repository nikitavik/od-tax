import React from "react"
import styled from "styled-components"

import PopUpForm from "../PopUpForm/PopUpForm"

interface IPopUpProps {
  isOpen: boolean
  onClose: () => void
}

const PopUpOverlay = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: ${(props) => props.theme.dark30};
`

const StyledPopUp = styled.div`
  position: relative;
  z-index: 2000;
  margin: 0 auto;
  background: #fff;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
    padding: 32px 32px 16px;
    font-size: 28px;
    line-height: 143%;
  }
`

const PopUpSubtitle = styled.div`
  padding: 0 16px 24px;
  font-size: 12px;
  line-height: 133%;

  @media (min-width: 768px) {
    padding: 0 32px 24px;
    font-size: 14px;
    line-height: 171%;
  }
`

const CloseCross = styled.div`
  position: absolute;
  height: 12px;
  width: 12px;
  top: 22px;
  right: 22px;
  background-image: ${(props) => props.theme.smallRedCross};
  cursor: pointer;

  @media (min-width: 768px) {
    height: 18px;
    width: 18px;
    top: 27px;
    right: 27px;
    background-image: ${(props) => props.theme.bigRedCross};
  }
`

const PopUp: React.FC<IPopUpProps> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <PopUpOverlay>
      <StyledPopUp>
        <CloseCross onClick={onClose} />
        <PopUpTitle>Налоговый вычет</PopUpTitle>
        <PopUpSubtitle>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </PopUpSubtitle>
        <PopUpForm onClose={onClose} />
      </StyledPopUp>
    </PopUpOverlay>
  ) : null
}

export default PopUp
