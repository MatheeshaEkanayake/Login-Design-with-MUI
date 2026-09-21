
import {
    Box, 
    Button, 
    Divider, 
    IconButton, 
    InputAdornment, 
    Link, 
    Stack, 
    TextField, 
    Typography} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useState } from 'react';
import SocialLoginButton from '../Component/SocialAuth';

function loginForm(){

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return(
        <Stack spacing={2} sx={{alignItems: 'center'}}>
            <Box component="section" sx={{ p: 2, maxWidth: '90%' }}>
                {/* Login text */}
                <Typography variant ="h1" component="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                   Welcome Back!
                </Typography>
                <Typography variant="body1" component="p" sx={{ fontSize: '1rem', mb: 6, textAlign: 'center' }}>
                    Simplify Your Workflow and boost productivity with <b>Tuga's App.</b>Get Started for free
                </Typography>
                <Stack spacing={2} sx={{ alignItems: 'center' }}>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& fieldset': {
                            borderRadius: '2rem',
                        },
                        }}
                    />
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        sx={{
                            '& fieldset': {
                                borderRadius: '2rem',
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            },
                        }}
                        />
                    <Link href="#" color="inherit" underline="none" sx={{ fontSize: '0.9rem', alignSelf: 'flex-end', fontFamily: '-apple-system', mr: '10%'}}>
                        Forgot Password?
                    </Link>
                    <Button variant="contained" fullWidth sx={{borderRadius: '2rem', bgcolor: 'black'}}>
                    <Typography variant="body1" component="p" sx={{ fontSize: '1rem', p: 2, textAlign: 'center' }}>
                        Login
                    </Typography>
                    </Button>
                </Stack>
                <Divider sx={{ my: 3, fontSize: '1rem'  }}>
                or continue with
                </Divider>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                    <SocialLoginButton provider="google" />
                    <SocialLoginButton provider="apple" />
                    <SocialLoginButton provider="facebook" />
                </Stack>

            </Box>
        </Stack>
    );
}

export default loginForm