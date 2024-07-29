import NavBar from '@/components/ui/nav-bar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/ui/footer';
import { COMPANY_PROFILE } from '@/utils/const';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: `%s | ${COMPANY_PROFILE.name}`,
		default: COMPANY_PROFILE.name,
	},
	keywords: ['licensed financial professional', 'life insurance', 'IUL'],
	referrer: 'origin-when-cross-origin',
	description: COMPANY_PROFILE.description,
	applicationName: 'Bildove Financial Services',
	metadataBase: new URL('https://www.bildovefinancialservices.com/'),
	alternates: {
		canonical: `https://www.bildovefinancialservices.com/`,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
