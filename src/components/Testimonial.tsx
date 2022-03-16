import { Typography, Stack, Avatar } from "@mui/material";
import Quote from "./Quote";

interface TestimonialProps {
	imgSrc?: string;
	children: string;
	reviewer: string;
}

export default function Testimonial({
	imgSrc,
	children: review,
	reviewer,
}: TestimonialProps) {
	return (
		<Stack alignItems="center" width="min(100%, 600px)" p={3} spacing={3}>
			<Avatar
				sx={{ fontSize: 50, height: 100, width: 100 }}
				src={imgSrc}
				alt={"Picture of reviewer"}
			>
				U
			</Avatar>
			{/* <Typography
				sx={{ fontStyle: "italic" }}
				color="text.secondary"
				className="quote"
				fontWeight="normal"
				variant="h6"
				textAlign={"center"}
			>
				{review}
			</Typography> */}
			<Quote
				sx={{ fontStyle: "italic" }}
				color="text.secondary"
				fontWeight="normal"
				variant="h6"
				textAlign={"center"}
			>
				{review}
			</Quote>
			<Typography variant="h5">- &nbsp;{reviewer}</Typography>
		</Stack>
	);
}
