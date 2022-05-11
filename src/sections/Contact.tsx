import { Link, Stack, IconButton, Divider, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Contact() {
	return (
		<Stack
			boxShadow={10}
			className="bg-cover-center"
			spacing={3}
			id="contact"
			p={5}
			// sx={{ backgroundImage: "url('/white traingles.jpg')", width: "100%" }}
			sx={{
				// backgroundImage: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url('/white triangles.jpg')`,
				backdropFilter: "blur(15px)",
				width: "100%",
				borderRadius: "650px 650px 50px 50px",
				overflow: "hidden",
			}}
			alignItems="center"
		>
			<Typography sx={{ textAlign: "center" }} variant="h4">
				Find me on
			</Typography>
			<Divider flexItem></Divider>
			<Stack
				flexWrap="wrap"
				direction="row"
				sx={{ "&>*": { mx: { xs: 2, sm: 3, md: 4, lg: 5 }, my: 1 } }}
				justifyContent="center"
			>
				<IconButtonLink href="https://github.com/ygshbht">
					<GitHubIcon />
				</IconButtonLink>
				<IconButtonLink href="https://www.linkedin.com/in/yogesh-bhatt-98b5a91a3/">
					<LinkedInIcon />
				</IconButtonLink>
				<IconButtonLink href="https://twitter.com/ygshbht">
					<TwitterIcon />
				</IconButtonLink>
				<IconButtonLink href="mailto: ygshbht@gmail.com">
					<EmailIcon />
				</IconButtonLink>
				<IconButtonLink href="https://t.me/yogeshbhatt1">
					<TelegramIcon />
				</IconButtonLink>
			</Stack>
			<Stack
				// boxShadow={2}
				p={{ xs: 1, sm: 2, md: 3, lg: 4 }}
				// sx={{ background: "#eeeeee80" }}
			>
				<Typography sx={{ textAlign: "center" }}>
					Interested in working together? We can talk on&nbsp;
					<Link href="https://t.me/yogeshbhatt1">Telegram</Link> or start a
					contract on&nbsp;
					<Link href="https://www.upwork.com/freelancers/~01ca41cc1d47038084?viewMode=1">
						Upwork
					</Link>
				</Typography>
			</Stack>
		</Stack>
	);
}

interface IconButtonLinkProps {
	children: any;
	href?: string;
}

function IconButtonLink({ children, href }: IconButtonLinkProps) {
	// const [fontSize, setFontSize] = useState(59);
	// useEffect(() => {
	// 	setFontSize(60);
	// }, []);
	return (
		<Link href={href}>
			<IconButton
				sx={{ "*": { fontSize: { xs: 30, sm: 40, md: 50, lg: 60 } } }}
				size="large"
			>
				{children}
			</IconButton>
		</Link>
	);
}
