import ProductList from '@/components/product-page/products';
import Hero from '@/components/ui/hero';
import React from 'react';

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
