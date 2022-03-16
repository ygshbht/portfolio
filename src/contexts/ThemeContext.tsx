import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
	responsiveFontSizes,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
		custom: any;
	}
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
		custom?: any;
	}
	// interface Palette {
	// 	neutral: Palette["primary"];
	// }
	// interface PaletteOptions {
	// 	neutral: PaletteOptions["primary"];
	// }
}

export let theme = createTheme({
	palette: {
		primary: {
			main: "#332FD0",
		},
		secondary: {
			main: "#FDF6EC",
		},
	},
});

const responsiveFontOptions = { factor: 2.8 };
theme = responsiveFontSizes(theme, responsiveFontOptions);

export default function ThemeProvider({ children }: any) {
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
