'use client'
import React from 'react'
import styled from 'styled-components'

interface RadioButtonProps {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: (value: string) => void
}

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  display: none;
`

const StyledRadioButton = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #0000008f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  background: ${({ checked }) => (checked ? '#FFFFFF' : 'transparent')};
  border: ${({ checked }) =>
    checked ? '2px solid #014DAF' : '1px solid #0000008F'};

  &:after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #014daf;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`

const Label = styled.label`
  cursor: pointer;
  font-size: 16px;
`

export default function RadioButton ({
  label,
  name,
  value,
  checked,
  onChange
}: RadioButtonProps) {
  return (
    <RadioButtonContainer>
      <HiddenRadioButton
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <StyledRadioButton checked={checked} onClick={() => onChange(value)} />
      <Label onClick={() => onChange(value)}>{label}</Label>
    </RadioButtonContainer>
  )
}
