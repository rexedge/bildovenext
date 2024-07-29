import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<Link
			href='/'
			className='shrink-0 grow-0 font-bold h-12 w-24'
		>
			<Image
				height={100}
				width={100}
				src={'/bildoveLogo1.png'}
				alt=''
				className='h-full object-contain w-full'
			/>
		</Link>
	);
}
