import { colors } from "@rcapeto-ui/tokens";
import { getContrast } from 'polished';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={color} style={{ backgroundColor: color, padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
         color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
        }}
      >
        <span>${key}</span>
        <strong>{color}</strong>
      </div>
    </div>
  ));
}
