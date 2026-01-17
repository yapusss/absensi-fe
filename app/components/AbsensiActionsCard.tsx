type AbsensiAction = {
  title: string;
  note: string;
  endpoint: string;
  tone: string;
};

type AbsensiActionsCardProps = {
  title: string;
  badge?: string;
  badgeClassName?: string;
  actions: AbsensiAction[];
  className?: string;
};

export function AbsensiActionsCard({
  title,
  badge,
  badgeClassName = "text-xs text-slate-400",
  actions,
  className,
}: AbsensiActionsCardProps) {
  return (
    <article className={className ?? ""}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {badge ? <span className={badgeClassName}>{badge}</span> : null}
      </div>
      <div className="mt-4 space-y-3">
        {actions.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <span
                className={`grid h-9 w-9 place-items-center rounded-lg ${item.tone}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M12 8v5l3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
              {item.endpoint}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
