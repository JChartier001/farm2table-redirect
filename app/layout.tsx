import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Farm2Table - Local Food Connection',
	description:
		'Where local food meets modern connection. Join the movement reshaping local food.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<style>{`
					html, body, #__next {
						margin: 0;
						padding: 0;
						height: 100%;
						overflow: hidden;
					}
				`}</style>
			</head>
			<body style={{ margin: 0, padding: 0, height: '100vh' }}>{children}</body>
		</html>
	);
}
