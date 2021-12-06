import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(msg: any): Promise<any> {
  const albums = await DB.runQuery('get_album');

  const artists= await DB.runQuery('get_artist');

  const genres = await DB.runQuery('get_genre');

  const SongDetails = albums.concat(artists,genres);

  return { SongDetails };
}

const schema = {};

export const GetSongDetailsHandler = new MessageHandler(
  'get_song_details',
  schema,
  onMessage,
);
