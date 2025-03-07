
import type { PageServerLoad } from './$types'
import type {RecordModel} from "pocketbase";

export const load: PageServerLoad = async ({locals}) => {
	const games = await locals.pb.collection('games').getFullList();
	const imgs = games.map(({thumbnail}: RecordModel) => thumbnail);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
    const thumbnails = imgs.map((img, i: number) => locals.pb.files.getURL(games[i], img));
	return { games: games, thumbnails: thumbnails};
}