import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Featuredprojects from '@/components/FeaturedProjects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
      <Hero />
      <Featuredprojects />
      <h1>Homepage</h1>
    </div>
  )
}
