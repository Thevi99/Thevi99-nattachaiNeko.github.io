import Image from 'next/image'
import Hero from '@/components/main/Hero'
import MySkills from '@/components/main/MySkills'
import Project  from '@/components/main/Project'
import Navbar from '@/components/main/Navbar'
import Contact from '@/components/main/Contact'


export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
        <Navbar />
        <Hero />
        <MySkills />
        <Project />
        <Contact />
      </div>
    </main>
  )
}
