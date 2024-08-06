import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('films')
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: false })
  comingSoon: boolean;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  year: string;

  @Column({ type: 'text' })
  rated: string;

  @Column({ type: 'text' })
  released: string;

  @Column({ type: 'text' })
  runtime: string;

  @Column({ type: 'text' })
  genre: string;

  @Column({ type: 'text' })
  director: string;

  @Column({ type: 'text' })
  writer: string;

  @Column({ type: 'text' })
  actors: string;

  @Column({ type: 'text' })
  plot: string;

  @Column({ type: 'text' })
  language: string;

  @Column({ type: 'text' })
  country: string;

  @Column({ type: 'text' })
  awards: string;

  @Column({ type: 'text' })
  poster: string;

  @Column({ type: 'text' })
  metascore: string;

  @Column({ type: 'text' })
  imdbRating: string;

  @Column({ type: 'text' })
  imdbVotes: string;

  @Column({ type: 'text' })
  imdbID: string;

  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'text', nullable: true })
  totalSeasons: string;

  @Column({ type: 'boolean', default: true })
  response: boolean;

  @Column('simple-array', { nullable: true })
  images: string[];
}
