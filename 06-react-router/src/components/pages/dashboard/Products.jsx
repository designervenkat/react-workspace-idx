import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
   const [product, setProduct] = useState([])

   useEffect(() => {
      fetch('https://fakestoreapi.com/products?limit=8')
         .then((res) => res.json())
         .then((json) => setProduct(json))
   }, [])

   return (
      <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 h-screen'>
         <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
            <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
               {/* product card */}

               {product &&
                  product.map((item) => (
                     <div
                        key={item.id}
                        className='flex flex-col gap-y-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
                        <div className='h-56 w-full'>
                           <div className='bg-white'>
                              <img
                                 className='mx-auto h-full dark:hidden'
                                 src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
                                 alt=''
                              />
                              <img
                                 className='mx-auto hidden h-full dark:block aspect-square object-contain'
                                 src={item.image}
                                 alt={item.title}
                              />
                           </div>
                        </div>
                        <div className='mt-6'>
                           <a
                              href='#'
                              className='text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white line-clamp-1'>
                              {item.title}
                           </a>

                           <div className='mt-4 flex items-center justify-between gap-4'>
                              <p className='text-2xl font-extrabold leading-tight text-gray-900 dark:text-white'>
                                 ${item.price}
                              </p>

                              <Link
                                 to={`/dashboard/products/${item.id}`}
                                 className='inline-flex items-center rounded-lg bg-slate-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                                 View Details
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))}
            </div>
         </div>
      </section>
   )
}
