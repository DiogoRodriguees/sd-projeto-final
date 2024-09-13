import { useEffect, useState } from "react"
import { PublicationsAPI } from "../api/publications-api"
import { HttpStatus } from "../api/default"
import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Home() {
    const [isFetched, setIsFetched] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()
        const getPublications = async (e) => {
        const token = localStorage.getItem('token');
        const responseCourses = await PublicationsAPI.getPublications(token);
        if (responseCourses.status === HttpStatus.OK) {
            setData(responseCourses.data.data);
            setIsFetched(true);
            console.log("buscado");
        }
    }

    useEffect(() => {
        getPublications()
    }, [])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">CAROLINA NEWS</Navbar.Brand>
                    <Button onClick={() => navigate("/createPublication")} variant="outline-success">Publicar!</Button>
                    <Button onClick={() => navigate("/login")} variant="outline-success">Logar!</Button>
                    <Button onClick={() => navigate("/publishers")} variant="outline-success">Publicadores!</Button>
                    <Button onClick={() => navigate("/feed")} variant="outline-success">Meu Feed!</Button>
                </Container>
            </Navbar>
            <Container className="p-5 col-7">
                {isFetched ? (
                    <Row>
                        {data.map((item) => (
                            <Card key={item.id} className="mb-4">
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                ) : (
                    <p>Carregando...</p>
                )}
            </Container>
        </>
    );
}

export default Home
