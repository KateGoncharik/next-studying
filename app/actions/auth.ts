// app/actions/auth.ts
'use server';

import { signIn } from '@/auth';
import ROUTES from '@/constants/routes';

export async function oauthSignIn(provider: 'github' | 'google') {
  await signIn(provider, {
    redirectTo: ROUTES.HOME,
    redirect: true,
  });
}
