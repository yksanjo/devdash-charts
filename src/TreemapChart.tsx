import {
  Treemap as RechartsTreemap,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface TreemapChartProps {
  data: Record<string, unknown>[];
  dataKey?: string;
  nameKey?: string;
  title?: string;
  colors?: string[];
}

const DEFAULT_COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

interface CustomContentProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  name?: string;
  value?: number;
}

function CustomizedContent({ x = 0, y = 0, width = 0, height = 0, index = 0, name = '' }: CustomContentProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: DEFAULT_COLORS[index % DEFAULT_COLORS.length],
          stroke: '#1F2937',
          strokeWidth: 2,
        }}
      />
      {width > 50 && height > 20 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#fff"
          fontSize={12}
        >
          {name}
        </text>
      )}
    </g>
  );
}

export function TreemapChart({
  data,
  dataKey = 'value',
  nameKey = 'name',
  title,
}: TreemapChartProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      {title && (
        <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RechartsTreemap
          data={data}
          dataKey={dataKey}
          aspectRatio={4 / 3}
          stroke="#1F2937"
          content={<CustomizedContent />}
        >
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '6px',
            }}
          />
        </RechartsTreemap>
      </ResponsiveContainer>
    </div>
  );
}
