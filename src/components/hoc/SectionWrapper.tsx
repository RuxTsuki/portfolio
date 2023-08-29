'use client';

import { staggerContainer } from '@/utils/motions';
import { styles } from '@/utils/style';
import { motion } from 'framer-motion';

export const SectionWrapper = (Component: any, idName: any) => {
    return function HOC() {

        return (
            <motion.section
                variants={staggerContainer(0, 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} px-6 py-10 md:px-16 md:py-16 max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }
}
