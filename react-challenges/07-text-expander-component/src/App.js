import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander collapsedNumWords={64} buttonColor={"blue"} collapseButtonText="Collapse text" expandButtonText="Show more">
        Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly
        venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible.
      </TextExpander>

      <TextExpander collapsedNumWords={165} expandButtonText="Show text" collapseButtonText="Collapse text" buttonColor="#ff6622">
        Space travel requires some seriously amazing technology and collaboration between countries, private companies, and international space organizations. And while it's not always easy (or cheap), the results are out of this world.
        Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box" collapseButtonText="Show less">
        Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({ children, collapseButtonText = "Collapse text", expandButtonText = "Show more", buttonColor = "blue", collapsedNumWords = 64, expanded = false, className = "" }) {

  const [expandedState, setExpandedState] = useState(expanded);
  return (
    <div className={className}>
      {children.substring(0, expandedState ? undefined : collapsedNumWords )}{expandedState ? null : "..."}
      <span style={{ color: buttonColor, cursor: "pointer", marginLeft: "10px" }} onClick={() => setExpandedState(!expandedState)}>{expandedState ? collapseButtonText : expandButtonText}</span>
    </div>
  );
}
