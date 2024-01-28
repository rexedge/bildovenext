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
		<Link
			href={href}
			className='flex gap-1 bg-teal-200  py-[25px] px-[50px] justify-between items-center cursor-pointer rounded-2xl mb-2'
		>
			<p className=''>{title}</p>
			{icon}
		</Link>
	);
}
