import styled from 'styled-components'
import Day from './Day'

const styledDay = styled(Day)`
  button {
    aspect-ratio: 16 / 9; // tailwind/css 1 / 1 doesn't render a square T_T 
  }
`

export default styledDay
