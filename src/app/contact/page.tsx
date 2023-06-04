import ContactUs from '@/components/home-page/contact-us';
import Hero from '@/components/ui/hero';
import MapView from '@/components/ui/map-view';
import { CONTACT_HERO, MAP_LOCATION } from '@/utils/const';
import React from 'react';

export default function Contacts() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				image={CONTACT_HERO.image}
				title={CONTACT_HERO.title}
				description={CONTACT_HERO.description}
			/>
			<ContactUs />
			<MapView location={MAP_LOCATION} />
		</main>
	);
}
