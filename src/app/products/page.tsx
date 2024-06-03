import ProductList from '@/components/product-page/products';
import Hero from '@/components/ui/hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Products',
	description: 'Bildove financial services product list',
};

export default function Products() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='Our Products'
				description=''
				image='/products.jpg'
			/>
			<ProductList />
		</main>
	);
}
