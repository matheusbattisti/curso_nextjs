import { fetchAnime } from "./action";

import { Container } from "@/components/Container";
import { Content } from "@/components/Content";

async function Home() {
  const data = await fetchAnime(1, "name");

  return (
    <Container title="Todos os animes" order="name">
      <Content>{data}</Content>
    </Container>
  );
}

export default Home;
