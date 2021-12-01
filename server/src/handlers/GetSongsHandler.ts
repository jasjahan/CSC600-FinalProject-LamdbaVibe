import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(msg: any): Promise<any> {
  const songs = await DB.runQuery('get_songs');

  console.log('songs message');

  console.log(songs);

  console.log(msg);

  return { songs };
}

const schema = {};

export const GetSongsHandler = new MessageHandler(
  'get_songs',
  schema,
  onMessage,
);
