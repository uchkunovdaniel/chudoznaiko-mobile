import type { PageServerLoad } from './$types'
import type {RecordModel} from "pocketbase";


export const load: PageServerLoad = async  ({locals}) => {
	const animations = await locals.pb.collection('animations').getFullList();
	const imgs = animations.map(({thumbnail}: RecordModel) => thumbnail);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const thumbnails = imgs.map((img, i: number) => locals.pb.files.getURL(animations[i], img));
	return { animations: animations, thumbnails: thumbnails};
}