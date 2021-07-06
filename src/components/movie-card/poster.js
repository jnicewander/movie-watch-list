import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 275px;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

const Poster = ({ className, movie, ...rest }) => {
  // use svg as a fallback if no poster path or backdrop path is provided by API
  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  const posterPath = movie.poster_path 
    ? movie.poster_path
    : movie.backdrop_path;

  return (
    <Container className={className}>
      {posterPath 
        ? <Image loading="lazy" src={`${baseUrl}${posterPath}`} alt={`${movie.title} movie poster`} />
        : <svg
            viewBox="0 0 100 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            {...rest}
          >
            <path fill="#C4C4C4" d="M0 0h100v150H0z" />
            <path
              d="M70.313 93.5H29.687A4.687 4.687 0 0125 88.812V60.689A4.687 4.687 0 0129.688 56h40.624A4.687 4.687 0 0175 60.688v28.124a4.687 4.687 0 01-4.688 4.688zM35.937 61.469a5.469 5.469 0 100 10.937 5.469 5.469 0 000-10.937zM31.25 87.25h37.5V76.312l-8.546-8.546a1.172 1.172 0 00-1.658 0L45.313 81l-5.422-5.421a1.172 1.172 0 00-1.657 0l-6.984 6.984v4.687z"
              fill="#A6A6A6"
            />
          </svg>    
      }
    </Container>
  )
}

export default Poster
