import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';


export default function ButtonItem({ title, icon, href }: any) {
    return (
        <div className='pt-[10px]'>
            <div
                className='bg-purple-200 text-white  dark:bg-purple-800 py-[25px] px-[50px] flex justify-center items-center cursor-pointer rounded-2xl'
            >
                <Button asChild className=''>
                    <Link href={href}>
                        <p className='text-base text-white text-center font-normal lg:text-lg md:text-lg sm:text-sm '>
                            {title}
                        </p>
                        {icon}
                    </Link>
                </Button>

            </div>
        </div>
    );
}
