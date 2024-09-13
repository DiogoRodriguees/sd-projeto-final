import { useEffect, useState } from "react"
import { PublicationsAPI } from "../api/publications-api"
import { HttpStatus } from "../api/default"
import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getUsers, UserAPI } from "../api/user-api"

function Publishers() {
    const [isFetched, setIsFetched] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const getUsers = async (e) => {
        const token = localStorage.getItem('token');
        const responseCourses = await UserAPI.getUsers(token);
        if (responseCourses.status === HttpStatus.OK) {
            setData(responseCourses.data.data);
            setIsFetched(true);
            console.log("buscado");
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">CAROLINA NEWS</Navbar.Brand>
                    <Button onClick={() => navigate("/createPublication")} variant="outline-success">Publicar!</Button>
                    <Button onClick={() => navigate("/login")} variant="outline-success">Logar!</Button>
                    <Button onClick={() => navigate("/login")} variant="outline-success">Publicadores!</Button>
                </Container>
            </Navbar>
            <Container className="p-5 col-7">
                {isFetched ? (
                    <Row>
                        {data.map((item) => (
                            <Card key={item.id} className="mb-4">
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.email}</Card.Text>
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

export default Publishers
