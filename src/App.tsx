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

function App() {
	return (
		<ThemeProvider>
			<Box
				sx={{
					mx: "auto",
					width: "min(1920px, 100%)",
				}}
			>
				<Background />
				<Stack
					spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
					sx={{
						position: "relative",
						zIndex: 1,
						mx: "auto",

						width: "min(1300px, 100%)",
						"&>*:not(#navbar)": {
							boxShadow: 10,
						},
					}}
				>
					<Navbar />
					<Header />
					<About />
					<Projects />
					<Testimonials />

					<Contact />
					{/* <Box></Box> */}
					<Footer />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

export default App;
