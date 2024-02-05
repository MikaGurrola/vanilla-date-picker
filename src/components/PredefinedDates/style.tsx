import styled from 'styled-components'
import PredefinedDates from './PredefinedDates'

const styledPredefinedDates = styled(PredefinedDates)`
  & .predefined-dates ul {
    max-width: 600px;
    margin: 0 auto;
    display: flex;

    li {
      margin-right: 6px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

`

export default styledPredefinedDates
