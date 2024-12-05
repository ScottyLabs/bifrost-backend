import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Theme } from "../components/theme";
import { Desc } from "../components/desc";
import { Schedule } from "../components/schedule";
import { Speakers } from "../components/speakers";
import { Prizes } from "../components/prizes";
import { Sponsors } from "../components/sponsors";

export function App() {
  return (
    <div className="font-sfpro bg-gradient-to-b from-50% to-100% from-[#0B3B48] to-[#062128] text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/public/left_swirl.svg')] bg-no-repeat z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/public/right_swirl.svg')] bg-no-repeat z-0"></div>
      <Header />
      <Hero />
      <Desc />
      <Theme />
      <Schedule />
      <Speakers />
      <Prizes />
      <Sponsors />
    </div>
  );
}

export default App;
