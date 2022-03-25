import { Stack, Box, Typography, Link } from "@mui/material";

interface ProjectProps {
	name: string;
	children: any;
	imgSrc: string;
	projectLink: string;
	codeSrc?: string;
}

export default function Project({
	imgSrc,
	name,
	projectLink,
	children,
	codeSrc,
}: ProjectProps) {
	return (
		<Box
			sx={{
				// backgroundImage: `url(${imgSrc})`,
				background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url('${imgSrc}')`,

				justifyContent: "center",
				display: "flex",
			}}
			className="bg-cover-center"
		>
			<Box
				boxShadow={3}
				sx={{
					background: "white",
					overflow: "hidden",
					width: "min(450px, 100%)",
					height: "450px",
				}}
			>
				<img
					src={imgSrc}
					alt={name}
					style={{ objectFit: "contain", width: "100%", height: "50%" }}
				/>
				<Stack spacing={1} sx={{ maxHeight: "50%", overflow: "auto" }} p={1}>
					<Typography variant="h5">
						<Link href={projectLink}>{name}</Link>
					</Typography>

					{codeSrc && (
						<Typography>
							<Link href={codeSrc}>Github</Link>
						</Typography>
					)}
					<Box sx={{ overflow: "auto" }}>
						<Typography>{children}</Typography>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}
