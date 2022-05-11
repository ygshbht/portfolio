import { Stack, Typography, Divider, Link } from "@mui/material";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";

export default function Testimonials() {
	return (
		<Stack
			sx={{
				overflow: "hidden",
				// background: "white",
				backdropFilter: "blur(15px)",
				borderRadius: {
					xs: "50% 200px 175px 50%",
					md: "170% 250px 250px 100%",
				},
			}}
			spacing={3}
			alignItems="center"
			boxShadow={10}
			p={4}
		>
			<Typography sx={{ px: 1 }} textAlign="center" variant="h4">
				Testimonials
			</Typography>
			<Divider flexItem></Divider>
			<Carousel>
				<Testimonial reviewer="Usman" imgSrc="/usman.png">
					Really skilled and understands the requirements well. Makes changes in
					timely manner and gives sound, up to date advice regarding web
					development. Highly recommended - extremely easy to work with. Thank
					you Yogesh !
				</Testimonial>
			</Carousel>
			<Typography>
				More reviews
				<Link href="https://www.upwork.com/freelancers/~01ca41cc1d47038084">
					{" "}
					here
				</Link>
			</Typography>
		</Stack>
	);
}
