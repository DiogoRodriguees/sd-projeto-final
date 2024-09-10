import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserAPI } from '../api/user-api'
import { HttpStatus } from '../api/default'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {
  const navigate = useNavigate()
  const intialValues = { username: '', email: '', password: '' }
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
  
  const notifySuccess = (texto) =>{
    console.log("CHAMADO")
    toast.success(texto, toastData)}
  
    const notifyError = (texto) =>
      toast.error(texto, toastData)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const responseLogin = await UserAPI.register(formValues)
    if (responseLogin.status === HttpStatus.OK) {
    console.log("CADASTRADO COM SUCESSO")
    notifySuccess("Registrado com sucesso!");
    navigate("/login")
    } else {
      console.log(responseLogin)
      notifyError("Falha ao registrar!");
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
            <Form.Label>Username</Form.Label>
            <input
              type="text"
              name="username"
              placeholder="Digite seu Username"
              className="form-control"
              value={formValues.username}
              onChange={handleChange}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className="form-control"
              value={formValues.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
        <div className="col d-flex justify-content-end">
            <p className="mt-3">
              Já tem conta? 
              <Link className="fw-bold" style={{ color: '#1dbfb0' }} to="/login">
                ENTRE AGORA!
              </Link>
            </p>
          </div>
      </div>
    </>
  );
}

export default RegisterPage;