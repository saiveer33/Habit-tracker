import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/* =========================
   💡 Create React Root
   ========================= */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* =========================
   🎨 Simple Animated Loader
   ========================= */
const Loader = () => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
			width: '100%',
			background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
			color: '#fff',
			fontSize: '1.4rem',
			fontWeight: '600',
			animation: 'fadeIn 1s ease-in-out'
		}}
	>
		✨ Loading App...
	</div>
);

/* =========================
   ⚛️ Render Application
   ========================= */
root.render(
	<React.StrictMode>
		<BrowserRouter
			future={{
				v7_startTransition: true, // smooth route transitions
				v7_relativeSplatPath: true // relative route path updates
			}}
		>
			{/* Suspense enables lazy loading + fallback animation */}
			<Suspense fallback={<Loader />}>
				{/* Animated wrapper for fade-in effect on mount */}
				<div className="app-wrapper fade-in">
					<App />
				</div>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);

/* =========================
   🔋 Enable PWA Support
   ========================= */
// Registers the service worker to allow offline access and faster load.
serviceWorkerRegistration.register();
