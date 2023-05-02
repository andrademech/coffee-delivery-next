import type { ReactElement } from "react";
import { Layout } from "@/components/Layout";
import { Intro } from "@/components/Intro";
import { CoffeeList } from "@/components/CoffeeList";

export default function Home(): ReactElement {
  return (
    <Layout>
      <Intro />
      <CoffeeList />
    </Layout>
  );
}
