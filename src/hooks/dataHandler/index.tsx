/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu (agucaleb@gmail.com)
 *
 */

import React, {
  useMemo,
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import {enGB} from '../../utils/dictionary';
import {ENDPOINTS} from './endpoints';
import {Movie, MovieDetail} from '../../utils/types';
import {Alert} from 'react-native';
// ** ** ** ** ** CREATE ** ** ** ** **
const MoviesDataContext = createContext(null);

// ** ** ** ** ** USE ** ** ** ** **
export function useMoviesDataHook(): any {
  const context = useContext(MoviesDataContext);
  if (context === undefined || context === null) {
    throw new Error(
      '`useMoviesDataHook`  must be used within a `MoviesDataProvider` component',
    );
  }
  return context;
}

// ** ** ** ** ** PROVIDER ** ** ** ** **

export function MoviesDataProvider({children}: {children: unknown}): any {
  // ** ** ** ** ** SETUP ** ** ** ** **
  //Global State Management

  const [moviesData, setMoviesData] = useState<Movie[] | null>(null);
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
  const [page, setPage] = useState<number>(1);
  const [lastMovieName, setlastMovieName] = useState<string>('');

  const {baseurl} = ENDPOINTS;
  // ** ** FUNCTIONS ** ** **

  /** fetch movies based on query*/
  const fetchMovie = useCallback(
    async (movieName = '', pageNumber = 1) => {
      try {
        if (movieName !== lastMovieName) {
          setMoviesData([]);
        }

        if (movieName) {
          const moviePath = `s=${movieName.trim()}`;
          const pagePath = `&page=${pageNumber}`;
          const path = `${moviePath}${pagePath}`;
          const res = await fetch(baseurl + path);
          const data = await res.json();
          if (data?.Response === 'True') {
            /**persist existing value since we are implementing an infine scrolling list*/
            setMoviesData(prev =>
              prev ? [...new Set(prev), ...data?.Search] : data?.Search,
            );
            setlastMovieName(movieName);
          } else {
            Alert.alert(
              enGB.Message,
              data?.Error,
              [
                {
                  text: 'OK',
                },
              ],
              {cancelable: false},
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    [baseurl, lastMovieName],
  );

  //fetch movie details witj ID parameter
  const fetchMovieDetail = useCallback(
    async (movieID: string) => {
      setMovieDetail(null);
      try {
        const moviePath = `i=${movieID}`;
        const res = await fetch(baseurl + moviePath);
        const data = await res.json();
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      }
    },
    [baseurl],
  );

  // ** ** ** ** ** MEMOIZE ** ** ** ** **
  interface MoviesDataContextValue {
    moviesData: Movie[] | null;
    fetchMovie: (movieName?: string, pageNumber?: number) => Promise<void>;
    fetchMovieDetail: (movieID: string) => Promise<void>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    movieDetail: MovieDetail | null;
    children?: React.ReactNode;
  }

  const values: MoviesDataContextValue | null = useMemo(
    () => ({
      moviesData: moviesData || null,
      fetchMovie,
      page,
      setPage,
      fetchMovieDetail,
      movieDetail: movieDetail || null,
    }),
    [moviesData, fetchMovie, page, setPage, fetchMovieDetail, movieDetail],
  );

  // ** ** ** ** ** RENDER ** ** ** ** **

  return (
    <MoviesDataContext.Provider value={values}>
      {children as ReactNode}
    </MoviesDataContext.Provider>
  );
}
