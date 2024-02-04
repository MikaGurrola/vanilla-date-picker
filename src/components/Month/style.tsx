import styled from 'styled-components'
import Month from './Month'

const styledMonth = styled(Month)`
  & {
    width: fit-content; 
    margin: 0 auto;
    display: grid;
    grid-gap: 4px; 

    .navbar {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

`

export default styledMonth
