import { BUTTON } from '@/utils/const';
import React from 'react';
import ButtonItem from './buttonItem';

export default function ProfileButton() {
	return (
		<div className='h-full w-full'>
			<div className='max-w-xl '>
				{BUTTON.map((Button, index) => (
					<ButtonItem
						key={index}
						title={Button.title}
						icon={<Button.icon />}
						href={Button.href}
					/>
				))}
			</div>
		</div>
	);
}
