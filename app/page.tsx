'use client';

import React, { useState } from 'react';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	const handleIframeLoad = () => {
		setIsLoading(false);
	};

	return (
		<div style={{ position: 'relative', width: '100%', height: '100vh' }}>
			{isLoading && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						fontFamily: 'system-ui, -apple-system, sans-serif',
						backgroundColor: '#f8fafc',
						zIndex: 10,
					}}
				>
					<div
						style={{
							textAlign: 'center',
							maxWidth: '600px',
						}}
					>
						<h1
							style={{
								fontSize: '2.5rem',
								fontWeight: 'bold',
								color: '#1f2937',
								marginBottom: '1rem',
							}}
						>
							🥕 Farm2Table
						</h1>
						<p
							style={{
								fontSize: '1.25rem',
								color: '#6b7280',
								marginBottom: '2rem',
							}}
						>
							Where local food meets modern connection.
						</p>
						<p
							style={{
								color: '#9ca3af',
								marginBottom: '2rem',
							}}
						>
							Loading the waitlist...
						</p>
						<div
							style={{
								display: 'inline-block',
								width: '40px',
								height: '40px',
								border: '4px solid #e5e7eb',
								borderTop: '4px solid #059669',
								borderRadius: '50%',
								animation: 'spin 1s linear infinite',
							}}
						/>
					</div>
				</div>
			)}

			<iframe
				src='https://www.fastwaitlist.com/farm2table'
				style={{
					width: '100%',
					height: '100%',
					border: 'none',
					display: isLoading ? 'none' : 'block',
				}}
				onLoad={handleIframeLoad}
				title='Farm2Table Waitlist'
			/>

			<style jsx>{`
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				html,
				body {
					margin: 0;
					padding: 0;
					height: 100%;
					overflow: hidden;
				}
			`}</style>
		</div>
	);
}
