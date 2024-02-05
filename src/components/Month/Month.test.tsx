import React from 'react'
import Month from './index'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
describe('Functional Tests', () => {
    test('it renders without errors', () => {
        const { container } = render(<Month
            activeMonth={1} 
            activeYear={2024} 
        />)
        expect(container).toBeInTheDocument()}
)
})
