import { auth, signOut } from '@/auth';
import NavLinks from './NavLinks';
import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';

const DesktopNavigation = async () => {
  const session = await auth();

  return (
    <div className="max-sm:hidden">
      <NavLinks />
      {session?.user && (
        <form
          className="px-1 pt-[100px]"
          action={async () => {
            'use server';
            await signOut({ redirectTo: ROUTES.SIGNIN });
          }}
        >
          <Button type="submit">Log out</Button>
        </form>
      )}
    </div>
  );
};

export default DesktopNavigation;
