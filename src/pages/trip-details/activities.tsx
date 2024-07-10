import { CircleCheck } from "lucide-react";

export const Activities = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 shadow-shape rounded-xl bg-zinc-900 flex items-center gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 shadow-shape rounded-xl bg-zinc-900 flex items-center gap-3">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
          </div>
        </div>
      </div>
    </div>
  );
};
