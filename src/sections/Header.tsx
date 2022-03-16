import { Avatar, Box, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Header() {
	const imageRef = useRef<HTMLElement>(null);
	const descriptionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		gsap.from(imageRef.current, {
			duration: 1.5,
			opacity: 0,
		});
		gsap.from(descriptionRef.current, {
			scale: 0.3,
			duration: 1.5,
			ease: "bounce",
		});
	});
	return (
		<Stack
			py={5}
			spacing={3}
			boxShadow={4}
			sx={{
				backgroundColor: "white",
				backgroundImage: "url('/white bg.jpg')",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			alignItems={"center"}
			direction={{ xs: "column", md: "row" }}
			justifyContent="space-evenly"
		>
			<Box sx={{ position: "relative" }} ref={imageRef}>
				<Avatar
					sx={{
						zIndex: 1,
						position: "relative",
						backfaceVisibility: "hidden",
						width: { xs: 200, md: 300, lg: 400 },
						height: { xs: 200, md: 300, lg: 400 },
					}}
					alt="Yogesh"
					src="/assets/images/yogesh.jpg"
				></Avatar>
			</Box>
			<Stack ref={descriptionRef} spacing={1} alignItems="center">
				<Typography textAlign={"center"} variant="h4">
					Full Stack Web developer
				</Typography>
				<Typography textAlign={"center"} variant="h5">
					I code modern sites that are beautiful, fast, and secure.
				</Typography>
			</Stack>
		</Stack>
	);
}
