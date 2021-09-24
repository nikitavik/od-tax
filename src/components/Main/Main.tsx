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

interface PopUpContextInterface{
  closePopUp:() => void
}

export const PopUpContext = React.createContext<PopUpContextInterface | null>(null)

const Main: React.FC = () => {
  type isOpen = boolean
  const [isPopUpOpen, setPopUpOpen] = useState<isOpen>(false)

  const openPopUpHandler = () => {
    setPopUpOpen(true)
  }
  const closePopUpHandler = () => {
    setPopUpOpen(false)
  }

  return (
    <StyledMain>
      <ButtonWrapper>
        <Button
          title="Налоговый вычет"
          onClick={openPopUpHandler}
          bSize="big"
          altStyle={true}
          disabled={false}
          type="button"
        />
      </ButtonWrapper>

      <PopUpContext.Provider value={{
          closePopUp: closePopUpHandler,
      }}>
        <PopUp isOpen={isPopUpOpen}/>
      </PopUpContext.Provider>
    </StyledMain>
  )
}

export default Main
