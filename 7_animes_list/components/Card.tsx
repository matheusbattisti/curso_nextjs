import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import { FaStar } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Anime } from "@/types/Anime";

type CardProps = {
  anime: Anime;
  index: number;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Card = ({ anime, index }: CardProps) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full hover:scale-105 cursor-pointer duration-200"
    >
      <div className="relative w-full h-[330px]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          sizes="auto"
          className="rounded-xl object-fill"
        />
      </div>

      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>

          <div className="py-1 px-2 bg-slate-800 rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center font-medium">
            <MdOutlineVideoLibrary color="green" />
            <small>Episódios - {anime.episodes || anime.episodes_aired}</small>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <FaStar color="gold" />
            <small>Média - {anime.score}</small>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};
