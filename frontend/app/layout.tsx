// Next Imports
import type { Metadata } from "next";

// CSS
import "../styles/globals.css";

// Components
import Navbar from "../components/navbar";

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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
