'use client'

import { styles } from '@/utils/style';
import { Text } from '@/components/ui/text/Text';
import { Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { HeroAnimation } from './HeroAnimation';
import { Suspense } from 'react';


export const Hero = () => {

    return (
        <section className='relative w-full h-screen mx-auto grid'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
                    <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
                </div>

                <div>
                    <Text type='SuperTitle'>
                        Hola, soy <span className='text-[#ff4ecd] whitespace-nowrap'>Diego Bello👋</span>
                    </Text>

                    <p className={`text-[#dfd9ff] lg:text-[1.5rem] font-medium xs:text-[1.125rem] md:text-[26px] text-[1rem] lg:leading-[40px] mt-6`}>
                        Front-end Developer,
                        <br className='sm:block hidden' />
                        Amo crear interfaces & aplicaciones web impactantes.
                    </p>
                </div>

            </div>

            <div className='relative z-[5] self-center justify-self-center mt-[10rem] md:mt-[13rem] lg:mt-[16rem] 
            w-[282px] h-[160px]  xs:w-[378px] xs:h-[261px] md:w-[602px] md:h-[350px] lg:w-[600px] lg:h-[350px] xl:w-[800px] xl:h-[401px]'>
                <Suspense fallback={<p className='text-white text-[1.5rem]'>Loading...</p>}>
                    <HeroAnimation />
                </Suspense>
            </div>

            <div className='absolute bottom-[5.5rem] gotodown lg:bottom-[3.2rem] w-full flex justify-center items-center'>
                <Link href="#about">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div animate={{
                            y: [0, 24, 0]
                        }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </Link>

            </div>
        </section>
    )
}