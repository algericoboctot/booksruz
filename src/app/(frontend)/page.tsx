import FeaturedBooksList from '@/app/(frontend)/components/featuredbooks/featuredbooks';
import Banner from '@/components/frontend/layouts/banner/banner';
import fetchBooks from '@/libs/frontend/fetchBooks';
import Newsletter from '@/components/frontend/newsletter/newsletter';

const Home = async () => {
  const data = await fetchBooks();
  return (
    <>
      <Banner />
        <div className='container px-4 2xl:px-0 py-[37px] md:py-[47px] 2xl:py-[77px]'>
          <FeaturedBooksList data={data}/>
        </div>
      <Newsletter />
    </>
  )
}

export default Home;
