import { DonutChart } from "@/app/components/charts/DonutChart";

type AbsensiSummaryCardProps = {
  title?: string;
  eyebrow?: string;
  badge?: string;
  badgeClassName?: string;
  labels: string[];
  values: number[];
  colors: string[];
  className?: string;
  headline?: string;
};

const legendStyles = [
  {
    pill: "bg-emerald-50 text-emerald-600",
    dot: "bg-emerald-500",
  },
  {
    pill: "bg-orange-50 text-orange-600",
    dot: "bg-orange-500",
  },
  {
    pill: "bg-amber-50 text-amber-600",
    dot: "bg-amber-500",
  },
];

export function AbsensiSummaryCard({
  title,
  eyebrow,
  badge,
  badgeClassName = "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500",
  labels,
  values,
  colors,
  className,
  headline,
}: AbsensiSummaryCardProps) {
  const heading = title ?? eyebrow;
  const hasHeader = heading || badge;
  const headlineText = headline ?? `${values[0] ?? 0}% hadir`;

  return (
    <article className={className ?? ""}>
      {hasHeader ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {heading ? (
            <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
          ) : null}
          {badge ? <span className={badgeClassName}>{badge}</span> : null}
        </div>
      ) : null}
      <div
        className={`flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6 ${
          hasHeader ? "mt-4" : ""
        }`}
      >
        <div className="h-40 w-40 sm:h-44 sm:w-44 sm:mx-0">
          <DonutChart labels={labels} values={values} colors={colors} />
        </div>
        <div className="space-y-2 text-xs text-slate-500">
          <p className="text-lg font-semibold text-slate-900">{headlineText}</p>
          {labels.map((label, index) => {
            const style = legendStyles[index] ?? {
              pill: "bg-slate-100 text-slate-600",
              dot: "bg-slate-400",
            };
            return (
              <span
                key={label}
                className={`flex items-center gap-2 rounded-full px-3 py-1 ${style.pill}`}
              >
                <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                {label} {values[index] ?? 0}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}
