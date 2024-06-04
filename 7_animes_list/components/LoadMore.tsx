"use client";

import { fetchAnime } from "@/app/action";
import { useState } from "react";

let page = 2;

export const LoadMore = ({ order }: { order: string }) => {
  const [data, setData] = useState<JSX.Element[]>([]);

  const showMoreItems = () => {
    fetchAnime(page, order).then((res) => {
      setData([...data, ...res]);
      page++;
    });
  };

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      <section className="flex justify-center items-center w-full">
        <button
          onClick={showMoreItems}
          className="h-10 sm:h-8 px-6 py-1 w-full sm:w-auto text-sm font-medium rounded-lg border border-white bg-slate-800 hover:bg-slate-700 flex justify-center items-center"
        >
          Carregar mais
        </button>
      </section>
    </>
  );
};
