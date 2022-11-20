import News from "@/components/news";
export default function NewsList({ list }: any) {
  return list.map((item: any, index: number) => <News key={index} news={item} />);
}
