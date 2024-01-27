'use client'
import { ACCORDIONS, BUTTON } from '@/utils/const';
import React, { useState } from "react";
import AccordionItem from './accordionitem';
import ButtonItem from './buttonItem';



export default function ProfileButton() {

	return (
		<div className='bg-primary h-full'>
			<div className='max-w-[800px] lg:mx-10 md:mx-10 sm:mx-auto p-4'>
				{BUTTON.map((Button, index) => (
					<ButtonItem
						key={index}
						title={Button.title}
                        icon={Button.icon}
                        href={Button.href}			
					/>
				))}
			</div>
		</div>
	);
}
