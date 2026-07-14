import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DesignProcess from "@/components/sections/DesignProcess";
import ProblemSolution from "@/components/sections/ProblemSolution";
import UserPersona from "@/components/sections/UserPersona";
import UserFlow from "@/components/sections/UserFlow";
import Wireframe from "@/components/sections/Wireframe";
import UserInterface from "@/components/sections/UserInterface";
import Thanks from "@/components/sections/Thanks";



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DesignProcess /> 
      <ProblemSolution />
      <UserPersona />
      <UserFlow />
      <Wireframe />
      <UserInterface />
      <Thanks />
    </>
  );
}
