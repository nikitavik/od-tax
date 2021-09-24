import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import styled from "styled-components"

import Tag from "../UI/Tag/Tag"
import Input from "../UI/Input/Input"
import CheckBox from "../UI/CheckBox/CheckBox"
import Button from "../UI/Buttons/Button/Button"
import TextButton from "../UI/Buttons/TextButton/TextButton"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  margin: 0 32px 0 0;
  padding-bottom: 24px;
  font-size: 14px;
  line-height: 171%;
  font-weight: 500;

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
  flex: 0 0 auto;
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

const MediaMain = styled.div`
  @media (max-width: 768px) {
    flex: 1 0 auto;
  }
`

interface IPopUpFormProps {
  onClose: () => void
}

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

const PopUpForm: React.FC<IPopUpFormProps> = ({ onClose }) => {
  const [payments, setPayments] = useState<CheckBoxField[]>([])
  const [calculated, setCalculated] = useState(false)

  // Arr for tags render
  const tags: string[] = ["time", "payment"]

  // Use Form Hook
  const defaultValues = {
    clientSalary: "",
    taxSelected: [],
    target: "",
  }
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    watch,
    setValue,
    formState: { isValid, isValidating, isSubmitting },
  } = useForm<FormData>({
    mode: "all",
    defaultValues,
  })

  // CheckBox reset on input change
  const watchInput = watch("clientSalary")
  useEffect(() => {
    setCalculated(false)
    setPayments([])
  }, [watchInput])

  // Input to Checkboxes Calculation
  const calculateInput = () => {
    if (isValid) {
      const MAX_PAYMENT = 260000

      // Example property cost
      const EXAMPLE1 = 2500000
      // const EXAMPLE2 = 1000000
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
            value: Math.round(
              totalPayment - taxDeductionOfSalary * (yearsToPay - 1)
            ),
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
    } else {
      setError(
        "clientSalary",
        { type: "required", message: "Сначала нужно ввести данные" },
        { shouldFocus: true }
      )
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
    alert(JSON.stringify(data, null, 5))
    // dispatch()
    onClose()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <MediaMain>
        <InputWrapper>
          <Controller
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, error },
            }) => (
              <Input
                title="Ваша зарплата в месяц"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                invalid={invalid}
                error={error}
              />
            )}
            name="clientSalary"
            control={control}
            rules={{
              required: "Это поле обязательное",
              validate: (value: string) => {
                const myRegExp = /^[1-9]\d*$/
                return myRegExp.test(value) || "Введите целое число"
              },
              minLength: { value: 5, message: "Минимальная длина 5 символов" },
            }}
          />
        </InputWrapper>

        <TextButtonWrapper>
          <TextButton
            type="button"
            title="Рассчитать"
            onClick={calculateInput}
          />
        </TextButtonWrapper>

        {payments ? (
          <CheckBoxBlock>
            <CheckBoxBlockTitle>
              Итого можете внести в качестве досрочных:
            </CheckBoxBlockTitle>

            {payments?.map((payment) => {
              return (
                <CheckBox
                  key={payment.year}
                  value={payment.year}
                  name={`${payment.value}_${payment.year}`}
                  checked={payment.checked}
                  title={payment.value}
                  onChange={checkBoxHandler}
                />
              )
            })}
          </CheckBoxBlock>
        ) : null}

        <TagBarWrapper>
          <TagBarTitle>Что уменьшаем</TagBarTitle>
          <TagsRow>
            {tags.map((value) => (
              <TagWrapper key={value}>
                <Tag
                  onChange={(e) => {
                    setValue("target", e.target.value)
                  }}
                  name="target"
                  value={value}
                >
                  Платёж
                </Tag>
              </TagWrapper>
            ))}
          </TagsRow>
        </TagBarWrapper>
      </MediaMain>
      <SubmitButtonWrapper>
        <Button
          type="submit"
          title="Добавить"
          onClick={() => null}
          size="small"
          color="primary"
          disabled={
            isSubmitting ||
            !isValid ||
            !watch("taxSelected").length ||
            isValidating ||
            !calculated ||
            !watch("target")
          }
        />
      </SubmitButtonWrapper>
    </StyledForm>
  )
}

export default PopUpForm
