import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

type News = {
  id: number;
  title: string;
  url: string;
  by: string;
  type: string;
};

interface Props {
  news: News;
}

export default function News({ news }: Props) {
  return (
    <Card sx={{ minWidth: 275, margin: "20px 0" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          By {news.by}
        </Typography>
        <Typography variant="h5" component="div">
          {news.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Type: {news.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={news.url} target="_blank">
          {news.url}
        </Link>
      </CardActions>
    </Card>
  );
}
