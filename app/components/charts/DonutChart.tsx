"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function DonutChart({
  labels,
  values,
  colors,
}: {
  labels: string[];
  values: number[];
  colors: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [labels, values, colors]);

  return (
    <canvas ref={canvasRef} className="h-full w-full" />
  );
}
