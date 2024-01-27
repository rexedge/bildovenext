import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function AccordionItem({ open, toggle, title, image, link, linkText, contText, text }: any) {
	return (
		<div className='pt-[10px]'>
			<div
				className='bg-purple-200 dark:bg-purple-800 py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded-2xl'
				onClick={toggle}
			>
				<p className='text-base text-white font-normal lg:text-lg md:text-lg sm:text-sm '>{title}</p>
				<div className='text-[30px] text-white'>
					{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</div>
			</div>
			<Collapse isOpened={open}>
				<div className='bg-primary px-[50px] py-[20px] text-[15px] font-bold'>
					{text}
					{link && link !== '' && (
						<>
							<Link href={link}>{linkText}</Link>

							{contText}
						</>
					)}
					{image && <Image width={100} height={100} src={image} alt='emiily' className='rounded-full ' />}
				</div>
			</Collapse>
		</div>
	);
}
