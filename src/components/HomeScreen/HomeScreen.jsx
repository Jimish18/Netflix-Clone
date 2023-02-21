import React from 'react'
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import './HomeScreen.css'
import Row from '../Row/Row';
import requests from '../Requests';

const HomeScreen = () => {
  return (
    <>
    {/* Navbar */}
    <Nav/>

    {/* Banner */}
    <Banner/>

    <Row
      title ="NETFLIX ORIGINALS"
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow
    />

    <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
    <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
    <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
    <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
    <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
    <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
    <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </>
  )
}

export default HomeScreen;