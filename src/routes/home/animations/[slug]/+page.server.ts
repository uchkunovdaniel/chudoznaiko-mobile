import { error } from '@sveltejs/kit';
import type {RecordModel} from "pocketbase";

// const videos = fs.readdirSync('src/lib/animations/videos');
export const load = async ({ params, locals }) => {
	const animations = await locals.pb.collection('animations').getFullList();
	const videos = animations.map(({video}: RecordModel) => video);
	const names = animations.map(({name}: RecordModel) => name);
	const filenames = videos.map((video: RecordModel) => video[0]+'.mp4');
	if(filenames.includes(params.slug + '.mp4')){
		return {
			id: animations[parseInt(params.slug)-1].id,
			name: names[parseInt(params.slug)-1],
			video: locals.pb.files.getURL(animations[parseInt(params.slug)-1], videos[parseInt(params.slug)-1]),
			description: animations[parseInt(params.slug)-1].description
		};
	}
	return error(404);
};
