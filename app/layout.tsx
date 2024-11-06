import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/app/styles/global.scss"

export const metadata: Metadata = {
	title: "Crypto App!",
	description: "A simple crypto app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
