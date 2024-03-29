import React from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import MovieList from "./components/MovieList";
import Todo from "./Todo";
let App = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Movie Catalogue</Navbar.Brand>
                </Container>
            </Navbar>
            <MovieList/>
            <Todo></Todo>
        </React.Fragment>
    );
}

export default App;
