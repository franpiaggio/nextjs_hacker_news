import Card from "@mui/material/Card";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Stack } from "@mui/system";
import { Divider } from "@mui/material";
import { green, blue } from "@mui/material/colors";

type News = {
  id: number;
  title: string;
  url: string;
  by: string;
  type: string;
  score: number;
  time: number;
  kids: number[];
};

interface Props {
  index: number;
  news: News;
}

const styles = {
  link: { cursor: "pointer", textDecoration: "none" },
  mainContent: { minWidth: 275, margin: "20px 0px", cursor: "pointer" },
  cardContent: { padding: "20px 0" },
  newsContent: {
    padding: "0px 15px",
  },
  arrowContent: {
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 10px",
  },
  divider: {
    display: {
      xs: "none",
      md: "flex",
    },
  },
  title: {
    fontSize: "22px",
    overflow: "hidden",
    whiteSpace: {
      xs: "normal",
      md: "nowrap",
    },
    textOverflow: "ellipsis",
  },
  url: {
    color: green[200],
    margin: "0px 10px",
  },
  kids: {
    color: blue[200],
  },
};

function relativeDays(unixTime: number) {
  const timestamp = unixTime * 1000;
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round((timestamp - new Date().getTime()) / oneDayInMs);
  ``;
  return rtf.format(daysDifference, "day");
}

const getHost = (baseUrl: string) => {
  try {
    let url = new URL(baseUrl);
    return url.hostname.replace("www", "");
  } catch {
    return "No URL";
  }
};

export default function News({ index, news }: Props) {
  return (
    <Link href={news.url} target="_blank" sx={styles.link}>
      <Card sx={styles.mainContent}>
        <CardContent sx={styles.cardContent}>
          <Stack
            direction="row"
            divider={<Divider sx={styles.divider} orientation="vertical" flexItem />}
          >
            <Stack sx={styles.arrowContent}>
              <ArrowDropUpIcon />
              <Box component="span">{news.score}</Box>
            </Stack>
            <Box sx={styles.newsContent}>
              <Typography variant="h5" sx={styles.title}>
                {news.title}
              </Typography>
              <Typography color="text.secondary">
                By {news.by} | {relativeDays(news.time)}
                <Box component="span" sx={styles.url}>
                  | {getHost(news.url)}
                </Box>
                {news.kids?.length ? (
                  <Box component="span" sx={styles.kids}>
                    | {news.kids.length} comments
                  </Box>
                ) : null}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
