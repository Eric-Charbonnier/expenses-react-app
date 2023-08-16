import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // ici on transforme un objet dataPoint a juste un nombre le nombre stocké dans dataPoint.value et le map va retourner un nouveau tableau juste avec des nombres. Donc pour les 12 mois on aura 12 valeurs
  const totalMaximum = Math.max(...dataPointValues); // on veut chercher le max dans le [] dataPointValues et comme max veut des arguments avec le spredoperator on sort les valeurs du tableau

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
