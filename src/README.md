#Charts Creator

## Default options
```javascript
var options = {
  title: {
    text: 'New Chart'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    type: 'category',
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}
```