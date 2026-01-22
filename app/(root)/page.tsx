import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="h1-bold text-light-500">Tailwind CSS is FUN!!</h1>
      <form
        className="px-1 pt-[100px]"
        action={async () => {
          'use server';
          await signOut({ redirectTo: ROUTES.SIGNIN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default Home;
