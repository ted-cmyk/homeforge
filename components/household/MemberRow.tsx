// components/household/MemberRow.tsx
type Member = {
  id: string;
  name: string;
  color: string; // hex
  subtitle?: string;
};

export default function MemberRow({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#152744]/40 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div
        className="h-10 w-10 rounded-2xl border border-white/10"
        style={{ background: member.color }}
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-[#EAF0FF]">
          {member.name}
        </div>
        {member.subtitle ? (
          <div className="mt-0.5 text-xs text-[#7C88B3]">{member.subtitle}</div>
        ) : null}
      </div>
    </div>
  );
}