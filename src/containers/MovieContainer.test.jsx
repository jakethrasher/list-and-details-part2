import dotenv from 'dotenv';
dotenv.config();
import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import MovieContainer from './MovieContainer'
import { MemoryRouter} from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import moviesData from '../../fixtures/moviesData.json';

const server = setupServer(
    rest.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_KEY}&language=en-US`, (req, res, ctx) => {
        return res(ctx.json(
            moviesData
        ))
    })
)
describe('MovieDatabase Container', () => {
    beforeAll(()=> server.listen());
    afterAll(() => server.close());

    it('diplays a list of movies', async () => {
        render(
            <MemoryRouter>
                <MovieContainer/>
            </MemoryRouter>
        )
        screen.getByText('Loading...')
        const ul = await screen.findByRole('list',{ name: 'movies'});
        expect(ul).toMatchSnapshot()
    })
})