import React from "react";
import Navbar from "./Components/Navbar";
import {Container} from "react-bootstrap";
import ListImages from "./Views/ListImages";

const App = () => {
    return (
        <Container fluid>
            <Navbar/>
            <ListImages />
        </Container>
    );
};

export default App;