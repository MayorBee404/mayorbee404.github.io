import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Daninsyah Bagas Abiyansa",
    location: "Jawa Timur, Indonesia",
    email: "abiyansa.jobs@aol.com",
    availability: "Open for work",
    brand:
      "I possess a strong foundation in Android development and a passion for mobile app technologies. I am currently focused on expanding my expertise in software development and have hands-on experience building apps using Agile Scrum, Kanban, and Extreme Programming methodologies.",
  }

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
