const list: { pref: string; patients: number }[] = [];
const list2: { pref2: string; patients2: number }[] = [];
const list3: { pref3: string; patients3: number }[] = [];
const list4: { pref4: string; patients4: number }[] = [];
const list5: { pref5: string; patients5: number }[] = [];
const list6: { pref6: string; patients6: number }[] = [];
const list7: { pref7: string; patients7: number }[] = [];
const list8: { pref8: string; patients8: number }[] = [];
let g = 0;
const data1 = [0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 12, 18, 28, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 34, 36, 32, 36, 36, 36, 36, 36, 28, 24, 22, 15, 10, 10, 0, 0];
const data2 = [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 8, 12, 20, 22, 24, 30, 30, 30, 30, 30, 32, 32, 32, 30, 30, 30, 34, 34, 36, 36, 38, 34, 32, 30, 30, 30, 30, 30, 30, 28, 28, 28, 22, 20, 20, 20, 12, 4, 2, 0];
const data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 14, 14, 16, 16, 16, 14, 14, 14, 14, 14, 16, 12, 12, 12, 14, 14, 16, 12, 16, 16, 16, 16, 16, 18, 14, 12, 6, 4, 0, 0, 0];
const data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 20, 22, 22, 22, 22, 22, 24, 24, 24, 22, 22, 26, 28, 22, 18, 16, 12, 8, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const data5 = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1];
const data6 = [3, 4, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 4, 3, 3, 3];
const data7 = [5, 6, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 5];
const data8 = [7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 7, 8, 7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 7, 8];
const data = {
        datasets: [
          {
            label: '1',
            data: list.map((item) => item.patients),
            borderColor: '#22b14c',
            borderWidth: 3,
            backgroundColor: '#22b14c',
            cubicInterpolationMode: 'monotone',
          },
          // добавили еще один график с другими значениями и цветом
          {
            label: '2',
            data: list2.map((item2) => item2.patients2),
            borderColor: '#00a2e8',
            borderWidth: 3,
            backgroundColor: '#00a2e8',
            cubicInterpolationMode: 'monotone'
          },
          {
            label: '3',
            data: list3.map((item3) => item3.patients3),
            borderColor: '#ed1c24',
            borderWidth: 3,
            backgroundColor: '#ed1c24',
            cubicInterpolationMode: 'monotone',
          },
          {
            label: '4',
            data: list4.map((item4) => item4.patients4),
            borderColor: '#ffc90e',
            borderWidth: 3,
            backgroundColor: '#ffc90e',
            cubicInterpolationMode: 'monotone',
          },
        ],
}
const data_2 = {
  labels: [],
  datasets: [  
    {
      label: '5',
      data: list5.map((item5) => item5.patients5),
      borderColor: '#22b14c',
      borderWidth: 3,
      backgroundColor: '#22b14c',
      cubicInterpolationMode: 'monotone',
    },
    // добавили еще один график с другими значениями и цветом
    {
      label: '6',
      data: list6.map((item6) => item6.patients6),
      borderColor: '#00a2e8',
      borderWidth: 3,
      backgroundColor: '#00a2e8',
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '7',
      data: list7.map((item7) => item7.patients7),
      borderColor: '#ed1c24',
      borderWidth: 3,
      backgroundColor: '#ed1c24',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '8',
      data: list8.map((item8) => item8.patients8),
      borderColor: '#ffc90e',
      borderWidth: 3,
      backgroundColor: '#ffc90e',
      cubicInterpolationMode: 'monotone',
    }
  ]
}

const config = {

    type: 'line',
    data: data,


    options: {
      animation: false,
      elements: {
        point:{
            radius: 0
        }
    },
      plugins: {
        legend: {
            display: false
        },
    },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          ticks: {
            // forces step size to be 50 units
            stepSize: 10
          }
        },
        x: {
          display: true,
          beginAtZero: true,
          autoSkip: false,
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            callback: function(val, index) {
          // Hide every 2nd tick label
          return index % 5 === 0 ? this.getLabelForValue(val) : '';
        },
          }
        }
      }
    }

};

const config2 = {

  type: 'line',
  data: data_2,
  options: {
    animation: false,
    elements: {
      point:{
          radius: 0
      }
  },
    plugins: {
      legend: {
          display: false
      },
  },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          // forces step size to be 50 units
          stepSize: 10
        }
      },
      x: {
        display: true,
        beginAtZero: true,
        autoSkip: false,
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          callback: function(val, index) {
        // Hide every 2nd tick label
        return index % 5 === 0 ? this.getLabelForValue(val) : '';
      },
        }
      }
    }
  }

};

const barChart = new Chart(
    document.querySelector(".chart2"),
    config,
);

const barChart2 = new Chart(
  document.querySelector(".chart"),
  config2,
)

document
  .querySelector(`.demoGr`)
  .addEventListener(`click`, startGr);

  function onClickButton1() {
    if (g < 50) {
     
      
    list.push({
        pref: `${list.length}`,
        patients: data1[g],
      });
      list2.push({
        pref2: `${list2.length}`,
        patients2: data2[g],
      });
      list3.push({
        pref3: `${list3.length}`,
        patients3: data3[g],
      });
      list4.push({
        pref4: `${list4.length}`,
        patients4: data4[g],
      });
      list5.push({
        pref5: `${list5.length}`,
        patients5: data5[g],
      });
      list6.push({
        pref6: `${list6.length}`,
        patients6: data6[g],
      });
      list7.push({
        pref7: `${list7.length}`,
        patients7: data7[g],
      });
      list8.push({
        pref8: `${list8.length}`,
        patients8: data8[g],
      });
      g++;
      updateChart();
      updateChart2();
    } else if ( g >= 50) {
        clearInterval(grInterval)
    }
  }

  function updateChart() {
    barChart.data.labels = list.map(
      (item) => item.pref
    );
    barChart.data.datasets[0].data = list.map((item) => item.patients);
  
    barChart.data.labels = list2.map(
      (item2) => item2.pref2
    );
    barChart.data.datasets[1].data = list2.map((item2) => item2.patients2);
  
    barChart.data.labels = list3.map(
      (item3) => item3.pref3
    );
    barChart.data.datasets[2].data = list3.map((item3) => item3.patients3);
  
    barChart.data.labels = list4.map(
      (item4) => item4.pref4
    );
    barChart.data.datasets[3].data = list4.map((item4) => item4.patients4);

    barChart.update();
  }

  function updateChart2() {

    barChart2.data.labels = list5.map(
      (item5) => item5.pref5
    );
    barChart2.data.datasets[0].data = list5.map((item5) => item5.patients5);
  
    barChart2.data.labels = list6.map(
      (item6) => item6.pref6
    );
    barChart2.data.datasets[1].data = list6.map((item6) => item6.patients6);
  
    barChart2.data.labels = list7.map(
      (item7) => item7.pref7
    );
    barChart2.data.datasets[2].data = list7.map((item7) => item7.patients7);
  
    barChart2.data.labels = list8.map(
      (item8) => item8.pref8
    );
    barChart2.data.datasets[3].data = list8.map((item8) => item8.patients8);

    barChart2.update();
  }

  let grInterval;

  function startGr() {
    grInterval = setInterval(onClickButton1, 1000)
  }