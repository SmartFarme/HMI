let list00: { pref00: string; patients00: number }[] = [];
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
let list17: { pref17: string; patients17: number }[] = [];
let g = 0;
const data00 = [];
const data1 = [0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 12, 18, 28, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 34, 36, 32, 36, 36, 36, 36, 36, 28, 24, 22, 15, 10, 10, 0, 0];
const data2 = [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 8, 12, 20, 22, 24, 30, 30, 30, 30, 30, 32, 32, 32, 30, 30, 30, 34, 34, 36, 36, 38, 34, 32, 30, 30, 30, 30, 30, 30, 28, 28, 28, 22, 20, 20, 20, 12, 4, 2, 0];
const data3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 14, 14, 16, 16, 16, 14, 14, 14, 14, 14, 16, 12, 12, 12, 14, 14, 16, 12, 16, 16, 16, 16, 16, 18, 14, 12, 6, 4, 0, 0, 0];
const data4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 20, 22, 22, 22, 22, 22, 24, 24, 24, 22, 22, 26, 28, 22, 18, 16, 12, 8, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const data5 = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1];
const data6 = [3, 4, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 4, 3, 3, 3];
const data7 = [5, 6, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 5];
const data8 = [7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 7, 8, 7, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 7, 8];
const data9 = [35, 36, 37, 35, 38, 35, 40, 40, 38, 42, 42, 42, 39, 42, 36, 37, 40, 35, 35, 38, 40, 42, 39, 35, 40, 36, 42, 35, 35, 35, 35, 42, 41, 39, 41, 39, 36, 35, 42, 41, 38, 38, 36, 36, 36, 39, 39, 40, 35, 41];
const data10 = [36, 39, 36, 42, 40, 37, 42, 35, 38, 37, 37, 41, 41, 36, 41, 37, 39, 42, 38, 38, 39, 37, 42, 40, 40, 35, 38, 37, 41, 37, 38, 41, 36, 36, 41, 41, 40, 36, 37, 35, 41, 37, 35, 35, 40, 35, 35, 37, 39, 39];
const data11 = [41, 39, 41, 35, 39, 42, 41, 41, 36, 38, 35, 37, 41, 40, 35, 40, 35, 36, 39, 42, 41, 41, 41, 35, 40, 37, 36, 35, 40, 35, 41, 36, 38, 40, 41, 39, 39, 36, 41, 41, 42, 37, 37, 38, 37, 39, 36, 38, 37, 41];
const data12 = [37, 35, 42, 40, 38, 41, 37, 37, 39, 37, 36, 37, 36, 37, 41, 39, 40, 35, 40, 35, 37, 38, 41, 37, 39, 36, 40, 42, 38, 40, 39, 40, 40, 41, 36, 42, 42, 37, 38, 40, 41, 38, 35, 39, 35, 42, 38, 40, 38, 36];
const data13 = [1499, 1466, 1543, 1423, 1415, 1534, 1553, 1449, 1599, 1538, 1493, 1538, 1424, 1547, 1547, 1438, 1544, 1487, 1593, 1562, 1493, 1408, 1419, 1540, 1534, 1583, 1507, 1477, 1425, 1497, 1551, 1439, 1557, 1515, 1462, 1479, 1436, 1528, 1546, 1454, 1466, 1527, 1469, 1582, 1600, 1408, 1509, 1592, 1555, 1421];
const data14 = [1503, 1493, 1504, 1414, 1592, 1440, 1407, 1431, 1586, 1422, 1581, 1489, 1597, 1493, 1469, 1599, 1430, 1440, 1406, 1402, 1574, 1587, 1521, 1482, 1574, 1575, 1441, 1515, 1418, 1500, 1593, 1406, 1568, 1563, 1495, 1589, 1513, 1597, 1581, 1595, 1445, 1458, 1458, 1467, 1530, 1566, 1456, 1497, 1554, 1513];
const data15 = [1474, 1449, 1470, 1515, 1561, 1598, 1544, 1587, 1596, 1498, 1579, 1407, 1588, 1595, 1520, 1428, 1507, 1512, 1567, 1571, 1400, 1528, 1408, 1433, 1464, 1581, 1583, 1486, 1461, 1417, 1563, 1456, 1548, 1434, 1427, 1413, 1474, 1498, 1576, 1570, 1577, 1543, 1448, 1500, 1466, 1482, 1591, 1478, 1454, 1433];
const data16 = [1459, 1531, 1597, 1550, 1405, 1489, 1489, 1452, 1434, 1430, 1414, 1427, 1486, 1500, 1495, 1484, 1414, 1408, 1408, 1486, 1551, 1420, 1404, 1570, 1534, 1578, 1449, 1457, 1542, 1496, 1562, 1525, 1520, 1427, 1562, 1446, 1438, 1563, 1407, 1484, 1569, 1595, 1401, 1404, 1481, 1451, 1592, 1440, 1574, 1492];
const data17 = [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500];
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
    },
    {
      label: '17',
      data: list17.map((item17) => item17.patients17),
      borderColor: '#000000',
      borderWidth: 2,
      backgroundColor: '#000000',
      cubicInterpolationMode: 'monotone',
    }
  ]
}

const data_3 = {
  labels: [],
  datasets: [  
    {
      label: '00',
      data: list00.map((item00) => item00.patients00),
      borderColor: '#000000',
      borderWidth: 3,
      backgroundColor: '#000000',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '9',
      data: list9.map((item9) => item9.patients9),
      borderColor: '#22b14c',
      borderWidth: 2,
      backgroundColor: '#22b14c',
      cubicInterpolationMode: 'monotone',
    },
    // добавили еще один график с другими значениями и цветом
    {
      label: '10',
      data: list10.map((item10) => item10.patients10),
      borderColor: '#00a2e8',
      borderWidth: 2,
      backgroundColor: '#00a2e8',
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '11',
      data: list11.map((item11) => item11.patients11),
      borderColor: '#ed1c24',
      borderWidth: 2,
      backgroundColor: '#ed1c24',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '12',
      data: list12.map((item12) => item12.patients12),
      borderColor: '#ffc90e',
      borderWidth: 2,
      backgroundColor: '#ffc90e',
      cubicInterpolationMode: 'monotone',
    }
  ]
}

const data_4 = {
  datasets: [  
    {
      label: '13',
      data: list13.map((item13) => item13.patients13),
      borderColor: '#22b14c',
      borderWidth: 2,
      backgroundColor: '#22b14c',
      cubicInterpolationMode: 'monotone',
    },
    // добавили еще один график с другими значениями и цветом
    {
      label: '14',
      data: list14.map((item14) => item14.patients14),
      borderColor: '#00a2e8',
      borderWidth: 2,
      backgroundColor: '#00a2e8',
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '15',
      data: list15.map((item15) => item15.patients15),
      borderColor: '#ed1c24',
      borderWidth: 2,
      backgroundColor: '#ed1c24',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '16',
      data: list16.map((item16) => item16.patients16),
      borderColor: '#ffc90e',
      borderWidth: 2,
      backgroundColor: '#ffc90e',
      cubicInterpolationMode: 'monotone',
    },
    {
      label: '17',
      data: list17.map((item17) => item17.patients17),
      borderColor: '#000000',
      borderWidth: 2,
      backgroundColor: '#000000',
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

      data00.push((data9[g]+data10[g]+data11[g]+data12[g])/4)
      console.log(list2)
      
      list00.push({
        pref00: `${list00.length}`,
        patients00: data00[g],
      });
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
      list9.push({
        pref9: `${list9.length}`,
        patients9: data9[g],
      });
      list10.push({
        pref10: `${list10.length}`,
        patients10: data10[g],
      });
      list11.push({
        pref11: `${list11.length}`,
        patients11: data11[g],
      });
      list12.push({
        pref12: `${list12.length}`,
        patients12: data12[g],
      });
      list13.push({
        pref13: `${list13.length}`,
        patients13: data13[g],
      });
      list14.push({
        pref14: `${list14.length}`,
        patients14: data14[g],
      });
      list15.push({
        pref15: `${list15.length}`,
        patients15: data15[g],
      });
      list16.push({
        pref16: `${list16.length}`,
        patients16: data16[g],
      });
      list17.push({
        pref17: `${list17.length}`,
        patients17: data17[g],
      });
      g++;
      updateChart();
      updateChart2();
      updateChart3();
      updateChart4();
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

  function updateChart3() {

    barChart3.data.labels = list00.map(
      (item00) => item00.pref00
    );
    barChart3.data.datasets[0].data = list00.map((item00) => item00.patients00);

    barChart3.data.labels = list9.map(
      (item9) => item9.pref9
    );
    barChart3.data.datasets[1].data = list9.map((item9) => item9.patients9);
  
    barChart3.data.labels = list10.map(
      (item10) => item10.pref10
    );
    barChart3.data.datasets[2].data = list10.map((item10) => item10.patients10);
  
    barChart3.data.labels = list11.map(
      (item11) => item11.pref11
    );
    barChart3.data.datasets[3].data = list11.map((item11) => item11.patients11);
  
    barChart3.data.labels = list12.map(
      (item12) => item12.pref12
    );
    barChart3.data.datasets[4].data = list12.map((item12) => item12.patients12);

    barChart3.update();
  }

  function updateChart4() {

    barChart4.data.labels = list13.map(
      (item13) => item13.pref13
    );
    barChart4.data.datasets[0].data = list13.map((item13) => item13.patients13);
  
    barChart4.data.labels = list14.map(
      (item14) => item14.pref14
    );
    barChart4.data.datasets[1].data = list14.map((item14) => item14.patients14);
  
    barChart4.data.labels = list15.map(
      (item15) => item15.pref15
    );
    barChart4.data.datasets[2].data = list15.map((item15) => item15.patients15);
  
    barChart4.data.labels = list16.map(
      (item16) => item16.pref16
    );
    barChart4.data.datasets[3].data = list16.map((item16) => item16.patients16);

    barChart4.data.labels = list17.map(
      (item17) => item17.pref17
    );
    barChart2.data.datasets[4].data = list17.map((item17) => item17.patients17);

    barChart4.update();
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
    list9=[];
    list10=[];
    list11=[];
    list12=[];
    list13=[];
    list14=[];
    list15=[];
    list16=[];
    updateChart();
    updateChart2();
    updateChart3();
    updateChart4();
  }