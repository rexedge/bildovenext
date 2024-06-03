import ServiceList from '@/components/services-page/services';
import Hero from '@/components/ui/hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Services',
	description: 'We offer amazing services',
};

export default function Services() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='Our Services'
				description=''
				image='/services.jpg'
			/>
			<ServiceList />
		</main>
	);
}
