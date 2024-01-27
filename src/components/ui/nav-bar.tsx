'use client';
import { MenuIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { COMPANY_PROFILE } from '@/utils/const';
import { Button } from './button';

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if (isMenuOpen === false) {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setMenuOpen(false);
			}
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<Fragment>
			<div className='w-screen bg-purple-200 dark:bg-purple-800 h-fit flex justify-between items-center py-2 px-10'>
				<Link
					href='/'
					className='shrink-0 font-bold h-12 w-12'
				>
					<Image
						height={50}
						width={50}
						src={'/ssf.png'}
						alt=''
						className='dark:invert h-full object-contain w-full'
					/>
				</Link>
				<div className='lg:flex justify-center w-full hidden'>
					<Link
						className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all duration-500'
						href={'/about'}
					>
						ABOUT
					</Link>
					<Link
						className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all duration-500'
						href={'/products'}
					>
						PRODUCTS
					</Link>
					<Link
						className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all duration-500'
						href={'/services'}
					>
						SERVICES
					</Link>
					<Link
						className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all duration-500'
						href={'/contact'}
					>
						CONTACT
					</Link>
				</div>
				<button
					className='shrink-0 py-2 px-4 dark:bg-purple-900 bg-purple-200 hover:bg-purple-400 dark:hover:bg-purple-700 rounded-lg cursor-pointer lg:hidden relative'
					onClick={toggleMenu}
					ref={menuRef}
				>
					{/* {isMenuOpen ? (
						<XIcon className='h-6 w-6' />
					) : ( */}
					<MenuIcon className='h-6 w-6' />
					{/* )} */}
				</button>
			</div>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className={`relative top-0 left-0 bottom-0 right-0 z-[2000] overflow-hidden`}
						initial={{ opacity: 0, y: -1000 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -1000 }}
						transition={{ duration: 0.3 }}
					>
						<div className='bg-white dark:bg-purple-800 py-2 px-4 flex flex-col gap-10 items-center w-screen h-screen'>
							<Link
								className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all'
								href={'/about'}
							>
								ABOUT
							</Link>
							<Link
								className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all'
								href={'/products'}
							>
								PRODUCTS
							</Link>
							<Link
								className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all'
								href={'/services'}
							>
								SERVICES
							</Link>
							<Link
								className='py-2 px-4 hover:text-purple-800 dark:hover:text-purple-200 hover:scale-110 transition-all'
								href={'/contact'}
							>
								CONTACT
							</Link>
							<Button
							asChild
								
								className='shrink-0 py-2 px-4 dark:bg-purple-900 bg-purple-200 hover:bg-purple-400 dark:hover:bg-purple-700 rounded-lg cursor-pointer'
							>
								<Link href={COMPANY_PROFILE.calendly}></Link>
								BOOK CONSULTATION
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Fragment>
	);
}
