"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function BarChart({
  labels,
  values,
  color = "#fb7185",
}: {
  labels: string[];
  values: number[];
  color?: string;
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
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: color,
            borderRadius: 10,
            maxBarThickness: 32,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#94a3b8", font: { size: 10 } },
          },
          y: {
            grid: { color: "rgba(148,163,184,0.2)" },
            ticks: { color: "#94a3b8", font: { size: 10 } },
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [labels, values, color]);

  return (
    <canvas ref={canvasRef} className="h-full w-full" />
  );
}
