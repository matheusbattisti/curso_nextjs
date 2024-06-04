"use server";

import { Card } from "@/components/Card";
import { Anime } from "@/types/Anime";

export const fetchAnime = async (page: number, order: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=${order}`
  );

  const data = await response.json();

  return data.map((item: Anime, index: number) => (
    <Card key={item.id} anime={item} index={index} />
  ));
};
