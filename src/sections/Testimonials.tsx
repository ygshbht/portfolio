import { Stack, Typography, Divider, Link } from "@mui/material";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";

export default function Testimonials() {
	return (
		<Stack
			sx={{ background: "white" }}
			spacing={3}
			alignItems="center"
			boxShadow={4}
			p={4}
		>
			<Typography textAlign="center" variant="h4">
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
