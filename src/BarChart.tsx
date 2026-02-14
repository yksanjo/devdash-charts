import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface BarChartProps {
  data: Record<string, unknown>[];
  xKey?: string;
  dataKey?: string;
  title?: string;
  color?: string;
}

export function BarChart({
  data,
  xKey = 'name',
  dataKey = 'value',
  title,
  color = '#6366f1'
}: BarChartProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      {title && (
        <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey={xKey} stroke="#9CA3AF" fontSize={12} />
          <YAxis stroke="#9CA3AF" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '6px',
            }}
          />
          <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
