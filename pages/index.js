import FeaturedProperties from '@/features/components/FeaturedProperties';
import HeroBanner from '@/features/components/HeroBanner';
import { getProperties } from '@/features/api/getProperties';
import MeetTheTeam from '@/features/components/MeetTheTeam';
import Partners from '@/features/components/Partners';
import Testimonials from '@/features/components/Testimonials';
import DefaultLayout from '@/features/Layouts/DefaultLayout';

export const getStaticProps = async () => {
  const featuredProperties = await getProperties(6);
  return {
    props: { featuredProperties },
  };
};

export default function Home({ featuredProperties }) {
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties} />
      <MeetTheTeam />
      <Partners />
      <Testimonials />
    </DefaultLayout>
  );
}

