import { fetchAnime } from "../action";

import { Container } from "@/components/Container";
import { Content } from "@/components/Content";

async function MostPopular() {
  const data = await fetchAnime(1, "popularity");

  return (
    <Container title="Confira os animes mais populares" order="popularity">
      <Content>{data}</Content>
    </Container>
  );
}

export default MostPopular;
