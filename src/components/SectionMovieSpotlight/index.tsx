import imdbLogo from "../../assets/imdb-logo.svg";
import playIcon from "../../assets/play.svg";

export function SectionMovieSpotlight() {
  return (
    <section className={`my-[70px]`}>
      <div className={`md:w-[575px] flex flex-col items-start text-white`}>
        <span className={`text-xl uppercase`}>
          2021 | pg-13 | <time>2h 28m</time>
        </span>

        <h1 className={`text-[80px] leading-[90px] uppercase`}>
          spider-men: no way home
        </h1>

        <span className={`text-3xl capitalize`}>
          action | adventure | fantasy
        </span>

        <div className={`flex items-center gap-4 mt-5 mb-8`}>
          <img src={imdbLogo} alt="logo da IMDb, internet movie database" />
          <span className={`text-[28px]`}>8.5</span>
        </div>

        <button
          className={`h-14 px-4 flex items-center gap-3 border border-white 
            rounded-[10px] 
          
          `}
        >
          <img src={playIcon} alt="icon play" />
          <span className={`text-lg text-white`}>Watch now</span>
        </button>
      </div>
    </section>
  );
}
