import { BarChart } from "@/app/components/charts/BarChart";

type WorkPerformanceCardProps = {
  label?: string;
  className?: string;
  chartClassName?: string;
  labels: string[];
  values: number[];
  color?: string;
};

export function WorkPerformanceCard({
  label = "Performa jam kerja",
  className,
  chartClassName = "h-44 sm:h-48",
  labels,
  values,
  color = "#fb7185",
}: WorkPerformanceCardProps) {
  return (
    <article className={className ?? ""}>
      {label ? (
        <h2 className="text-lg font-semibold text-slate-900">{label}</h2>
      ) : null}
      <div className={`mt-4 ${chartClassName}`}>
        <BarChart labels={labels} values={values} color={color} />
      </div>
    </article>
  );
}
