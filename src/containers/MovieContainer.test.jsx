import React from 'react'
import { screen, render } from '@testing-library/react'
import MovieContainer from './MovieContainer'

describe('MovieDatabase Container', () => {
    it('diplays a list of movies', () => {
        render(<MovieContainer />)

        screen.getByText('Loading...')

        const ul = screen.getByRole('list',{ name: 'movies'});

        
    })
})