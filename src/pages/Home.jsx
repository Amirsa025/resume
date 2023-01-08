import { useEffect, useRef, useCallback, useState } from "react";

import { Helmet } from "react-helmet-async";
import {Box, Button, Typography} from "@mui/material";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import '../App.css'
import { links } from "../constants/particles";
import bg02 from "../assets/bg02.jpeg";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Home = ({ helmetTitle }) => {
    const [index, setIndex] = useState(0);

    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        " توسعه دهنده فرانت اند هستم",
        " من عاشق دنیای فرانت اند هستم ",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["Amirmohammad Sakizadeh"],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false,
        });

        const stringsTransition = setInterval(() => {
            setIndex((index) => index + 1);
        }, 3000);

        return () => {
            typedName.destroy();
            clearInterval(stringsTransition);
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg02})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
            <Box component="div" sx={{ display: "flex" }}>
                <Typography variant="h3" color="#F93C92">
                    {"{{"}
                </Typography>
                <Typography
                    ref={nameEl}
                    variant="h3"
                    color="tomato"
                ></Typography>

                <Typography variant="h3" color="#F93C92">
                    {"}}"}
                </Typography>
            </Box>

            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography
                        variant="h4"
                        color="whitesmoke"
                        sx={{
                            mt: 4,
                            textDecoration: "underline",
                            textDecorationColor: "#F93C92",
                        }}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>

                <Typography
                    variant="h4"
                    color="whitesmoke"
                    sx={{ mt: 4, mr: 1 }}
                >
                    من یک
                </Typography>

            </Box>
            <Box   sx={{ mt: 4 }}>
                <SocialMediaIcons />
                <Button variant="contained" href="https://drive.google.com/file/d/11NpFJ62HhDFx6QBWmCIob6t26TvDhG4o/view?usp=share_link" className={"َApp"}>
                    دانلود رزومه
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
