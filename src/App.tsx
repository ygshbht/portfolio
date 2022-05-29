import { Box, Stack } from "@mui/material";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ThemeProvider from "./contexts/ThemeContext";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Background from "./components/Background";
import { useEffect } from "react";
import gsap from "gsap";

const colors = ["red", "green", "blue", "brown", "pink", "orange"];

function getRandColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(sections) => {
				sections.forEach((section) => {
					if (section.isIntersecting) {
						observer.unobserve(section.target);
						gsap.to(section.target, { left: 0, right: 0, duration: 1 });
						gsap.to(section.target, { visibility: "visible", duration: 0 });

						// console.log(section.target);
					}
				});
			},
			{ threshold: 0.05 }
		);
		const sections = document.querySelectorAll(".animate-sideways");
		sections.forEach((section) => {
			observer.observe(section);
		});
	}, []);
	return (
		<ThemeProvider>
			<Box
				sx={{
					mx: "auto",
					width: "min(1920px, 97%)",
					position: "relative",
				}}
			>
				<Background />
				<Navbar />
				<Stack
					px={1}
					spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
					sx={{
						pt: { xs: 4, sm: 6, md: 8, lg: 10 },
						position: "relative",
						zIndex: 1,
						overflow: "hidden",
						mx: "auto",

						width: "min(1350px, 100%)",
						"&>*:not(#navbar)": {
							// boxShadow: 10,
						},
						".animate-sideways": {
							visibility: "hidden",
							position: "relative",
						},
						".animate-sideways:nth-of-type(2n-1)": {
							left: "-75%",
						},
						".animate-sideways:nth-of-type(2n)": {
							left: "75%",
						},
					}}
					pb={5}
				>
					<Header />
					<About />
					<Stack
						spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
						sx={{
							boxShadow: "none !important",
							"&>*:not(#navbar)": {},
							maxWidth: "100%",
						}}
					>
						<Box className="animate-sideways">
							<Projects />
						</Box>
						<Box className="animate-sideways">
							<Testimonials />
						</Box>
						<Box className="animate-sideways">
							<Contact />
						</Box>
					</Stack>
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

export default App;
