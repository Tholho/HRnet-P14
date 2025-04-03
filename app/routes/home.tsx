import type { Route } from "./+types/home";
import { Welcome } from "./pages/welcome/welcomev2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HRnet" },
    { name: "description", content: "Welcome to HRnet" },
  ];
}

export default function Home() {
  return <Welcome />;
}
