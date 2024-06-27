import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { FormEvent, useState } from "react";

export const App = () => {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(["joao@gmail.com"]);

  const addEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    setEmailsToInvite((prevEmails) => [...prevEmails, email]);
    event.currentTarget.reset();
  };

  const removeEmailFromInvites = (emailToRemove: string) => {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );
    setEmailsToInvite(newEmailList);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 flex items-center rounded-xl px-4 shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Quem estará na viagem?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                onClick={() => {
                  setIsGuestInputOpen(false);
                }}
                className="bg-zinc-800 px-5 py-2 text-zinc-200 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-950"
              >
                Alterar local/data <Settings2 className="size-5" />{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsGuestInputOpen(true);
                }}
                className="bg-lime-300 px-5 py-2 text-lime-950 rounded-lg font-medium  flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar <ArrowRight className="size-5" />{" "}
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 flex items-center rounded-xl px-4 shadow-shape gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsGuestModalOpen(true);
                }}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg text-left flex-1">
                  Quem estará na viagem?
                </span>
              </button>

              <button className="bg-lime-300 px-5 py-2 text-lime-950 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem <ArrowRight className="size-5" />{" "}
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="min-w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button
                  type="button"
                  onClick={() => {
                    setIsGuestModalOpen(false);
                  }}
                >
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div
                  key={email}
                  className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                >
                  <span className="text-zinc-300">{email}</span>
                  <button
                    onClick={() => {
                      removeEmailFromInvites(email);
                    }}
                    type="button"
                  >
                    <X className="text-zinc-400 size-5" />
                  </button>
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
              <button
                type="submit"
                className="bg-lime-300 px-5 py-2 text-lime-950 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Convidar <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
