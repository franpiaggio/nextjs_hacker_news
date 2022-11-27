import { Button } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  hasNext: boolean;
}

export default function Paginator({ hasNext }: Props) {
  const router = useRouter();
  const { page = 1 } = router.query;
  const changePage = (page: number) => {
    router.push(`?page=${page}`);
  };
  return (
    <>
      {page > 1 ? <Button onClick={() => changePage(Number(page) - 1)}>Prev Page</Button> : null}
      {hasNext ? <Button onClick={() => changePage(Number(page) + 1)}>Next Page</Button> : null}
    </>
  );
}
