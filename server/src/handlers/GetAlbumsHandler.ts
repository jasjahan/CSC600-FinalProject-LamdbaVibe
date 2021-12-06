import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(msg: any): Promise<any> {
  const albums = await DB.runQuery('get_album');

  const songs = await DB.runQuery('get_songs');

  albums.forEach(album=>{
      const AlbumSongs: any[]= [];
      songs.forEach(song=>{
        if(album.albumId===song.fkAlbumid)
        {
            AlbumSongs.push(song);
        }
      })
      album.songs=AlbumSongs;
  })

  return { albums };
}

const schema = {};

export const GetAlbumsHandler = new MessageHandler(
  'get_albums',
  schema,
  onMessage,
);
