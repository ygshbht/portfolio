import { Link, Stack, Box } from "@mui/material";

export default function Navbar() {
	return (
		<Stack
			id="navbar"
			boxShadow={6}
			sx={({ palette, typography }) => ({
				position: "sticky",
				backdropFilter: "blur(30px)",
				borderRadius: "0 0 20px 20px",
				// background: "white",
				// background: "linear-gradient(to right, #E2E2E2, #C9D6FF)",
				left: "50%",
				transfrom: "translateX(-50%)",
				zIndex: 100,
				top: "0",
				fontSize: typography.h6,
				"&>*": {
					mx: 1,
				},
				"*": {
					color: "black",
					textDecoration: "none !important",
					":hover": {
						textDecoration: "underline !important",
					},
				},
			})}
			flexWrap="wrap"
			p={1}
			// boxShadow={2}
			direction="row"
			justifyContent={{ xs: "space-evenly", sm: "space-between" }}
		>
			<Link href="#">Home</Link>
			<Link href="#about">About</Link>
			<Link href="#projects">Projects</Link>
			<Link href="#contact">Contact</Link>
		</Stack>
	);
}
