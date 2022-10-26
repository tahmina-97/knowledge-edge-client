import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.error('error', error);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.error('error', error);
            })
    }


    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>


            <ButtonGroup vertical className='d-flex justify-content-center mx-auto w-25'>
                <Button onClick={handleGoogleSignIn} variant="outline-success mb-2 px-5 rounded"> <FaGoogle></FaGoogle> Login via Google</Button>
                <Button variant="outline-secondary px-5 mb-2 rounded"> <FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;