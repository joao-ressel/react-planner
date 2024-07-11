import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  closeModal: () => void;
  emailsToInvite: string[];
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export const InviteGuestsModal = ({
  addEmailToInvite,
  closeModal,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="min-w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <Button
                variant="icon"
                onClick={() => {
                  removeEmailFromInvites(email);
                }}
                type="button"
              >
                <X className="text-zinc-400 size-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addEmailToInvite}
          className="px-2 py-2 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button type="submit">
            Convidar <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};
