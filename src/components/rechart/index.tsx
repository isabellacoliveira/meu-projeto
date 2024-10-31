import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Importando o tipo ApexOptions

const MyChart = () => {
  const [chartData, setChartData] = useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Vendas",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      title: {
        text: 'Gráfico de Vendas',
        align: 'center'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      yaxis: {
        title: {
          text: 'Quantidade'
        }
      },
      // Adicione outras configurações padrão para evitar erros de tipagem
      tooltip: {
        enabled: true
      }
    }
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default MyChart;
