import { Header } from '@/components/Header';
import { SplashScreen } from '@/components/SplashScreen';
import { AboutMotion } from '@/components/sections/About';
import { ExperienceMotion } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { TechMotion } from '@/components/sections/Tech';
import { WorksMotion } from '@/components/sections/Works';

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <SplashScreen />

      <Header />
      <Hero />

      <main>
        <AboutMotion />
        <TechMotion />
      </main>

      <ExperienceMotion />
      <WorksMotion />
    </div>
  )
}
