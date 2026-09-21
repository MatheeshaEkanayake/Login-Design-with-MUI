import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import LoginForm from './loginForm';
import casualBrowsing from '../assets/undraw_casual-browsing_c09r.svg';

function LoginPage() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up(990));

    return (
        <Stack
            direction={isMdUp ? 'row' : 'column'}
            sx={{ width: '100%', height: '100vh' }}
        >
            <Stack sx={{ flex: isMdUp ? 2 : 1, justifyContent: 'center' }}>
                <LoginForm />
            </Stack>
            <Stack
                sx={{
                    flex: isMdUp ? 3 : 1,
                    backgroundColor: '#f2f2f2',
                    height: isMdUp ? '100vh' : 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={casualBrowsing}
                    alt="Welcome illustration"
                    style={{ maxWidth: '80%', height: 'auto' }}
                />
                <Typography
                    variant={isMdUp ? 'h5' : 'h6'}
                    sx={{
                        fontWeight: '700',
                        marginTop: '1rem',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        textAlign: 'center',
                    }}
                >
                    Make your work easier and organized with <b>Tuga's App</b>
                </Typography>
            </Stack>
        </Stack>
    );
}

export default LoginPage;
