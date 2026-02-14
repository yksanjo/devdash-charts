import {
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface RadarChartProps {
  data: Record<string, unknown>[];
  dataKey?: string;
  nameKey?: string;
  title?: string;
  color?: string;
}

export function RadarChart({
  data,
  dataKey = 'value',
  nameKey = 'subject',
  title,
  color = '#6366f1'
}: RadarChartProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      {title && (
        <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RechartsRadarChart data={data}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey={nameKey} stroke="#9CA3AF" fontSize={12} />
          <PolarRadiusAxis stroke="#374151" fontSize={10} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '6px',
            }}
          />
          <Radar name="Data" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.3} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
