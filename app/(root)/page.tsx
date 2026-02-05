import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import Link from 'next/link';

const Home = async () => {
  return (
    <>
      <section>
        <h1>All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">LocalSearch</section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
      </div>
    </>
  );
};

export default Home;
