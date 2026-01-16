"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function LineChart({
  labels,
  values,
  stroke = "#f97316",
  fill = "rgba(249,115,22,0.15)",
}: {
  labels: string[];
  values: number[];
  stroke?: string;
  fill?: string;
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
      type: "line",
      data: {
        labels,
        datasets: [
          {
            data: values,
            borderColor: stroke,
            backgroundColor: fill,
            tension: 0.35,
            fill: true,
            pointRadius: 0,
            borderWidth: 2,
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
  }, [labels, values, stroke, fill]);

  return (
    <canvas ref={canvasRef} className="h-full w-full" />
  );
}
