import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(msg: any): Promise<any> {

  const songs = await DB.runQuery('get_songs');


  const genres = await DB.runQuery('get_genre');

  console.log(genres);

  genres.forEach(genre=>{
      const GenreSongs : any[] = [];
      songs.forEach(song=>{
          if(song.fkGenreid==genre.genreId)
          {
              GenreSongs.push(song);
          }
      })
      genre.songs=GenreSongs;
  })

  return { genres };
}

const schema = {};

export const GetGenresHandler = new MessageHandler(
  'get_genres',
  schema,
  onMessage,
);
