'use client'
import React from 'react'
import styled from 'styled-components'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(16, 24, 40, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
`


export default function Modal ({
  isOpen,
  onClose,
  title,
  children
}: ModalProps) {
  if (!isOpen) return null

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
