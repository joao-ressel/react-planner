import { Calendar, Tag, Watch, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeModal: () => void;
}

export const CreateActivityModal = ({
  closeModal,
}: CreateActivityModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <Button type="button" variant="icon" onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </Button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <form className=" space-y-3">
          <div className="px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2.5 h-14 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="date"
                name="at_date"
                placeholder="Data da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
              />
            </div>
            <div className="px-4 h-14 w-36 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Watch className="text-zinc-400 size-5" />
              <input
                type="time"
                name="at_hour"
                placeholder="Horário"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
              />
            </div>
          </div>
        </form>
        <Button type="button">Salvar atividade</Button>
      </div>
    </div>
  );
};
