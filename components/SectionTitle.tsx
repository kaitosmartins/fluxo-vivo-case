export function SectionTitle({
  title,
  action
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-base font-black text-brand-text">{title}</h2>
      {action ? <span className="text-xs font-bold text-brand-primary">{action}</span> : null}
    </div>
  );
}
