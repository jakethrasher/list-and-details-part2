import React from 'react'
import { screen, render } from '@testing-library/react'
import MovieContainer from './MovieContainer'
import { MemoryRouter} from 'react-router-dom';

describe('MovieDatabase Container', () => {
    it('diplays a list of movies', () => {
        render(
            <MemoryRouter>
                <MovieContainer/>
            </MemoryRouter>
        )

        screen.getByText('Loading...')

        const ul = screen.findByRole('list',{ name: 'movies'});
        expect(ul).toMatchSnapshot()

    })
})