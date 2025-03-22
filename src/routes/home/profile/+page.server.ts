export const load = async ({ locals }) => {
    console.log(await locals.pb.collection('badges').getList());
}

export const actions = {
    badge: async ({ request, locals }) => {
        const data = await request.formData();
        await locals.pb.collection('users').update(locals.pb.authStore.record!.id, {
            'badges+': data.get('id') as string
        })
    }
}