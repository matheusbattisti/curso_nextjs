import { Title } from "./Title";
import { LoadMore } from "./LoadMore";

type ContainerProps = {
  title: string;
  order: string;
  children: React.ReactNode;
};

export const Container = ({ title, order, children }: ContainerProps) => {
  return (
    <main className="sm:px-10 pt-[120px] pb-10 px-8 flex flex-col gap-10">
      <Title title={title} />
      {children}
      <LoadMore order={order} />
    </main>
  );
};
