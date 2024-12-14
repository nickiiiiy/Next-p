import { Categories, Container, Filters, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-[16px]">Список пицц</div>
          </div>
        </div>
      </Container>
    </>
  );
}
