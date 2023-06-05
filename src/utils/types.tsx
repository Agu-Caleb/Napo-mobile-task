/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu
 *
 */

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetail {
  Title: string;
  Year: string;
  Released: string;
  Plot: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  imdbID: string;
  Type: string;
  Response: string;
}
