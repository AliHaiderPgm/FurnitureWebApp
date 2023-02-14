import { useState } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from '@mantine/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from 'Config/firebase'
import { doc, setDoc } from 'firebase/firestore';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}
export default function Login() {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const notify = (type, msg) => {
        messageApi.open({ type: type, content: msg });
    };

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        const { name,email, password } = state
        if (state.password !== state.confirmPassword) {
            return notify('error', 'Password does not match')
        }
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setDocumnet(user)
            })
            .catch((error) => {
                notify('error', 'Something went wrong!')
                setLoading(false)
            });
            const setDocumnet = async(user)=>{
               try{
                await setDoc(doc(firestore, "users", user.uid),{
                    Name : name,
                    uid: user.uid,
                    id: window.getRandomId()
                })
               }catch(err){
                notify('error','Something went wrong!')
               }finally{
                   notify('success','Account created!')
                   setLoading(false)
                   setState(initialState)
               }
            }
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
                        Get started!
                    </Title>
                    <Text color="dimmed" size="sm" align="center" mt={5}>
                        Already have an?
                        <Link to='/auth/signIn'>account</Link>
                    </Text>

                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput label="Name" placeholder="Your name" onChange={handleChange} value={state.name} name="name" required />
                        <TextInput label="Email" placeholder="abc@example.xyz" mt="md" onChange={handleChange} value={state.email} name="email" required />
                        <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={handleChange} value={state.password} name="password" />
                        <PasswordInput label="Password" placeholder="Confirm password" required mt="md" onChange={handleChange} value={state.confirmPassword} name="confirmPassword" />
                        {
                            loading ? <Button fullWidth mt="xl" className='bg-primaryColor' loading>Sign up</Button>
                                : <Button fullWidth mt="xl" className='bg-primaryColor' onClick={handleSubmit} >
                                    Sign up
                                </Button>
                        }
                    </Paper>
                </Container >
            </div>
        </>
    );
}