import type {RecordModel} from "pocketbase";

export const load = async ({ locals }) => {
    const record = await locals.pb.collection('badges').getFullList();
    const url = locals.pb.files.getURL(record, locals.pb.authStore.record!.badge);
    console.log(record);
}

export const actions = {
    badge: async ({ request, locals }) => {
        const data = await request.formData();
        await locals.pb.collection('users').update(locals.pb.authStore.record!.id, {
            'badges+': data.get('id') as string
        })
    }
}