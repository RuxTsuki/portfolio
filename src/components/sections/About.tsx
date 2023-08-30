'use client'
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motions';
import { styles } from '@/utils/style';
import { CondingSkills } from '@/components/CondingSkills';
import { SectionWrapper } from '@/components/hoc';
import { idAbout } from '@/constants';


const About = () => {
  return (
    <>
      <motion.div className='pt-[2.8rem]'>
        <p className={`${styles.sectionSubText}`}>Introduccion</p>
        <h2 className={`${styles.sectionHeadText}`}>Acerca de mi 🙌</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='grid mt-4 lg:grid-flow-col'
      >
        <div>
          <p className='text-secondary text-[1rem] leading-[30px] lg:p-3 lg:text-[1.25rem]'>
            Soy un apasionado del desarrollo front-end y los videojuegos 🕹️, me encanta trabajar en la creación de aplicaciones web modernas, que combinan funcionalidad y diseño de forma armoniosa.
            Me motiva especialmente poder utilizar mi conocimiento en tecnologías para desarrollar soluciones innovadoras que proporcionen una experiencia de usuario excepcional.
          </p>

          <p className='text-secondary text-[1rem] leading-[30px] lg:p-3 lg:text-[1.25rem]'>
            Para mí, cada proyecto representa un desafío emocionante y una oportunidad de aprendizaje constante, ya que siempre busco estar al tanto de las últimas tendencias y tecnologías en el campo del desarrollo web.
          </p>
        </div>

        <div className='flex justify-center'>
          <CondingSkills className='coding-skills-man' />
        </div>
      </motion.div>
    </>
  )
}

export const AboutMotion = SectionWrapper(About, idAbout);
