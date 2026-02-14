import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export interface PieChartProps {
  data: Record<string, unknown>[];
  dataKey?: string;
  nameKey?: string;
  title?: string;
  colors?: string[];
}

const DEFAULT_COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export function PieChart({
  data,
  dataKey = 'value',
  nameKey = 'name',
  title,
  colors = DEFAULT_COLORS
}: PieChartProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      {title && (
        <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            outerRadius={60}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '6px',
            }}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
