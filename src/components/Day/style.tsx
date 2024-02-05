import styled from 'styled-components'
import Day from './Day'

const styledDay = styled(Day)`
  --slate-50: #f8fafc;
  --slate-400: #94a3b8;
  --slate-900: #0f172a;
  --blue-400: #93c5fd;
  --blue-900: #1e3a8a;

  & button {
    width: 100%;

    color: var(--slate-400);

    &.isInCurrentMonth {
      color: var(--slate-900);
    }


    &.isWithinRange {
      color: var(--blue-900);
      background-color: var(--blue-400);
    }

    &.isStartDate, &.isEndDate {
      color: #eff6ff; 
      background-color: #1d4ed8;
    }

    &:disabled {
      background: var(--slate-50);
      color: var(--slate-400);
    }
  }
`

export default styledDay
