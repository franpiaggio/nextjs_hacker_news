import MainMenu from "@/components/mainmenu";
import { Container } from "@mui/material";
interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <MainMenu />
      <Container maxWidth="md">{children}</Container>
    </>
  );
}
