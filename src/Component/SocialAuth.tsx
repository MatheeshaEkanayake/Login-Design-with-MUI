import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { IconButton } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, appleProvider } from '../Config/firebase';

type Provider = 'google' | 'apple' | 'facebook';


function getProviderConfig(provider: Provider) {
    switch (provider) {
        case 'google':
            return {
                icon: <GoogleIcon />,
                onClick: async () => {
                    try {
                        const result = await signInWithPopup(auth, googleProvider);
                        console.log('Logged in as', result.user.displayName);
                    } catch (error) {
                        console.log('Google login failed', error);
                    }
                },
            };
        case 'apple':
            return {
                icon: <AppleIcon />,
                onClick: async () => {
                    try {
                        const result = await signInWithPopup(auth, appleProvider);
                        console.log('Logged in as', result.user.displayName);
                    } catch (error) {
                        console.log('Apple login failed', error);
                    }
                },
            };
        case 'facebook':
            return {
                icon: <FacebookIcon />,
                onClick: async () => {

                },
            };
    }
}


function SocialLoginButton({provider}: {provider: Provider}) {
    const { icon, onClick } = getProviderConfig(provider);
    return (
        <IconButton
            aria-label={`login with ${provider}`}
            onClick={onClick}
            sx={{
                bgcolor: 'black',
                color: 'white',
                '&:hover': {
                    bgcolor: 'black',
                },
            }}
        >
            {icon}
        </IconButton>
    );
}

export default SocialLoginButton;
