import { auth } from '@/auth';

const Home = async () => {
  const session = await auth();
  console.log(session);

  return <div>Test text</div>;
};

export default Home;
