
    const { Grid } = require('ag-grid-community');
    const milkColumnDefs = [
      { headerName: 'Время', field: 'Время начала доения', width: 140, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Животное', field: 'ID Коровы', width: 100, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Надой (план/факт)', field: 'Фактический / Ожидаемый надой', width: 150, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'ЧВД', field: 'Время доения', width: 80, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Направление молока', field: 'Конечная точка транспортировки молока', width: 190, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Результат', field: 'Результат доения', width: 155, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
    ];

    const milkGridOptions = {

      getRowClass: params => {
        if (params.node.rowIndex % 2 === 0) {
            return 'white-row';
        } else 
        return "gray-row"
    },
    


      columnDefs: milkColumnDefs,

      onGridReady: (event) => { milkRenderDataInTheTable(event.api) },
      rowSelection: 'single',
      overflow: scroll,
    };



    const milkEGridDiv = document.getElementById('milk-table');
    new Grid(milkEGridDiv, milkGridOptions);

    function milkRenderDataInTheTable(api) {
      fetch('./milk.json')
        .then(function (response) {
          return response.json();
        }).then(function (data) {
          api.setRowData(data);

        })
    }
    const washColumnDefs = [
      { headerName: 'Время', field: 'Время начала промывки', width: 205, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Тип', field: 'Тип промывки', width: 205, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Продолжительность', field: 'Время промывки', width: 200, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Результат', field: 'Результат промывки', width: 205, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
    ];

    const washGridOptions = {
      getRowClass: params => {
        if (params.node.rowIndex % 2 === 0) {
            return 'white-row';
        } else 
        return "gray-row"
    },
      onGridReady: (event) => { washRenderDataInTheTable(event.api) },
      columnDefs: washColumnDefs,
      rowData: null,
      rowSelection: 'single',
    };

    const washEGridDiv = document.getElementById('wash-table');
    new Grid(washEGridDiv, washGridOptions);

    function washRenderDataInTheTable(api) {
      fetch('./wash.json')
        .then(function (response) {
          return response.json();
        }).then(function (data) {
          api.setRowData(data);
        })
    }
    const newAlarmColumnDefs = [
      { headerName: 'Время ошибки', field: 'Время возникновения ошибки', width: 134, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Тип ошибки', field: 'Тип сигнализации', width: 290, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Подробности', field: 'Описание ошибки', width: 290, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
    ];

    const newAlarmGridOptions = {
      getRowClass: params => {
        if (params.node.rowIndex % 2 === 0) {
            return 'white-row';
        } else 
        return "gray-row"
      },
      columnDefs: newAlarmColumnDefs,
      rowData: null,
      rowSelection: 'single',
      onGridReady: (event) => { newAlarmRenderDataInTheTable(event.api) }
    };

    const newAlarmEGridDiv = document.getElementById('new-alarm-table');
    new Grid(newAlarmEGridDiv, newAlarmGridOptions);

    function newAlarmRenderDataInTheTable(api) {
      fetch('./new-alarm.json')
        .then(function (response) {
          return response.json();
        }).then(function (data) {
          api.setRowData(data);
        })
    }

    const alarmListColumnDefs = [
      { headerName: 'Время ошибки', field: 'Время возникновения ошибки', width: 134, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Тип ошибки', field: 'Тип сигнализации', width: 290, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
      { headerName: 'Подробности', field: 'Описание ошибки', width: 290, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
    ];

    const alarmListGridOptions = {
      getRowClass: params => {
        if (params.node.rowIndex % 2 === 0) {
            return 'white-row';
        } else 
        return "gray-row"
    },
      columnDefs: alarmListColumnDefs,
      rowData: null,
      rowSelection: "multiple",
      onGridReady: (event) => { alarmListRenderDataInTheTable(event.api) }
    };

    const alarmListEGridDiv = document.getElementById('alarm-list-table');
    new Grid(alarmListEGridDiv, alarmListGridOptions);

    function alarmListRenderDataInTheTable(api) {
      fetch('./alarm-list.json')
        .then(function (response) {
          return response.json();
        }).then(function (data) {
          api.setRowData(data);
        })
    }