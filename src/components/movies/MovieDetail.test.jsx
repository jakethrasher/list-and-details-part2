import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetail from './MovieDetail';
import { MemoryRouter, Route } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(`https://api.themoviedb.org/3/movie/567189`, (req, res, ctx) => {
    const query = req.url.searchParams
      const api_key = process.env.MOVIE_DATABASE_KEY
      const language = query.get("language")
      return res(ctx.json({
        "adult": false,
        "backdrop_path": "/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
        "belongs_to_collection": null,
        "budget": 0,
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 10752,
                "name": "War"
            }
        ],
        "homepage": "https://www.amazon.com/dp/B08VFD1Y3B",
        "id": 567189,
        "imdb_id": "tt0499097",
        "original_language": "en",
        "original_title": "Tom Clancy's Without Remorse",
        "overview": "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
        "popularity": 2425.841,
        "poster_path": "/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
        "production_companies": [
            {
                "id": 4,
                "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
                "name": "Paramount",
                "origin_country": "US"
            },
            {
                "id": 433,
                "logo_path": null,
                "name": "Weed Road Pictures",
                "origin_country": "US"
            },
            {
                "id": 82819,
                "logo_path": "/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png",
                "name": "Skydance Media",
                "origin_country": "US"
            },
            {
                "id": 51593,
                "logo_path": null,
                "name": "Midnight Radio",
                "origin_country": "US"
            },
            {
                "id": 102334,
                "logo_path": "/espa8KYmHedu5p7GRrP9FFICLUp.png",
                "name": "Outlier Society Productions",
                "origin_country": "US"
            },
            {
                "id": 114732,
                "logo_path": "/tNCbisMxO5mX2X2bOQxHHQZVYnT.png",
                "name": "New Republic Pictures",
                "origin_country": "US"
            },
            {
                "id": 20580,
                "logo_path": "/tkFE81jJIqiFYPP8Tho57MXRQEx.png",
                "name": "Amazon Studios",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2021-04-29",
        "revenue": 0,
        "runtime": 109,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "",
        "title": "Tom Clancy's Without Remorse",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 915
    }))
    })
)
describe('MovieDetail', () => {
    it('displays movie detail', async () => {
        render(
        <MemoryRouter>
          <MovieDetail
            match={{
                params:{id:'567189'
            }}}
            /></MemoryRouter>
        )
        const p= await screen.findByTestId('title')
        expect(p).toMatchSnapshot()
    })
})
    