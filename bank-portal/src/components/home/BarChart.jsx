import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';


//Sample data
const data = [
  { month: 'JAN', balance: 5000 },
  { month: 'FEB', balance: 8000 },
  { month: 'MAR', balance: 25000 },
  { month: 'APR', balance: 90000 },
  { month: 'MAY', balance: 65000 },
  { month: 'JUN', balance: 45000 },
  { month: 'JUL', balance: 15000 },
  { month: 'AUG', balance: 55000 },
  { month: 'SEP', balance: 95000 },
  { month: 'OCT', balance: 73250 },
  { month: 'NOV', balance: 8000 },
  { month: 'DEC', balance: 35000 }
];

export default class BarChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper style={{backgroundColor:"#f5f5fd", padding:"20px"}}>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={12} />

          <BarSeries
            valueField="balance"
            argumentField="month"
            color="black"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}