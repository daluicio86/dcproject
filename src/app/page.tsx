//import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
//import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import { Welcome } from '@/components/Home/Welcome'
import Jubilados from '@/components/Home/Jubilados'
import Actividades from '@/components/Home/Actividades'

export default function Home() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL)
  return (
    <main>
      <Hero />
      <Welcome />
      <Services />
      {/*<Properties />
      <FeaturedProperty />*/}
      <Jubilados />
      <Actividades />

      <Testimonial />
      <BlogSmall />
      <GetInTouch />
      <FAQ />
    </main>
  )
}
