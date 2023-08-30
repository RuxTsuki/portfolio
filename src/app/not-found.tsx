'use client'

import { CatNotFound } from '@/components/ui';
import { GoHome } from '@/components/ui/GoHome/GoHome';
import { Suspense } from 'react';

export default function NotFound() {
    return (
        <div className='h-screen bg-primary container mx-auto p-5 grid place-items-center'>

            <div className='w-[320px] h-[320px] xs:w-[378px] xs:h-[261px] md:w-[602px] md:h-[350px] lg:w-[600px] lg:h-[350px] xl:w-[800px] xl:h-[400px]'>
                <Suspense fallback={<p className='text-white text-[2rem]'>Loading...</p>}>
                    <CatNotFound />
                </Suspense>
            </div>

            <div className='grid text-center'>
                <p className='font-black text-white text-[26px] lg:text-[48px] sm:text-[46px] xs:text-[32px]'>404</p>
                <h4 className=' font-black text-white lg:text-[48px] sm:text-[40px] xs:text-[32px] text-[26px] mt-2'>Opps.. Page Not Found</h4>
            </div>

            <GoHome />
        </div>
    )
}