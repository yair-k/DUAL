import React from 'react'
import styled from 'styled-components'
import DarkModeButton from './../DarkModeButton/DarkModeButton'
import { AiOutlineCode } from 'react-icons/ai'

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
const Credits = styled.div``

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Text = styled.p`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  place-items: center;
  gap: var(--default-grid-gap);

  & > a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }

  & > a:hover{
    color: var(--color-secondary);
  }
`

const PageFooter = () => {
  return (
    <Footer>
      <Credits>
        <Text><AiOutlineCode />Developed by <a href="https://yair.ca" tabIndex="-1">yair</a></Text>
      </Credits>
      <Options>
        <DarkModeButton />
      </Options>
    </Footer>
  )
}

export default PageFooter