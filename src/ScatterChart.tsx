import {
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface ScatterChartProps {
  data: Record<string, unknown>[];
  xKey?: string;
  yKey?: string;
  title?: string;
  color?: string;
}

export function ScatterChart({
  data,
  xKey = 'x',
  yKey = 'y',
  title,
  color = '#6366f1'
}: ScatterChartProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      {title && (
        <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RechartsScatterChart>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis type="number" dataKey={xKey} stroke="#9CA3AF" fontSize={12} />
          <YAxis type="number" dataKey={yKey} stroke="#9CA3AF" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '6px',
            }}
          />
          <Scatter name="Data" data={data} fill={color} />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
