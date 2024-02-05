import styled from 'styled-components'
import DatePicker from './DatePicker'

const styledDatePicker = styled(DatePicker)`

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

export default styledDatePicker
