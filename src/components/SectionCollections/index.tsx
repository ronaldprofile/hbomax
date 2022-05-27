import peacemakerImage from "../../assets/peacemaker.png";
import duncImage from "../../assets/dunc.png";
import tickTickBoomImage from "../../assets/tick-tick-boom.png";
import driveMyCarImage from "../../assets/drive-my-car.png";
import euphoriaImage from "../../assets/euphoria.png";
import moneyHeistImage from "../../assets/money-heist.png";

const collectionsMoviesData = {
  PEACEMAKER: {
    title: "peacemaker",
    image: {
      source: peacemakerImage,
      alt: "peacemaker movie"
    }
  },
  DUNC: {
    title: "dunc",
    image: {
      source: duncImage,
      alt: "dunc movie"
    }
  },
  EUPHORIA: {
    title: "euphoria",
    image: {
      source: euphoriaImage,
      alt: "euphoria movie"
    }
  },
  DRIVEMYCAR: {
    title: "drive my car",
    image: {
      source: driveMyCarImage,
      alt: "drive my car movie"
    }
  },
  TICKTICKBOOM: {
    title: "tick tick boom",
    image: {
      source: tickTickBoomImage,
      alt: "tick tick boom movie"
    }
  },
  MONEYHEIST: {
    title: "money heist",
    image: {
      source: moneyHeistImage,
      alt: "money heist movie"
    }
  }
};

export function SectionCollections() {
  return (
    <section>
      <h2 className={`text-3xl bold text-white`}>Popular Collections</h2>

      <div className={`mt-5 flex items-center gap-5`}>
        {Object.entries(collectionsMoviesData).map(([key, movie]) => (
          <div key={key}>
            <figure>
              <img src={movie.image.source} alt={movie.image.alt} />
              <figcaption className="sr-only">{movie.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
