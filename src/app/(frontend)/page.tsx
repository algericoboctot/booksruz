
import { Suspense } from 'react';

import FeaturedBooksList from '@/components/frontend/books/featuredbooks/featuredbooks';
import Banner from '@/components/frontend/layouts/banner/banner';
import BookListLoader from '@/ui/placeholders/booklist-loader/booklistplaceholder';
import GenresList from '@/components/frontend/genreslist/genreslist';
import fetchBooks from '@/libs/frontend/fetchBooks';
import Newsletter from '@/components/frontend/newsletter/newsletter';


const Home = async () => {
  const data = await fetchBooks();
  return (
    <>
      <Banner />
      <Suspense fallback={<BookListLoader />}>
        <div className='container px-4 2xl:px-0 py-[37px] md:py-[47px] 2xl:py-[77px]'>
          <FeaturedBooksList data={data}/>
        </div>
      </Suspense> 
      <Newsletter />
    </>
  )
}

export default Home;
