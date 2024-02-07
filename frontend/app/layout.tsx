// Next Imports
import type { Metadata } from "next";

// CSS
import "../styles/globals.css";

// Components
import Navbar from "../components/navbar";

//MUI
import { ThemeProvider } from '@mui/material/styles';
import {globalTheme} from '@/styles/globalTheme';

export const metadata: Metadata = {
	title: "RateMyPetr",
	description: "Course rating website for UCI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
                <ThemeProvider theme={globalTheme}>
                    <Navbar />
                    {children}
                </ThemeProvider>
			</body>
		</html>
	);
}
