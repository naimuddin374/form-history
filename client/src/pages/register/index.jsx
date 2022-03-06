import React from 'react';
import { useRouter } from 'next/router';
import axios from '../../util/axios'
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import { Context } from '../../store/Context';



const Register = () => {
    const [user, setUser] = React.useContext(Context)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')


    const router = useRouter()


    if (Object.keys(user).length !== 0) {
        router.push('/')
    }

    async function submitHandler(e) {
        e.preventDefault()

        if (!email || !name || !password) {
            alert('Validation failed!')
            return;
        }


        try {
            await axios.post('auth/register', { name, email, password })
            alert('Registration Successful!')
            router.push('/login')
        } catch (err) {
            alert('Error Occurred!')
            console.log(err.toJSON())
        }
    }


    return (
        <Form onSubmit={submitHandler}>
            <h2>Register</h2>
            <FormGroup>
                <Label for="name">
                    Name
                </Label>
                <Input
                    id="name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type here.."
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label for="email">
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type here.."
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label for="password">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Type here.."
                    required
                />
            </FormGroup>


            <Button>Register</Button>
        </Form>
    )
}
export default Register;