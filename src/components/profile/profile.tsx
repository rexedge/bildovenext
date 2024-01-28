import { AvatarImage, Avatar } from '@/components/ui/avatar';
import * as Icons from '@/utils/svgs';
import { Button } from '../ui/button';
import Link from 'next/link';
import ProfileButton from './profilebutton';
import BAccordion from './accordion';

export default function ProfileComponent() {
	return (
		<div className=' mt-20 mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center space-y-4'>
			<Avatar className='w-24 h-24 shadow-xl border border-gray-300'>
				<AvatarImage
					alt='Jose Graxirena'
					src='/emily.jpg'
				/>
			</Avatar>
			<h1 className='text-2xl font-semibold'>Jose Graxirena</h1>
			<p className='text-sm text-gray-500'>
				Field Underwriter & Broker
			</p>
			<p className='text-sm text-gray-500'>License #18599905</p>
			<div className='flex space-x-4'>
				<Button
					className='bg-[#e0e0e0] text-black'
					variant='ghost'
				>
					<Link href='/#'>
						<Icons.PhoneIcon className='text-black' />
					</Link>
					SMS
				</Button>
				<Button
					className='bg-[#e0e0e0] text-black'
					variant='ghost'
				>
					<Link href='/#'>
						{' '}
						<Icons.MailboxIcon className='text-black' />
					</Link>
					Email
				</Button>
				<Button
					className='bg-[#e0e0e0] text-black'
					variant='ghost'
				>
					<Link href='/#'>
						<Icons.HomeIcon className='text-black' />
					</Link>
					Home
				</Button>
			</div>
			<div>
				{/* <Accordion /> */}
				<BAccordion />
				<ProfileButton />
			</div>
			<div className='flex flex-col items-center space-y-2'>
				<h2 className='font-semibold text-3xl'>{`Let's Connect`}</h2>
				<div className='flex space-x-4  my-3'>
					<Icons.FacebookIcon className='text-blue-600' />
					<Icons.InstagramIcon className='text-blue-600' />
					<Icons.InstagramIcon className='text-blue-600' />
				</div>
			</div>
		</div>
	);
}
