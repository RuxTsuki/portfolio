'use client'

import { fadeIn } from "../../../utils/motions"
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { VerifiedSvg } from "@/components/icons/VerifiedSvg";

interface CommonCard {
    index: number
    title: string
    subtitle: string
    Icon: ({ className }: { className: string }) => JSX.Element
}

export const CommonCard = ({ index = 0, title = '', subtitle = '', Icon }: CommonCard) => {
    return (
        <Tilt className="xs:w-[180px] w-full">
            <motion.div variants={
                fadeIn('right', 'spring', 0.25 * index, 0.70)
            }
                className='w-full green-pink-gradient p-[1px] rounded-[1.25rem] shadow-card'
            >
                <div
                    /* options={{
                      max: 45,
                      scale: 1,
                      speed: 450
                    }} */
                    className='bg-tertiary rounded-[1.25rem] py-4 px-7 min-h-[180px] flex justify-evenly items-center flex-col'
                >
                    <Icon className={'card'} />
                    {/* <img src={icon} alt={title} className='w-16 h-16 object-contain' /> */}
                    <div className="grid col-auto items-center">
                        <VerifiedSvg className="col-span-1 justify-self-center fill-slate-50" />
                        <h3 className='col-span-1 pl-2 text-white text-[1rem] font-medium text-center'>{title}</h3>

                        <p className="col-span-2 text-white text-[0.875rem] font-medium text-center" style={{ color: '#aaa6c3' }}>
                            {subtitle}
                        </p>
                    </div>

                </div>
            </motion.div>
        </Tilt>
    )
}