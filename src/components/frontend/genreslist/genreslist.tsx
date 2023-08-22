'use client';
import { useQuery } from 'react-query';
import { Genres } from '@/types/frontend/books';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import fetchBooks from '@/libs/frontend/fetchBooks';


const GenresList = () => {
     const [colors, setColors] = useState<string[]>([
        '#7C00FF',
        '#5599F5',
        '#FF1493',
        '#FF8C00',
        '#0C0',
        '#06C',
        '#BA55D3',
        '#FF6347',
    ]);
    const [genres, setGenres] = useState<{ genre: string; color: string }[]>([]);

    useEffect(() => {
        const fetchGenre = async () => {
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
        
                const merge  = allGenres.map((genre, indx) => ({
                    genre,
                    color: colors[indx % colors.length]
                }));
        
                setGenres(merge);
            } catch (error) {
                throw new Error('Failed to fetch genre lists');
            }
        }
    
        fetchGenre();
      }, [colors]);
      
    return(
        <>
            <div className='container px-4 2xl:px-0 xl:mb-[89px]'>
                <ul className='flex flex-col justify-center xl:flex-row xl:justify-between'>
                    {genres.map((itm, index) => (
                    <li className="h-[54px] mb-4 lg:mb-0" key={index}>
                        <Link href={`genres/${itm.genre.toLowerCase()}`} style={{backgroundColor: itm.color, borderColor: itm.color}}  className="hover:opacity-50 hover:ease-in duration-300 rounded-[18px] flex items-center justify-center h-full xl:w-[152px] flex-[0_0_152px] py-[4px] px-4 text-white text-[20px] font-medium leadin-[150%]">
                            {itm.genre}
                        </Link> 
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default GenresList;