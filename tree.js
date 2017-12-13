
    // Create the chart
    // The normalized values are calculated by dividing the total incidents by population and multiplied by 100000000
    // Google sheets url: https://docs.google.com/spreadsheets/d/1CSSXuFN5lJJedAS7RO-8HkL2VNi_ljtsly5Cnq04V6M/edit#gid=0
    // IF using google sheets, or even csv, follow the heirarchy as in the google sheets.
    // to change the color scheme go to the google sheets and change appropriate colors for the categories
  var chart = Highcharts.chart('container', {
    		xAxis: {
				// Avoid data module setting axis type to category.
				type: 'linear'
				},
        series: [{
            type: "treemap",
            layoutAlgorithm: 'strip',
            alternateStartingDirection: true,

            levels: [{
                level: 1,
                layoutAlgorithm: 'strip',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold'
                    }
                }
            }]
        }],

        title: {
            text: 'Hate Crimes by Motivation across US'
        },
        data: {
            googleSpreadsheetKey: '1CSSXuFN5lJJedAS7RO-8HkL2VNi_ljtsly5Cnq04V6M',
            googleSpreadsheetWorksheet : '1',
            seriesMapping: [{
				id: 1,
        name: 1,
                value: 2,
                parent: 3,
                color: 4

			}]
    },
    tooltip: {
            formatter: function() {
              //console.log(this);
              if(this.point.parent == null){
                return '<b>'+ this.key +': </b>' + this.point.value + '<br>'
              }
                return '<b> Parent : ' + this.point.parent +'</b><br><b>'+ this.key +': </b>' + this.point.value + '<br>'
                //return
            }
        }
    });
