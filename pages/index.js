import FeaturedProperties from '@/features/components/FeaturedProperties';
import HeroBanner from '@/features/components/HeroBanner';
import DefaultLayout from '@/features/Layouts/DefaultLayout';

export default function Home({ featuredProperties }) {
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties} />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const { hits } = require('@/features/data/properties');
  return {
    props: { featuredProperties: hits.slice(0, 5) },
  };
}
