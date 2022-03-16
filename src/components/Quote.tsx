import { Box, Typography, TypographyProps } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface QuoteProps extends TypographyProps {
	children: any;
}

export default function Quote({ children: quote, sx, ...props }: QuoteProps) {
	return (
		<Typography
			sx={{ lineHeight: "150%", position: "relative", ...sx }}
			{...props}
		>
			{/* <Box
				sx={{
					// position: "absolute",
					// tranfrom: "translateX(-30px)",
					fontSize: 30,
					display: "inline",
				}}
			>
				&quot;&nbsp;
			</Box> */}
			<FormatQuoteIcon sx={{ transform: "scaleX(-1)" }} />

			{quote}
			{/* <Box sx={{ fontSize: 30, display: "inline" }}>&nbsp;&quot;</Box> */}
			<FormatQuoteIcon />
		</Typography>
	);
}
