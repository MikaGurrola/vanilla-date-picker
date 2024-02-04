import React from 'react'
import DatePicker from './index'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
describe('Functional Tests', () => {
    test('it renders without errors', () => {
        const { container } = render(<DatePicker />)
        expect(container).toBeInTheDocument()}
)
})
