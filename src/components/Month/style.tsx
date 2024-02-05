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

    .daysOfWeek {
      display: grid; 
      grid-template-columns: repeat(7, 1fr);
      grid-gap: 4px;
      justify-items: center;
    }

    .days {
      display: grid; 
      grid-template-columns: repeat(7, 1fr);
      max-width: fit-content; 
      grid-gap: 4px;
    }
  }

`

export default styledMonth
