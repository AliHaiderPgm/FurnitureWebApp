import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message, notification } from 'antd';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from 'Context/AuthContext'

const initialState = {
  email: "",
  password: ""
}
export default function Login() {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate()
  const { dispatch } = useAuth()

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const notify = (type, msg) => {
    messageApi.open({ type: type, content: msg });
  };

  const handleSubmit = () => {
    const { email, password } = state
    if (email.length === 0 || password.length === 0) {
      notify('error', 'Please the input feild!')
    }
    setLoading(true)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: { user } })
        navigate('/')
        notification.success({
          message: 'Welcome back!',
          placement: 'top',
          style: {
            width: '240px',
            height: '65px'
          }
        });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        let msg
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          msg = 'User not found!'
        }
        else if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          msg = "Check your network!"
        }
        else {
          msg = "Something went wrong!"
        }
        notify('error', msg)
        setLoading(false)
        console.log(error)
      });
  }

  return (
    <>
      {contextHolder}
      <div className='d-flex justify-content-center align-items-center bg-Image' style={{ height: "100vh" }}>
        <Container size={420} my={40} style={{ width: '420px', position: 'relative' }}>
          <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
          >
            Welcome back!
          </Title>
          <Text className='text-muted' size="sm" align="center" mt={5}>
            Do not have an account yet?
            <Link to='/auth/signUp'>Create one</Link>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required name='email' value={state.email} onChange={handleChange} />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" name='password' value={state.password} onChange={handleChange} />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Link to="/auth/forgotPassword">Forget Password</Link>
            </Group>
            {
              loading ? <Button fullWidth mt="xl" className='bg-primaryColor' loading>Log in</Button>
                : <Button fullWidth mt="xl" className='bg-primaryColor' onClick={handleSubmit} >
                  Log in
                </Button>
            }
          </Paper>
        </Container >
      </div>
    </>
  );
}