import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserAPI } from '../api/user-api'
import { HttpStatus } from '../api/default'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PublicationsAPI } from '../api/publications-api';

function CreatePublicationPage() {
    const navigate = useNavigate()
    const intialValues = { title: '', content: '' }
    const [formValues, setFormValues] = useState(intialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const toastData = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    }

    const notifySuccess = (texto) => {
        toast.success(texto, toastData)
    }

    const notifyError = (texto) =>
        toast.error(texto, toastData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        const responseLogin = await PublicationsAPI.register(formValues, token)
        if (responseLogin.status === HttpStatus.OK) {
            console.log("CADASTRADO COM SUCESSO")
            notifySuccess("Publicação postada com sucesso!");
        } else {
            console.log(responseLogin)
            notifyError("Falha ao postar!");
        }
    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">CAROLINA NEWS</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container p-5 col-7">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Coloque o Título da Publicação"
                            className="form-control"
                            value={formValues.title}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Conteúdo</Form.Label>
                        <textarea
                            type="textarea"
                            rows={3}
                            name="content"
                            placeholder="Digite o conteúdo da publicação"
                            className="form-control"
                            value={formValues.content}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Publicar
                    </Button>
                </Form>
                <div className="col d-flex justify-content-end">
                    <p className="mt-3">
                        <Link
                            className="fw-bold"
                            style={{ color: '#1dbfb0' }}
                            to="/home"
                        >
                            &#8592; Voltar
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default CreatePublicationPage;