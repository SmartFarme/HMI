let list: { pref: string; patients: number }[] = [];
let list2: { pref2: string; patients2: number }[] = [];
let list3: { pref3: string; patients3: number }[] = [];
let list4: { pref4: string; patients4: number }[] = [];
let list5: { pref5: string; patients5: number }[] = [];
let list6: { pref6: string; patients6: number }[] = [];
let list7: { pref7: string; patients7: number }[] = [];
let list8: { pref8: string; patients8: number }[] = [];
let list9: { pref9: string; patients9: number }[] = [];
let list10: { pref10: string; patients10: number }[] = [];
let list11: { pref11: string; patients11: number }[] = [];
let list12: { pref12: string; patients12: number }[] = [];
let list13: { pref13: string; patients13: number }[] = [];
let list14: { pref14: string; patients14: number }[] = [];
let list15: { pref15: string; patients15: number }[] = [];
let list16: { pref16: string; patients16: number }[] = [];
let g = 0;
const data1 = [0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 12, 18, 28, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 34, 36, 32, 36, 36, 36, 36, 36, 28, 24, 22, 15, 10, 10, 0, 0];
const data2 = [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 8, 12, 20, 22, 24, 30, 30, 30, 30, 30, 32, 32, 32, 30, 30, 30, 34, 34, 36, 36, 38, 34, 32, 30, 30, 30, 30, 30, 30, 28, 28, 28, 22, 20, 20, 20, 12, 4, 2, 0];
const data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 14, 14, 16, 16, 16, 14, 14, 14, 14, 14, 16, 12, 12, 12, 14, 14, 16, 12, 16, 16, 16, 16, 16, 18, 14, 12, 6, 4, 0, 0, 0];
const data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 20, 22, 22, 22, 22, 22, 24, 24, 24, 22, 22, 26, 28, 22, 18, 16, 12, 8, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const data5 = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1];
const data6 = [3, 4, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 4, 3, 3, 3];
const data7 = [5, 6, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 5];
const data8 = [7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 7, 8, 7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 7, 8];
const data9 = [25, 25, 25, 25, 27, 29, 29, 29, 30, 32, 32, 34, 34, 34, 34, 34, 34, 34, 34, 35, 34, 34, 30, 30, 34, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 37, 40, 40, 41, 38, 37, 38, 35, 37, 34, 35, 34, 34, 34, 35, 36];
const data10 = [33, 34, 34, 33, 33, 34, 33, 34, 33, 34, 33, 33, 34, 34, 34, 34, 34, 33, 44, 43, 33, 34, 44, 34, 34, 33, 43, 44, 34, 43, 33, 44, 33, 34, 33, 43, 33, 33, 34, 34, 43, 43, 44, 43, 44, 43, 43, 44, 44, 43, 34, 34];
const data11 = [35, 36, 38, 33, 32, 32, 31, 32, 35, 33, 34, 35, 35, 37, 38, 36, 36, 35, 42, 41, 41, 35, 35, 35, 25, 25, 25, 26, 25, 25, 26, 26, 25, 25, 25, 26, 36, 35, 35, 36, 36, 26, 26, 25, 35, 26, 35, 25, 35, 25, 25, 25];
const data12 = [27, 28, 38, 38, 27, 27, 37, 37, 37, 37, 41, 42, 36, 37, 38, 34, 29, 27, 24, 22, 21, 20, 22, 21, 23, 22, 22, 21, 23, 22, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 28, 28, 28, 28, 28, 27, 28];
const data13 = [1842, 1749, 1455, 1012, 1884, 1092, 1484, 1096, 1073, 1031, 1738, 1341, 1098, 1966, 1928, 1696, 1863, 1291, 1779, 1841, 1829, 1145, 1135, 1847, 1461, 1578, 1811, 1032, 1283, 1818, 1516, 1125, 1567, 1971, 1137, 1450, 1063, 1621, 1546, 1136, 1653, 1283, 1478, 1752, 1249, 1405, 1447, 1112, 1696, 1226];
const data14 = [1610, 1847, 1044, 1177, 1126, 1641, 1603, 1687, 1953, 1453, 1032, 1510, 1718, 1513, 1965, 1016, 1963, 1803, 1251, 1024, 1061, 1462, 1125, 1860, 1071, 1927, 1869, 1109, 1594, 1224, 1252, 1203, 1071, 1297, 1381, 1197, 1939, 1984, 1885, 1891, 1436, 1917, 1401, 1154, 1430, 1366, 1170, 1392, 1168, 1421];
const data15 = [1422, 1403, 1390, 1981, 1205, 1434, 1116, 1634, 1270, 1552, 1067, 1269, 1951, 1682, 1318, 1835, 1605, 1303, 1001, 1105, 1064, 1999, 1127, 1365, 1480, 1814, 1085, 1766, 1848, 1152, 1010, 1269, 1555, 1400, 1249, 1761, 1835, 1365, 1395, 1104, 1918, 1462, 1373, 1869, 1144, 1692, 1703, 1749, 1995, 1705];
const data16 = [1184, 1799, 1617, 1871, 1243, 1692, 1468, 1025, 1401, 1199, 1214, 1294, 1124, 1404, 1167, 1801, 1117, 1982, 1720, 1275, 1004, 1613, 1053, 1405, 1918, 1959, 1275, 1738, 1708, 1717, 1023, 1892, 1516, 1641, 1763, 1759, 1332, 1230, 1785, 1734, 1430, 1999, 1027, 1554, 1403, 1195, 1355, 1520, 1177, 1075];
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

const data_3 = {
  labels: [],
  datasets: [  
    {
      label: '9',
      data: list9.map((item9) => item9.patients9),
      borderColor: '#22b14c',
      borderWidth: 3,
      backgroundColor: '#22b14c',
      cubicInterpolationMode: 'monotone',
    },
    // добавили еще один график с другими значениями и цветом
    {
      label: '10',
      data: list10.map((item10) => item10.patients10),
      borderColor: '#00a2e8',
      borderWidth: 3,
      backgroundColor: '#00a2e8',
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '11',
      data: list11.map((item11) => item11.patients11),
      borderColor: '#ed1c24',
      borderWidth: 3,
      backgroundColor: '#ed1c24',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '12',
      data: list12.map((item12) => item12.patients12),
      borderColor: '#ffc90e',
      borderWidth: 3,
      backgroundColor: '#ffc90e',
      cubicInterpolationMode: 'monotone',
    }
  ]
}

const data_4 = {
  labels: [],
  datasets: [  
    {
      label: '13',
      data: list13.map((item13) => item13.patients13),
      borderColor: '#22b14c',
      borderWidth: 3,
      backgroundColor: '#22b14c',
      cubicInterpolationMode: 'monotone',
    },
    // добавили еще один график с другими значениями и цветом
    {
      label: '14',
      data: list14.map((item14) => item14.patients14),
      borderColor: '#00a2e8',
      borderWidth: 3,
      backgroundColor: '#00a2e8',
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '15',
      data: list15.map((item15) => item15.patients15),
      borderColor: '#ed1c24',
      borderWidth: 3,
      backgroundColor: '#ed1c24',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '16',
      data: list16.map((item16) => item16.patients16),
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

const config3 = {

  type: 'line',
  data: data_3,


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

const config4 = {

  type: 'line',
  data: data_4,


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
          stepSize: 1
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

const barChart3 = new Chart(
  document.querySelector(".chart3"),
  config3,
);

const barChart4 = new Chart(
  document.querySelector(".chart4"),
  config4,
);

const barChart2 = new Chart(
  document.querySelector(".chart"),
  config2,
)

document
  .querySelector(`.demoGr`)
  .addEventListener(`click`, startGr);

  document
  .querySelector(`.stopGr`)
  .addEventListener(`click`, stopGr);

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

  let onStart = false;
  let grInterval;

  function startGr() {
    if (!onStart) {
    grInterval = setInterval(onClickButton1, 1000)
    onStart = true;
    }
  }

  function stopGr() {
    onStart = false;
    clearInterval(grInterval);
    g=0;
    list=[];
    list2=[];
    list3=[];
    list4=[];
    list5=[];
    list6=[];
    list7=[];
    list8=[];
    updateChart();
    updateChart2();
  }