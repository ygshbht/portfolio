import { Link, Stack, Box } from "@mui/material";

export default function Navbar() {
	return (
		<Stack
			id="navbar"
			sx={({ palette, typography }) => ({
				// background: palette.secondary.main,

				position: "sticky",
				// background: "white",
				background: "linear-gradient(to right, #E2E2E2, #C9D6FF)",

				zIndex: 100,
				top: "0",
				fontSize: typography.h6,
				"&>*": {
					mx: 1,
				},
				"*": {
					color: "black",
					textDecoration: "none",
					":hover": {
						textDecoration: "underline",
					},
				},
			})}
			flexWrap="wrap"
			p={1}
			boxShadow={2}
			direction="row"
			justifyContent="space-between"
		>
			<Link href="#">Home</Link>
			<Link href="#about">About</Link>
			<Link href="#projects">Projects</Link>
			<Link href="#contact">Contact</Link>
		</Stack>
	);
}
