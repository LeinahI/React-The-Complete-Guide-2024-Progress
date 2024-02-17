import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    img: componentsImg,
    title: "Components",
    desc:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    img: jsxImg,
    title: "JSX",
    desc:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    img: propsImg,
    title: "Props",
    desc:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    img: stateImg,
    title: "State",
    desc:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
