import styled from 'styled-components'
import Week from './Week'

const styledWeek = styled(Week)`
  display: grid; 
  grid-template-columns: repeat(7, 1fr);
  max-width: fit-content; 
  grid-gap: 4px;

`

export default styledWeek
