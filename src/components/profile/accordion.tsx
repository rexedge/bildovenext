'use client'
import { ACCORDIONS } from '@/utils/const';
import React, { useState } from "react";
import AccordionItem from './accordionitem';



export default function Accordion() {
    const [open, setOpen] = useState(null); 

	const toggle = (index:any) => {
		setOpen(open === index ? null : index); 
	};

	return (
		<div className='bg-primary h-full'>
			<div className='max-w-[800px] lg:mx-10 md:mx-10 sm:mx-auto p-4'>
				{ACCORDIONS.map((Accordion, index) => (
					<AccordionItem
						key={index}
						open={index === open}
						title={Accordion.title}
						text={Accordion.text}
						link= {Accordion.link}
						linkText={Accordion.linkText}
						contText={Accordion.contText}
						image={Accordion.image}
						toggle={() => toggle(index)}
					/>
				))}
			</div>
		</div>
	);
}
