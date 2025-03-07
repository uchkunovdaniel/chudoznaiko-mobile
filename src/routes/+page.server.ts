import { redirect} from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({locals}) => {
	if(locals.pb.authStore.isValid){
		throw redirect(303, '/home');
	}
}

export const actions = {
	login: async ({locals, request}) => {
		const data = await request.formData();
		try{
				await locals.pb.collection('users').authWithPassword(`${data.get('email')}`, `${data.get('password')}`);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			// console.log(error.data.message);
			return { success: false, message: 'Грешен имейл или парола' };
		}
	},
	register: async ({locals, request}) => {
		const data = await request.formData();
		try{
				await locals.pb.collection('users').create({email: `${data.get('email')}`, password: `${data.get('password')}`, passwordConfirm: `${data.get('passwordConfirm')}`});
				await locals.pb.collection('users').authWithPassword(`${data.get('email')}`, `${data.get('password')}`);
			} catch (_) {
			return { success: false, message: 'Грешка' };
		}
	},
}
