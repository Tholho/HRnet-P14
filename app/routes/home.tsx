import type { Route } from "./+types/home";
import { Welcome } from "./pages/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HRnet" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
