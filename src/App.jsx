import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import jsxImg from "./assets/jsx-ui.png";
import TabButton from "./components/TabButton.jsx";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  console.log("App component executing");
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? (
            <div id="tab-content">
              <h3>Select a topic</h3>
            </div>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
