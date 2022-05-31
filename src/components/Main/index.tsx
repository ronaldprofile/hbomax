import { SectionCollections } from "../SectionCollections";
import { SectionMovieSpotlight } from "../SectionMovieSpotlight";
import { SectionNewReleases } from "../SectionNewReleases";

export function Main() {
  return (
    <main>
      <div className={`container-box`}>
        <SectionMovieSpotlight />
      </div>

      <div className={`w-full`}>
        <div className={`container-box md:flex md:flex-col gap-[50px]`}>
          <SectionCollections />
          <SectionNewReleases />
        </div>
      </div>
    </main>
  );
}
