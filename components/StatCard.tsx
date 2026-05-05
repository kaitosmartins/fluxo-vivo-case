export function StatCard({
  value,
  label,
  tone = "green"
}: {
  value: string;
  label: string;
  tone?: "green" | "orange";
}) {
  const toneClass = tone === "orange" ? "bg-brand-accentSoft text-orange-900" : "bg-brand-light text-brand-dark";

  return (
    <div className={`rounded-2xl p-3 ${toneClass}`}>
      <p className="text-lg font-black leading-none">{value}</p>
      <p className="mt-1 text-xs font-semibold leading-4 opacity-80">{label}</p>
    </div>
  );
}
