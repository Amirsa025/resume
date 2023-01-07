import { Box, IconButton } from "@mui/material";
import { GitHub, Telegram, Instagram } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const SocialMediaIcons = () => {
    return (
        <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
            <IconButton aria-label="Github">
                <a
                    href="https://github.com/Amirsa025"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub sx={{ color: "white" }} />
                </a>
            </IconButton>
            <IconButton aria-label="Instagram">
                <a
                    href="https://www.instagram.com/amirmohammad.21"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram sx={{ color: "white" }}/>
                </a>
            </IconButton>
            <IconButton aria-label="Telegram">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Telegram sx={{ color: "white" }} />
                </a>
            </IconButton>
            <IconButton aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/amirmohammad-sakizadeh/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ color: "white" }} />
                </a>
            </IconButton>
        </Box>
    );
};

export default SocialMediaIcons;
