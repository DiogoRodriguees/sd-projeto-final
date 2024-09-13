import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserAPI } from '../api/user-api'
import { HttpStatus } from '../api/default'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const navigate = useNavigate()
  const intialValues = { email: '', password: '' }
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
    const responseLogin = await UserAPI.login(
      formValues.email,
      formValues.password
    )
    if (responseLogin.status === HttpStatus.OK) {
      console.log("responseLogin", responseLogin)
      const token = responseLogin.data.data.token; // Supondo que o token esteja em responseLogin.data.token
      localStorage.setItem('token', token);
      notifySuccess("Logado com sucesso!")
      navigate("/home")
    } else {
      console.log(responseLogin)
      notifyError('Falha ao executar login. ' + responseLogin.data.error)
    }
  }



  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">CAROLINA NEWS</Navbar.Brand>
          <Button onClick={() => navigate("/home")} variant="outline-success">Voltar!</Button>
        </Container>
      </Navbar>
      <div className="container p-5 col-7">
        <Form onSubmit={handleSubmit}>
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
            Entrar
          </Button>
        </Form>
        <div className="col d-flex justify-content-end">
          <p className="mt-3">
            Não tem uma conta?&nbsp;
            <Link
              className="fw-bold"
              style={{ color: '#1dbfb0' }}
              to="/register"
            >
              CADASTRE-SE AGORA!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;