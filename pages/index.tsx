import Head from "next/head";
import NewsList from "@/components/newslist";
import Paginator from "@/components/paginator";

// TODO: work on news types
export async function getServerSideProps(context: any) {
  const { page = 1 } = context.query;
  const pageSize = 10;
  let hasNext = true;

  const queryPage = page === 1 ? 0 : page - 1;

  const start = Number(queryPage) * Number(pageSize);
  const end = (Number(queryPage) + 1) * Number(pageSize);

  const res = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
  const topIds = await res.json();
  hasNext = end + 1 < topIds.length;

  const paginated = topIds.slice(start, end);

  const reqTopStories: any[] = await paginated.map(async (id: number) => {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const story = await res.json();
    return story;
  });

  const topStories = await Promise.all(reqTopStories);
  return {
    props: {
      topStories: topStories,
      hasNext: hasNext,
    },
  };
}

export default function Home({ topStories, hasNext }: any) {
  if (!topStories.length) {
    return <h1>No data</h1>;
  }
  return (
    <>
      <Head>
        <title>Hacker news / Home</title>
      </Head>
      <NewsList list={topStories} />
      <Paginator hasNext={hasNext} />
    </>
  );
}
