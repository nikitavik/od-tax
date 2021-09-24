import React, { useContext, useState } from "react"
import Input from "../UI/Input/Input"
import TextButton from "../UI/Buttons/TextButton/TextButton"
import Button from "../UI/Buttons/Button/Button"
import styled from "styled-components"
import { Controller, useForm } from "react-hook-form"
import Tag from "../UI/Tag/Tag"
import CheckBox from "../UI/CheckBox/CheckBox"
import { PopUpContext } from "../Main/Main"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const InputWrapper = styled.div`
  padding: 0 16px 8px;

  @media (min-width: 768px) {
    padding: 0 32px 8px;
  }
`
const TextButtonWrapper = styled.div`
  padding: 0 16px 16px;
  @media (min-width: 768px) {
    padding: 0 32px 16px;
  }
`
const TagBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 32px 40px;
  }
`
const TagBarTitle = styled.h6`
  font-size: 14px;
  line-height: 171%;
  font-weight: 500;
  margin: 0 32px 0 0;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    padding: 12px 0;
  }
`
const TagsRow = styled.div`
  display: flex;
`
const TagWrapper = styled.div`
  margin-right: 8px;
  @media (min-width: 768px) {
    margin-right: 16px;
  }
`
const SubmitButtonWrapper = styled.div`
  padding: 0 16px 16px;
  @media (min-width: 768px) {
    padding: 0 32px 32px;
  }
`
const CheckBoxBlockTitle = styled.div`
  padding-top: 4px;
`
const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 24px;
  @media (min-width: 768px) {
    padding: 0 32px 16px;
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

type CheckBoxField = {
  checked: boolean
  value: number
  year: number
}

type FormData = {
  clientSalary: string
  taxSelected: CheckBoxField[]
  target: string
}

const PopUpForm: React.FC = () => {
  const [payments, setPayments] = useState<CheckBoxField[]>([])
  const [radioTouched, setRadioTouched] = useState(false)
  const [calculated, setCalculated] = useState(false)
  const popUpContext = useContext(PopUpContext)

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { isValid, isValidating, isSubmitting },
  } = useForm<FormData>({
    mode: "all",
    defaultValues: {
      clientSalary: "",
      taxSelected: [],
      target: "",
    },
  })

  // Input Calculation
  const calculateInput = () => {
    if (isValid) {
      const MAX_PAYMENT = 260000

      // Example property cost
      const EXAMPLE1 = 2_500_000
      const EXAMPLE2 = 1_000_000
      let totalPayment = EXAMPLE1 * 0.13
      totalPayment = totalPayment >= MAX_PAYMENT ? MAX_PAYMENT : totalPayment

      // Payment calculation
      const salary = getValues("clientSalary")
      const taxDeductionOfSalary = +salary * 12 * 0.13
      const yearsToPay = Math.ceil(totalPayment / taxDeductionOfSalary)
      const paymentsArray = []
      for (let year = 0; year < yearsToPay; year++) {
        if (year === yearsToPay - 1) {
          paymentsArray.push({
            year: year + 1,
            value: Math.round(totalPayment - taxDeductionOfSalary * (yearsToPay - 1)),
            checked: false,
          })
        } else
          paymentsArray.push({
            year: year + 1,
            value: Math.round(taxDeductionOfSalary),
            checked: false,
          })
      }

      setPayments(paymentsArray)
      setCalculated(true)
    }
  }

  // Change payments state and write to form
  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPayments = payments.map((payment) => {
      if (payment.year === +e.target.value) {
        payment.checked = !payment.checked
        return payment
      } else return payment
    })
    setPayments(newPayments)

    // Set only checked to form
    const toForm = newPayments.filter((payment) => payment.checked)
    setValue("taxSelected", toForm)
  }

  // Form submit
  const onSubmit = (data: FormData) => {
    console.log(data)
    alert(JSON.stringify(data, null, 1))
    // dispatch()
    popUpContext?.closePopUp()
  }

  // Radio button handler
  const tagClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioTouched(true)
    setValue("target", e.target.value)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Controller
          render={({
            field: { onChange, onBlur, value, name },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <Input
              title="Ваша зарплата в месяц"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              invalid={invalid}
              isDirty={isDirty}
              isTouched={isTouched}
              error={error}
            />
          )}
          name="clientSalary"
          control={control}
          rules={{
            required: "Это поле обязательное",
            validate: (value: string) => {
              const myRegExp = /^[1-9]\d*$/
              return myRegExp.test(value) || "Введите пожалуйста целое число"
            },
            minLength: { value: 5, message: "Минимальная длинна 5 символов" },
          }}
        />
      </InputWrapper>

      <TextButtonWrapper>
        <TextButton type="button" title="Рассчитать" onClick={calculateInput} />
      </TextButtonWrapper>

      {payments ? (
        <CheckBoxBlock>
          <CheckBoxBlockTitle>
            Итого можете внести в качестве досрочных:
          </CheckBoxBlockTitle>

          {payments?.map((payment) => {
            return (
              <CheckBoxBlockLine key={payment.year}>
                <CheckBox
                  value={payment.year}
                  name={`${payment.value}_${payment.year}`}
                  checked={payment.checked}
                  onChange={checkBoxHandler}
                />
                <CheckBoxTitle>
                  <CheckBoxMainText>
                    {payment.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} рублей&nbsp;
                  </CheckBoxMainText>
                  <CheckBoxSubText>в {payment.year}-йы год</CheckBoxSubText>
                </CheckBoxTitle>
              </CheckBoxBlockLine>
            )
          })}
        </CheckBoxBlock>
      ) : null}

      <TagBarWrapper>
        <TagBarTitle>Что уменьшаем</TagBarTitle>
        <TagsRow>
          <TagWrapper>
            <Tag onChange={tagClickHandler} name="target" value="payment">
              Платёж
            </Tag>
          </TagWrapper>
          <TagWrapper>
            <Tag onChange={tagClickHandler} name="target" value="time">
              Срок
            </Tag>
          </TagWrapper>
        </TagsRow>
      </TagBarWrapper>

      <SubmitButtonWrapper>
        <Button
          type="submit"
          title="Добавить"
          onClick={() => null}
          bSize={"small"}
          altStyle={false}
          disabled={
            isSubmitting ||
            !isValid ||
            !getValues("taxSelected").length ||
            isValidating ||
            !calculated ||
            !radioTouched
          }
        />
      </SubmitButtonWrapper>
    </StyledForm>
  )
}

export default PopUpForm
