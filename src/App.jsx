import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import jsxImg from "./assets/jsx-ui.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              desc={CORE_CONCEPTS[0].desc}
              img={CORE_CONCEPTS[0].img}
            />
            <CoreConcept
              title={"JSX"}
              desc="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
              img={jsxImg}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              desc={CORE_CONCEPTS[3].desc}
              img={CORE_CONCEPTS[3].img}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
