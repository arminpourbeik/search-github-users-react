import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2d from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Column2d, FusionTheme)

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Fork',
        theme: 'fusion',
        yAxisName: 'Forks',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
