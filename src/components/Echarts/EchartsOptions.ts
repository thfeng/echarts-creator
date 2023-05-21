import { AXIS_TYPE, SERIES_TYPE } from "../../common/Constant"

export interface EchartsOptionsSeriesItem {
  name: string,
  type: SERIES_TYPE,
  data: number[]
}

export interface EchartsOptionsModel {
  title?: {
    text?: string 
  },
  tooltip?: {
    show?: boolean
  },
  legend?: {
    data?: string[]
  },
  xAxis: {
    type: AXIS_TYPE,
    data?: string[] | number[]
  },
  yAxis: {
    type: AXIS_TYPE,
    data?: string[] | number[]
  },
  series: EchartsOptionsSeriesItem[]
}