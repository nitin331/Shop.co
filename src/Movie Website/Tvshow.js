import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Card.css';




const Home=()=>{
    const[movie,setMovie]=useState([])
    const[query,setQuery]=useState('')



    const searchMovies = async(e)=>{
      e.preventDefault()
      console.log("search");
      try {
        const url=`https://api.themoviedb.org/3/search/tv?api_key=3de0ee2b89440fd706948ae547a9e1eb&query=${query}`
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data.results)
        
      } catch (error) {
        console.log("error");
      }
    }


    const handleChange=(e)=>{
      setQuery(e.target.value)
    }

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=3de0ee2b89440fd706948ae547a9e1eb&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=>setMovie(data.results))
    },[])


    return(
        <div className="backg">
            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="#action1"><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to={'/tvshow'}>Tvshow</Link></Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchMovies}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={handleChange}
            />
            <Button variant="outline-success" type={'submit'}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Carousel>
        {movie && movie.map((item)=>{
            return(
                <header className="Homeheader" style={{height:'850px'}}>
                    <div className="headerdiv">
                        <p className="legend">
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt=""></img>
                            <p className="legend">
                                <h1>{item.original_title}</h1>
                                <p>{item.overview}</p>
                                <p>{item.vote_average}<i class="fa-solid fa-star fa-beat" style={{color:"yellow"}}></i></p>
                            </p>
                        </p>
                    </div>
                </header>
            )
        })}
    </Carousel>


    <div className="container" >
      {movie && movie.map((item)=>{
          return(
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
      <Card.Body>
        <Card.Title><h1>{item.original_title}</h1></Card.Title>
        <Card.Text>
        <p>{item.overview}</p>
        <p>{item.vote_average}<i class="fa-solid fa-star fa-beat" style={{color:"yellow"}}></i></p>
        </Card.Text>
        <Button variant="primary">WATCH</Button>
      </Card.Body>
    </Card>
          )
        })
      }
    </div>





   

        </div>
    )
}
export default Home 