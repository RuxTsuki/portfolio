'use client'

import { styles } from '@/utils/style';
import { Text } from '@/components/ui/text/Text';
import { Link } from '@nextui-org/react';
import { motion } from 'framer-motion';

export const Hero = () => {

    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
                    <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
                </div>

                <div>
                    <Text type='SuperTitle'>
                        Hola, soy <span className='text-[#ff4ecd]'>Diego</span> 👋
                    </Text>

                    <p className={`${styles.heroSubText} mt-6 text-white-100`}>
                        Desarrollador Frontend,
                        <br className='sm:block hidden' />
                        Amo crear interfaces & aplicaciones web.
                    </p>
                </div>

            </div>

            <>
                other image
            </>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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