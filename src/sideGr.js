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

    barChart4.update();
  }