import type {RecordModel} from "pocketbase";

export const load = async ({locals}) => {
	const animations = await locals.pb.collection('animations').getFullList();
	const imgsa = animations.map(({thumbnail}: RecordModel) => thumbnail);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
    const thumbnailsa = imgsa.map((img, i: number) => locals.pb.files.getURL(animations[i], img));
	const games = await locals.pb.collection('games').getFullList();
	const imgsg = games.map(({thumbnail}: RecordModel) => thumbnail);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
    const thumbnailsg = imgsg.map((img, i: number) => locals.pb.files.getURL(games[i], img));
	const favvids = locals.pb.authStore.record?.favourites || [];
	const favs = await Promise.all(favvids.map((id: string) => locals.pb.collection('animations').getOne(id)));
	const favimgs = favs.map(({thumbnail}: RecordModel) => thumbnail);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
    const favids = favimgs.map((id) => id[0]);
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
    const favthumbnails = favimgs.map((img, i: number) => locals.pb.files.getURL(favs[i], img));
	return { animations: animations, thumbnailsa: thumbnailsa, games: games, thumbnailsg: thumbnailsg, favourites: { thumbnails: favthumbnails, ids: favids}};
}

export const actions = {
	logout: async ({locals}) => {
		locals.pb.authStore.clear();
	},
	name: async ({locals, request}) => {
		const data = await request.formData();
		const name = data.get('name');
		await locals.pb.collection('users').update(locals.pb.authStore.record!.id, {name});
	},
	removename: async ({locals}) => {
		await locals.pb.collection('users').update(locals.pb.authStore.record!.id, {name: ''});
	}
}