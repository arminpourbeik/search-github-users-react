import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Pie2d from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Pie2d, FusionTheme)

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '60%',
      },
      data: data,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
