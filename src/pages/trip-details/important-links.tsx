import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

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
      <Button variant="secondary">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
};
