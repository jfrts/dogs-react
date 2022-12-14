import "./styles.css";
import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from "victory";

export default function UserStatsCharts({ data }) {
  console.log("🚀 ~ file: index.jsx:6 ~ UserStatsCharts ~ data", data)
  const [chart, setChart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(function () {
    if (data && data.length > 0) {
      const chartData = data.map(item => ({ x: item.title, y: Number(item.acessos) }));
      setChart(chartData);

      const sumTotal = data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, currentValue) => acc + currentValue);

      setTotal(sumTotal);
    }
  }, [data]);

  if (data && data.length > 0) {
    return (
      <section className="animeLeft charts-section">
        <div className="total chart-item">
          Acessos: {total}
        </div>
        <div className="chart-item">
          <VictoryPie
            data={chart}
            innerRadius={60}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            theme={VictoryTheme.material}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#0d1117",
                strokeWidth: 2
              },
              labels: {
                fontSize: 14,
                fill: "#f0f6fc"
              }
            }}
          />
        </div>
        <div className="chart-item">
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={48}
            dependentAxis
          >
            <VictoryBar data={chart} alignment="start"></VictoryBar>
          </VictoryChart>
        </div>
      </section>
    );
  } else return null;
}