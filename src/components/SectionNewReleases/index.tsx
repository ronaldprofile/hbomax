import moonFallImage from "../../assets/moonfall.png";
import tickTickBoomReleaseImage from "../../assets/tick-tick-boom-release.png";
import archive81Image from "../../assets/archive-81.png";
import kingRichardImage from "../../assets/king-richard.png";

const moviesReleasesData = {
  MOONFALL: {
    title: "Moonfall",
    genre: "Action | Adventure | Sci-fi",
    image: {
      source: moonFallImage,
      alt: "moonfall movie"
    }
  },
  ARCHIVE81: {
    title: "Archive 81",
    genre: "Action | Adventure | Sci-fi",
    image: {
      source: archive81Image,
      alt: "archive 81 movie"
    }
  },
  KINGRICHARD: {
    title: "King Richard",
    genre: "Sports | Drama",
    image: {
      source: kingRichardImage,
      alt: "king richard movie"
    }
  },
  TICKTICKBOOM: {
    title: "Tick Tick Boom",
    genre: "Music | Drama",
    image: {
      source: tickTickBoomReleaseImage,
      alt: "tick tick boom movie"
    }
  }
};

export function SectionNewReleases() {
  return (
    <section>
      <h2 className={`text-zinc-800 text-3xl`}>New Releases</h2>

      <div className={`mt-5 flex items-center gap-5`}>
        {Object.entries(moviesReleasesData).map(([key, movie]) => (
          <div key={key} className={`relative`}>
            <figure>
              <img src={movie.image.source} alt={movie.image.alt} />
              <figcaption className="sr-only">{movie.title}</figcaption>
            </figure>

            <div
              className={`w-full p-5 flex flex-col gap-[15px] 
              absolute bottom-0 left-0
              backdrop-blur text-white
            `}
            >
              <strong className={`text-[28px]`}>{movie.title}</strong>
              <span className={`font-normal`}>{movie.genre}</span>
            </div>
          </div>
        ))}

        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}
