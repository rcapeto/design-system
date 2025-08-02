import { colors } from "@rcapeto-ui/tokens";

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={color} style={{ backgroundColor: color, padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: key === "white" ? "#000" : "#fff",
        }}
      >
        <span>${key}</span>
        <strong>{color}</strong>
      </div>
    </div>
  ));
}
