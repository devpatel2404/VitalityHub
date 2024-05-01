import Banner from "./components/Home/Banner";
import Title from './components/Home/DefaultTitle';
import GettingStarted from "./components/Home/GettingStarted";
import QandA from "./components/Home/Q&A";
import Testimonies from "./components/Home/testimonies";
import Footer from "./components/Home/Footer";
import DailyPlan from "@/app/components/Home/DailyPlan";

export default function Home(){
  return (
      <main>
          <Title/>
          <Banner/>
          <GettingStarted/>
          <QandA/>
          {/*This place is left for the revies which we currently don't have any of*/}
          <Testimonies />
          <DailyPlan />
          <Footer/>
      </main>
  );
}

/*
To-Do List:
    Make Page More Reactive
    Add Carasouel to Testimonies
    Work on the 1-2-3
    Answer the QandA Questions
 */