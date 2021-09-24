import React, { useState } from "react"
import styled from "styled-components"

import Button from "../UI/Buttons/Button/Button"
import PopUp from "../PopUp/PopUp"

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.redGrad};
`

const ButtonWrapper = styled.div`
  min-width: 149px;

  @media (min-width: 768px) {
    min-width: 198px;
  }
`

const Main: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false)

  const togglePopUp = () => {
    setShowPopUp(!showPopUp)
  }

  return (
    <StyledMain>
      <ButtonWrapper>
        <Button
          title="Налоговый вычет"
          onClick={togglePopUp}
          size="big"
          color="alternative"
          type="button"
        />
      </ButtonWrapper>
      <PopUp isOpen={showPopUp} onClose={togglePopUp} />
    </StyledMain>
  )
}
export default Main
