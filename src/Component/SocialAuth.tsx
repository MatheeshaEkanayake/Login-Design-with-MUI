import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { IconButton } from '@mui/material';

type Provider = 'google' | 'apple' | 'facebook';


function getProviderConfig(provider: Provider) {
    switch (provider) {
        case 'google':
            return {
                icon: <GoogleIcon />,
                onClick: () => {
                    // handle Google auth
                },
            };
        case 'apple':
            return {
                icon: <AppleIcon />,
                onClick: () => {
                    // handle Apple auth
                },
            };
        case 'facebook':
            return {
                icon: <FacebookIcon />,
                onClick: () => {
                    // handle Facebook auth
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
