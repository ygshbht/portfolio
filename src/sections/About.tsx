import { Box, SxProps, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import gsap from "gsap";
import { useRef } from "react";

let skills = [
	"three.js",
	"Tailwind CSS",
	"React",
	"Node.js",
	"Nest.js",
	"NextJS",
	"D3.js",
	"HTML5 Canvas",
	"JavaScript",
	"TypeScript",
	"Express",
	"GraphQL",
	"Bootstrap",
];

export default function About() {
	const aboutRef = useRef<HTMLElement>(null);
	useEffect(() => {
		// gsap.from(aboutRef.current, { height: 0, padding: 0, duration: 3.2 });
		gsap.from(aboutRef.current, { y: "-100%", duration: 1.2 });
	});
	return (
		<Box
			id="about"
			// boxShadow={4}
			sx={{
				// background: "white",
				zIndex: 2,
				position: "relative",
				// overflow: "hidden",
			}}
		>
			<AboutSection
				ref={aboutRef}
				sx={{ overflow: "hidden", position: "absolute" }}
			/>
			<AboutSection sx={{ visibility: "hidden" }} />
		</Box>
	);
}

interface AboutSectionProps {
	sx?: SxProps;
}

const AboutSection = React.forwardRef((props: AboutSectionProps, ref: any) => (
	<Stack
		ref={ref}
		boxShadow={10}
		sx={{
			// background: "white",
			backdropFilter: "blur(15px)",
			textAlign: "center",
			maxWidth: "100%",
			borderRadius: {
				md: "250px 50px 250px 50px",
				xs: "150px 30px 150px 30px",
			},
			overflow: "hidden",
			// background: "linear-gradient(to left, #ff5e6211, #ff9966)",
			...props.sx,
		}}
		py={5}
		px={{ xs: 5, md: 10 }}
		spacing={3}
	>
		<Typography variant="h4">Hi, I'm Yogesh. Nice to meet you</Typography>
		<Typography>
			I develop websites and have expertise in the MERN stack (Mongo, Express,
			React, and Node). My strength lies in my strong knowledge of JavaScript
			and TypeScript. Apart from these technologies, I also have experience
			working with popular frameworks and libraries such as NestJS, Material UI,
			Bootstrap. NextJS.
		</Typography>

		<Box>
			<Typography variant="h5">Skills:</Typography>

			<Stack
				sx={{
					maxHeight: "250px",
					overflow: "auto",
					"&>*": {
						mx: { xs: 0.5, lg: 1 },
						my: 1,
					},
				}}
				flexWrap="wrap"
				direction="row"
				justifyContent="center"
			>
				{skills.map((skill) => {
					return <Chip label={skill} variant="outlined" key={skill}></Chip>;
				})}
			</Stack>
		</Box>
		<Typography>
			Want to work with other libraries? As I am very comfortable with these
			technologies and have a strong base, it is not hard for me to get going
			with other technoliges that are new to me.
		</Typography>
	</Stack>
));
