import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ButtonItem({
	title,
	icon,
	href,
}: {
	title: string;
	icon: ReactNode;
	href: string;
}) {
	return (
		<div className='bg-purple-200  py-[25px] px-[50px] flex justify-center items-center cursor-pointer rounded-2xl mb-2'>
			<Link
				href={href}
				className='flex gap-1'
			>
				<p className='text-base text-center font-normal lg:text-lg md:text-lg sm:text-sm '>
					{title}
				</p>
				{icon}
			</Link>
		</div>
	);
}
