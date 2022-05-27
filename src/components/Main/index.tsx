import { SectionCollections } from "../SectionCollections";
import { SectionMovieSpotlight } from "../SectionMovieSpotlight";
import { SectionNewReleases } from "../SectionNewReleases";

export function Main() {
  return (
    <main>
      <SectionMovieSpotlight />

      <div className={`md:flex md:flex-col gap-[50px]`}>
        <SectionCollections />
        <SectionNewReleases />
      </div>
    </main>
  );
}
