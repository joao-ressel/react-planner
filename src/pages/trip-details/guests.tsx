import { CircleDashed, UserCog } from "lucide-react";

export const Guests = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 ">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica.white@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400" />
        </div>
      </div>
      <button className="w-full justify-center bg-zinc-800 px-5 h-11 text-zinc-200 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
};
