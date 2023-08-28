'use client'

import Image from "next/image";
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "@/utils/motions";
import { styles } from "@/utils/style";
import { projects } from "@/constants";
import github from "@/assets/svg/github.svg";

const ProjectCard = ({ index, project }: { index: number, project: any }) => {

  const { image, name, source_code_link, description, tags } = project;

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => { window.open(source_code_link, '_blank') }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <Image src={github} alt={'github'} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

        </div>


        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag: any) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

export const Works = () => {

  return (
    <>
      <motion.div variants={textVariant('')}>
        <p className={`${styles.sectionSubText}`}>Trabajos personal</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos 👨‍💻</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Cada proyecto que realizo es unico y especial, es una oportunidad para crear y aprender de cada nuevo reto que se me presenta.
          Me apasion empezar con una idea en blanco y convertirla en una solucion a las necesidades de los usuarios
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {
          projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={project}
            />
          ))
        }
      </div>
    </>
  )
}

export const WorksMotion = SectionWrapper(Works, 'projects')


