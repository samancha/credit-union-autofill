

export default function Page() {

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};


const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
]

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: months(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: Utils.months(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};
    }
    ;
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
    }
  },
    
};
  
  

  

  // /return (
  //   <div>
  //     <h1>Hello from the PROJECTION.GRAPH DIRECTORY</h1>
  //     <h1>Hello from the PROJECTION.GRAPH DIRECTORY</h1>
  //     <div>{chart}</div>
  //   </div>
  // );

  

