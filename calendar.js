     
  var options = {
    series: [{
    name: 'commits',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }],
    chart: {
    id: 'chartyear',
    type: 'area',
    height: 160,
    background: '#F6F8FA',
    toolbar: {
      show: false,
      autoSelected: 'pan'
    },
    events: {
      mounted: function (chart) {
        var commitsEl = document.querySelector('.cmeta span.commits');
        var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX)
  
        commitsEl.innerHTML = commits
      },
      updated: function (chart) {
        var commitsEl = document.querySelector('.cmeta span.commits');
        var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX)
  
        commitsEl.innerHTML = commits
      }
    }
  },
  colors: ['#FF7F00'],
  stroke: {
    width: 0,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
    type: 'solid'
  },
  yaxis: {
    show: false,
    tickAmount: 3,
  },
  xaxis: {
    type: 'datetime',
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
