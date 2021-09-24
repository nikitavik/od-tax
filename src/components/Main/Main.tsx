import * as React from "react"
import styled from "styled-components"
import Button from "../UI/Buttons/Button/Button"
import { useState } from "react"
import PopUp from "../PopUp/PopUp"

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.redGrad};

  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonWrapper = styled.div`
  min-width: 149px;
  @media (min-width: 768px) {
    min-width: 198px;
  }
`

const Main: React.FC = () => {
  type isOpen = boolean
  const [showPopUp, setShowPopUp] = useState<isOpen>(false)

  const togglePopUp = (e: React.MouseEvent) => {
    e.stopPropagation()
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
          disabled={false}
          type="button"
        />
      </ButtonWrapper>

        <PopUp isOpen={showPopUp} onClose={togglePopUp} />
    </StyledMain>
  )
}
export default Main
