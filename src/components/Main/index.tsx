import { SectionCollections } from "../SectionCollections";
import { SectionMovieSpotlight } from "../SectionMovieSpotlight";

export function Main() {
  return (
    <main>
      <SectionMovieSpotlight />

      <div>
        <SectionCollections />
      </div>
    </main>
  );
}
