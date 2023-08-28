import { About } from '@/components/About';

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <About />
      </main>
    </div>
  )
}
