const list: { pref: string; patients: number }[] = [];
const list2: { pref2: string; patients2: number }[] = [];
const list3: { pref3: string; patients3: number }[] = [];
const list4: { pref4: string; patients4: number }[] = [];
let g = 0;
const data1 = [0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 12, 18, 28, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 34, 36, 32, 36, 36, 36, 36, 36, 28, 24, 22, 15, 10, 10, 0, 0];
const data2 = [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 8, 12, 20, 22, 24, 30, 30, 30, 30, 30, 32, 32, 32, 30, 30, 30, 34, 34, 36, 36, 38, 34, 32, 30, 30, 30, 30, 30, 30, 28, 28, 28, 22, 20, 20, 20, 12, 4, 2, 0];
const data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 14, 14, 16, 16, 16, 14, 14, 14, 14, 14, 16, 12, 12, 12, 14, 14, 16, 12, 16, 16, 16, 16, 16, 18, 14, 12, 6, 4, 0, 0, 0];
const data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 20, 22, 22, 22, 22, 22, 24, 24, 24, 22, 22, 26, 28, 22, 18, 16, 12, 8, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
          }
        ]
}

const config = {

    type: 'line',
    data,


    options: {
      
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



document
  .querySelector(`.demoGr`)
  .addEventListener(`click`, startGr);

  function onClickButton1() {
    if (g < 50) {
        // データを追加
        console.log(list2);
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
      g++;
      // チャートを更新
      updateChart();
    } else if ( g >= 50) {
        clearInterval(grInterval)
    }
  }

  function updateChart() {
    barChart.data.labels = list.map(
      (item) => item.pref
    );
    console.log(barChart.data.labels);
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

  let grInterval;

  function startGr() {
    grInterval = setInterval(onClickButton1, 1000)
  }