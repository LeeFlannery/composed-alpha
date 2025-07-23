'use client';

import { useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

interface StatChartProps {
  value: number;
  type: 'number' | 'percentage' | 'currency';
  size?: number;
  maxValue?: number;
}

export default function StatChart({ value, type, size = 60, maxValue }: StatChartProps) {
  const chartRef = useRef<ChartJS<'doughnut'>>(null);

  // Calculate percentage for doughnut chart
  const getPercentageValue = () => {
    if (type === 'percentage') {
      return Math.min(value, 100);
    }
    if (type === 'number' && maxValue) {
      return Math.min((value / maxValue) * 100, 100);
    }
    // For currency, we'll use a logarithmic scale approximation
    if (type === 'currency') {
      const logValue = Math.log10(Math.max(value, 1));
      return Math.min(logValue * 20, 100); // Scale log value to percentage
    }
    return 75; // Default fallback
  };

  const percentage = getPercentageValue();

  // Color based on value and type
  const getColor = () => {
    if (type === 'currency') return '#10b981'; // Green for money
    if (type === 'percentage') {
      if (percentage >= 80) return '#10b981'; // Green
      if (percentage >= 60) return '#f59e0b'; // Yellow
      return '#ef4444'; // Red
    }
    // For numbers, use a gradient based on value
    if (percentage >= 75) return '#8b5cf6'; // Purple
    if (percentage >= 50) return '#3b82f6'; // Blue
    return '#6b7280'; // Gray
  };

  const color = getColor();

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, '#f3f4f6'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animation: {
      animateRotate: true,
      duration: 1000,
    },
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Doughnut ref={chartRef} data={data} options={options} />
      {/* Center icon based on type */}
      <div className="absolute inset-0 flex items-center justify-center">
        {type === 'currency' && (
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {type === 'percentage' && (
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {type === 'number' && (
          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
