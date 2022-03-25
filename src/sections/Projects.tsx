import { Link, Stack, Divider, Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import Project from "../components/Project";

export default function Projects() {
	return (
		<Stack
			id="projects"
			sx={{ backgroundImage: "url('/white bg 2.jpg')", width: "100%" }}
			spacing={3}
			className="bg-cover-center"
			boxShadow={4}
			p={2}
		>
			<Typography variant="h4" textAlign="center">
				Projects
			</Typography>
			<Divider></Divider>
			<Carousel>
				<Project
					name="Canvas Illustrations"
					imgSrc="/assets/images/canvas.jpg"
					projectLink="https://canvas.projects.yogeshbhatt.com"
					codeSrc="https://github.com/ygshbht/canvas-illustrations"
				>
					Some really beautiful and interactive arts, written in TypeScript. I
					urge you to visit the site and see the work yourself. Physics
					simulations, image manipulation, gravity, there's quite a bit to
					brighten your mood.
				</Project>
				<Project
					name="Carousel"
					imgSrc="/assets/images/carousel.jpg"
					projectLink="https://carousel.projects.yogeshbhatt.com"
					codeSrc="https://github.com/ygshbht/carousel-implementation"
				>
					Carousel on your PC. It's one of the first projects I did. Made for
					developers who wish to add image carousels on their site, it is
					published on NPM and also availalbe on Github. I urge you to visit the
					demo page and test different settings (especially the type/
					perspective). Also, limited to the site, you can swipe up on the
					images to remove them or click on the 'Add' button to add more.
				</Project>
				<Project
					name="Meowchat"
					imgSrc="/assets/images/chat.jpg"
					projectLink="https://meowchat.club"
				>
					MeowChat lets you chat with others. It is very simple to use and also
					lets you make video calls. It incorporates Google Sign in, so you can
					create an account and get started with just a click.
				</Project>
				<Project
					name="Flappy Plane"
					imgSrc="/assets/images/flappy-plane.jpg"
					projectLink="https://flappy-plane.projects.yogeshbhatt.com"
					codeSrc="https://github.com/ygshbht/threejs-plane-game"
				>
					3D game right in your browser! Gameplay is like Flappy bird - avoid
					obstacles and collect points. It is made with ThreeJS. Though I made
					this app following a tutorial, I have modified several parts and
					replaced JavaScript with TypeScript to make the code more readable and
					scalable.
				</Project>
			</Carousel>
			<Typography
				alignSelf="center"
				sx={{ background: "white" }}
				textAlign="center"
			>
				More work including projects done for clients can be seen&nbsp;
				<Link href="https://www.upwork.com/freelancers/~01ca41cc1d47038084">
					here
				</Link>
			</Typography>
		</Stack>
	);
}
