import Home from "@/app/ui/home/Home";
import Intro from "@/app/ui/home/Intro";
import Questions from "@/app/ui/home/Questions";
import Reviews from "@/app/ui/home/Reviews";
import Starfield from "react-starfield";

export default function Page() {
  return (
    <main>
      <Home />
      <Intro />
      <Questions />
      <Reviews />

    </main>
  );
}
