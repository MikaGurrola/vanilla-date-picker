import React from 'react'
import Day from './index'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
describe('Functional Tests', () => {
    test('it renders without errors', () => {
        const { container } = render(<Day />)
        expect(container).toBeInTheDocument()}
)
})
