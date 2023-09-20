
import fetchBooks from "@/libs/frontend/fetchBooks";
import { Genres, PageProps } from '@/types/frontend/books';

import Banner from "@/components/frontend/layouts/banner/banner";
import Newsletter from "@/components/frontend/newsletter/newsletter";
import GenresContent from "./components/genrescontent";

const GenrePage = ({ params }: PageProps ) => {
      return(
        <>
          <Banner />
          <GenresContent params={params} />
          <Newsletter />
      </>    
    );
}


export async function generateStaticParams() {
  const data = await fetchBooks();

  try {
    const allGenres: Genres = [];
    data?.forEach((item: any) => {
      item.genre.forEach((genreItem: any) => {
        if (!allGenres.includes(genreItem)) {
          allGenres.push(genreItem);
        }
      });
    });

    return allGenres.map((genre) => ({
      genre: genre,
    }));
} catch (error) {
    throw new Error('Failed to fetch genre lists');
}

}

export default GenrePage;
