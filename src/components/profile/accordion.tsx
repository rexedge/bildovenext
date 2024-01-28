import { ACCORDIONS } from '@/utils/const';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion';
import Link from 'next/link';
import Image from 'next/image';

export default function BAccordion() {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-full'
		>
			{ACCORDIONS.map((a, i) => (
				<AccordionItem
					key={i}
					value={a.title}
					className='border-0 mb-2'
				>
					<AccordionTrigger className='bg-teal-200 py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded-2xl'>
						{a.title}
					</AccordionTrigger>
					<AccordionContent className='py-[25px] px-[50px]'>
						{a.text}{' '}
						{a.link && a.link !== '' && (
							<Link
								className={
									'text-teal-900 font-bold underline'
								}
								href={a.link}
							>
								{a.linkText}
							</Link>
						)}{' '}
						{a.contText}
						{a.image && (
							<Image
								width={500}
								height={500}
								src={a.image}
								alt='emiily'
								className='aspect-video w-full object-cover rounded-2xl mt-3'
							/>
						)}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
