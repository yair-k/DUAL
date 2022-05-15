import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-main);
  height: 100px;

  & > svg {
    height: 100%;
    width: auto;
  }

  .logo-text {
    fill: var(--color-text-main);
    transition: fill ease 0.2s;
  }
  .logo-arrow > path:nth-child(1) {
    fill: var(--color-primary);
  }
  .logo-arrow > path:nth-child(2) {
    fill: var(--color-secondary);
  }
  .logo-arrow > path:nth-child(3) {
    fill: var(--color-tertiary);
  }
  .logo-arrow > path:nth-child(4) {
    fill: var(--color-quaternary);
  }
`

const PageHeader = () => {
  return <Header>
   <h2>DUAL</h2> 
  </Header>
}

export default PageHeader