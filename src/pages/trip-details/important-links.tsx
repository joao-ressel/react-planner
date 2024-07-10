import { Link2, Plus } from "lucide-react";

export const ImportantLinks = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 ">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://www.airbnb.com.br/rooms/123123123123123123123123
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </div>
      </div>
      <button className="w-full justify-center bg-zinc-800 px-5 h-11 text-zinc-200 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700">
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
};
