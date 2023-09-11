
"use client";

import { FC, memo, useEffect, useState } from "react";
import Image from 'next/image';
import classes from '@/components/frontend/books/bookimage/bookimage.module.css';
import BookImageLoader from '@/ui/placeholders/book-image-loader/book-image-loader';
import { typeImagePath, typeImageTitle } from '@/types/frontend/books';
import BookCover from '@/ui/placeholders/bookcover/bookcover';
import fetchBooksImage from '@/libs/frontend/fetchBookImage';

const BookImage: FC<{ isbn: string, imgSize: string }> = memo(({ isbn, imgSize}) => {
  
      const [imagePath, setImagePath] = useState<string | null>(null);
      const [imageTitle, setImageTitle] = useState<string | null>(null);
       const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
        async function fetchBookIMageData() {
          try {
            const response = await fetchBooksImage(isbn);
            const data = await response;
            const firstItem = data?.items?.[0];
    
            if (firstItem) {
              const imagePath: typeImagePath = (data && data.items && data.items.length > 0) && data?.items[0].volumeInfo.imageLinks?.thumbnail;
              const imageTitle: typeImageTitle = (data && data.items && data.items.length > 0) && data?.items[0].volumeInfo.title;
              setImagePath(imagePath || null);
              setImageTitle(imageTitle || null);
            }
          } catch (error) {
            console.error("Error fetching book image:", error);
          }  finally {
            setLoading(false);
          }
        }
    
        fetchBookIMageData();
        
      }, [isbn]);
      
    
      // Render your component using the fetched data
      return (
        <div className={`${classes['book__placeholder']} w-ful h-full relative`}>
          {loading ? (<BookImageLoader />) : (
            <>
              {imagePath ? (
                <Image className={`${imgSize}`} src={imagePath} alt={`${imageTitle}`} sizes="100vw" fill={true} />
              ) : (
                <BookCover />
              )}
            </>
          )}
        </div>
      );
});

BookImage.displayName = 'BookImage';

export default BookImage;