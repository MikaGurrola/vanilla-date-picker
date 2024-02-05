import styled from 'styled-components'
import Day from './Day'

const styledDay = styled(Day)`
  & button {
    width: 100%;
    /* background: blue; */
    /* aspect-ratio: 16 / 9; // tailwind/css 1 / 1 doesn't render a square T_T  */
  }
`

export default styledDay
