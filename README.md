# DevDash Charts

A lightweight React chart library built on Recharts for dashboard applications.

## Installation

```bash
npm install @devdash/charts
```

## Usage

```tsx
import { LineChart, BarChart, PieChart } from '@devdash/charts';

function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <LineChart 
        data={salesData} 
        xKey="month" 
        dataKey="revenue"
        title="Monthly Revenue"
      />
      <BarChart 
        data={categoryData}
        xKey="category"
        dataKey="count"
        title="Sales by Category"
      />
    </div>
  );
}
```

## Components

- **LineChart** - Line charts for time series data
- **BarChart** - Bar charts for categorical data
- **AreaChart** - Area charts for cumulative data
- **PieChart** - Pie charts for proportional data
- **ScatterChart** - Scatter plots for correlation data

## Props

All charts accept:
- `data` - Array of data objects
- `xKey` - Key for x-axis
- `dataKey` - Key for y-axis values
- `title` - Optional chart title
- `color` - Optional custom color

## License

MIT
