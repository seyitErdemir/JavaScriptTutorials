import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=2d4ed3880b7cfacbc127304f001b627c`
    )
      .then(response => response.json())
      .then(data => {
        setMovie(data.results)
        console.log(data)
      })
  }, [])

  console.log(movie)
  return (
    <div>
      <div className='container    mx-auto  '>
        <div className='  baslik  grid-rows-1  text-center'>
          Film Laboratuvarı
        </div>

        <div className='searchInput'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Arama...'
          ></input>
        </div>

        <div className=' grid grid-cols-4  gap-3       px-4   p-8    mt-6 '>
          {movie
            .filter(item =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((film, i) => (
              <div key={i} className=' border-x-rose-300    p-2 '>
                <div className=' text-center card-header'>
                  <h1>{film.title}</h1>
                </div>
                <div className='card-body'>
                  <p className='yazi'>{film.overview}</p>
                  <img
                    alt='movie'
                    src={'https://image.tmdb.org/t/p/w300' + film.poster_path}
                  ></img>
                </div>
                <div
                  className={
                    film.vote_average > 6 ? 'footer green' : 'footer yellow'
                  }
                >
                  {film.vote_average}
                </div>
                {/* <div className='footer'>{film.release_date}</div> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
