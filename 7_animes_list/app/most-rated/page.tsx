import { fetchAnime } from "../action";

import { Container } from "@/components/Container";
import { Content } from "@/components/Content";

async function MostRated() {
  const data = await fetchAnime(1, "ranked");

  return (
    <Container title="Confira os animes mais bem avaliados" order="ranked">
      <Content>{data}</Content>
    </Container>
  );
}

export default MostRated;
