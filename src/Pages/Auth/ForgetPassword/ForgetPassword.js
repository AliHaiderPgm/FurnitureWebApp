import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Center,
    Box,
} from '@mantine/core';
import { auth } from 'Config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 26,
        fontWeight: 900,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
        backgroundColor: '#fd8f5e'
    },
}));

export function ForgotPassword() {
    const { classes } = useStyles();
    const [email, setEmail] = useState('')
    const [messageApi, contextHolder] = message.useMessage();

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const notify = (type, msg) => {
        messageApi.open({
            type: type,
            content: msg,
        });
    }
    const handleSubmit = ()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            notify('success', 'Reset email has been sent successfully.')
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            notify('error', 'Something went wrong!')
        });
    }
    return (
        <>
        {contextHolder}
            <div className='d-flex justify-content-center align-items-center bg-Image' style={{ height: "100vh" }}>
                <Container size={460} my={30} style={{ width: "460px", position: 'relative' }}>
                    <Title className={classes.title} align="center">
                        Forgot your password?
                    </Title>
                    <Text color="dimmed" size="sm" align="center">
                        Enter your email to get a reset link
                    </Text>

                    <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                        <TextInput label="Your email" placeholder="me@mantine.dev" onChange={handleChange} value={email} required />
                        <Group position="apart" mt="lg" className={classes.controls}>
                            <Link to="/auth/signIn" style={{ fontSize: "14px" }}>
                                <Center inline>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <Box ml={5}>Back to login page</Box>
                                </Center>
                            </Link>
                            <Button className={classes.control} onClick={handleSubmit}>Reset password</Button>
                        </Group>
                    </Paper>
                </Container>
            </div>
        </>
    );
}