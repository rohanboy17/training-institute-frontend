import Hero from "../components/Hero";
import WhyJoin from "../components/WhyJoin";
import ProgramJourney from "../components/ProgramJourney";
import WhatYouLearn from "../components/WhatYouLearn";
import Faculty from "../components/Faculty";
import Placement from "../components/Placement";
import PlacementLogos from "../components/PlacementLogos";
import HomeCourses from "../components/HomeCourses";
import FeeEMI from "../components/FeeEMI";
import Centres from "../components/Centres";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyJoin />
      <ProgramJourney/>
      <WhatYouLearn/>
      <Faculty/>
      <Placement />
      <PlacementLogos/>
      <HomeCourses/>
      <FeeEMI/>
      <Centres />
      <FinalCTA />
    </>
  );
}
