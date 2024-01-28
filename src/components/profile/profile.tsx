import { AvatarImage, Avatar } from '@/components/ui/avatar';
import * as Icons from '@/utils/svgs';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProfileButton from './profilebutton';
import BAccordion from './accordion';
import {
	FacebookIcon,
	Globe2Icon,
	Home,
	LinkedinIcon,
	MailIcon,
	MailboxIcon,
	PhoneIcon,
} from 'lucide-react';

export default function ProfileComponent() {
	return (
		<div className=' my-2 max-w-xl mx-auto p-3 rounded-lg shadow-md flex flex-col items-center space-y-2'>
			<div className='flex flex-col gap-1 items-center w-full'>
				<Avatar className='w-32 h-32 shadow-xl border border-gray-300'>
					<AvatarImage
						alt='Foluke Oladipo'
						src='/foluke.jpg'
					/>
				</Avatar>
				<h1 className='text-2xl font-semibold'>Foluke Oladipo</h1>
				<p className='text-sm text-gray-500'>
					Licensed Financial Professional
				</p>
				<p className='text-sm text-teal-800 font-bold'>
					License #19883154
				</p>
			</div>
			<div className='grid grid-cols-4 w-full gap-2 font-bold'>
				<Button
					className='bg-teal-800 gap-2'
					asChild
				>
					<a href={`sms:+18032501030`}>
						SMS <MailIcon />
					</a>
				</Button>
				<Button
					className='bg-teal-800 gap-2'
					asChild
				>
					<a href={`tel:+18032501030`}>
						Phone <PhoneIcon />
					</a>
				</Button>
				<Button
					className='bg-teal-800 gap-2'
					asChild
				>
					<a href={`mailto:foluke71@gmail.com`}>
						Email <MailboxIcon />
					</a>
				</Button>
				<Button
					className='bg-teal-800 gap-2'
					asChild
				>
					<Link href='/'>
						Website <Globe2Icon />
					</Link>
				</Button>
			</div>
			<div className='w-full'>
				<BAccordion />
				<ProfileButton />
			</div>
			<div className='flex flex-col items-center space-y-2'>
				<h2 className='font-semibold text-xl uppercase'>{`Let's Connect`}</h2>
				<div className='flex space-x-4  my-3'>
					<Link href={'/#'}>
						<Icons.FacebookIcon className='text-teal-800' />
					</Link>
					<Link href={'/#'}>
						<LinkedinIcon className='text-teal-800' />
					</Link>
					<Link href={'/#'}>
						<Icons.InstagramIcon className='text-teal-800' />
					</Link>
				</div>
			</div>
		</div>
	);
}
