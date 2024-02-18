import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import jsxImg from "./assets/jsx-ui.png";
import TabButton from "./components/TabButton.jsx";

function App() {
  let [ selectedTopic, setSelectedTopic ] = useState('click mo to');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

  console.log('App component executing');
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

export default App;
