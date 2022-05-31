import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export function Home() {
  return (
    <div
      className={`w-screen h-screen
    `}
    >
      <div className={`md:w-[1300px] mx-auto pt-[40px]`}>
        <Header />
      </div>

      <Main />
    </div>
  );
}
