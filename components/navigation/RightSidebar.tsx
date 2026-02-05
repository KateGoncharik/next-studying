// import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import Link from 'next/link';
import Image from 'next/image';
import TagCard from '../cards/TagCard';
const hotQuestions = [
  { id: '1', title: 'How to 1?' },
  { id: '2', title: 'How to aaa?' },
  { id: '3', title: 'How to bbb?' },
  { id: '4', title: 'How to вава?' },
  { id: '5', title: 'How to выа?' },
];
const popularTags = [
  { id: '1', name: 'react', question: '122' },
  { id: '2', name: 'javascript', question: '122' },
  { id: '3', name: 'typescript', question: '122' },
  { id: '4', name: 'nextjs', question: '122' },
  { id: '5', name: 'react-query', question: '122' },
];

const RightSidebar = async () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 h-screen flex flex-col gap-6 w-[350px]  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none  max-xl:hidden">
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ id, title }) => {
            return (
              <Link
                key={id}
                href={ROUTES.PROFILE(id)}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{title}</p>
                <Image
                  src="/icons/chevron-right.svg"
                  alt="Chevron"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ id, name, question }) => {
            return (
              <TagCard
                key={id}
                name={name}
                id={id}
                questions={question}
                showCount
                compact
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
