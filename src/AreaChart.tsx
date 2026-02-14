import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface AreaChartProps {
  data: Record<string, unknown>[];
  xKey?: string;
  dataKey?: string;
  title?: string;
  color?: string;
}

export function AreaChart({
  data,
  xKey = 'name',
  dataKey = 'value',
  title,
  color = '#6366f1'
}: AreaChartProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      {title && (
        <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RechartsAreaChart data={data}>
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
          <Area 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            fill={color} 
            fillOpacity={0.3} 
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
