import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export function Home() {
  return (
    <div className={`w-screen h-screen bg-spider-men bg-no-repeat bg-cover`}>
      <div className={`md:w-[1300px] mx-auto pt-[40px]`}>
        <Header />

        <Main />
      </div>
    </div>
  );
}
