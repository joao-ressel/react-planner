import { FormEvent } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { LoaderCircle, User, X } from "lucide-react";

import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
  eventStartAndDates: DateRange | undefined;
  destination: string;
  isLoading: boolean;
}

export const ConfirmTripModal = ({
  closeModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
  eventStartAndDates,
  destination,
  isLoading,
}: ConfirmTripModalProps) => {
  const displayedDate =
    eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to
      ? format(eventStartAndDates.from, "d' de' LLL", { locale: ptBR })
          .concat(" até ")
          .concat(format(eventStartAndDates.to, "d' de' LLL", { locale: ptBR }))
      : null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button onClick={closeModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">{destination}</span> nas datas de{" "}
            <span className="font-semibold text-zinc-100"> {displayedDate} </span> preencha seus
            dados abaixo:
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <form onSubmit={createTrip} className=" space-y-3">
          <div className="px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Seu nome completo"
              onChange={(event) => setOwnerName(event.target.value)}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              onChange={(event) => setOwnerEmail(event.target.value)}
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button size="full" type="submit">
            {isLoading ? (
              <LoaderCircle className="text-zinc-800 size-6 animate-spin" />
            ) : (
              <p>Confirmar criação da viagem</p>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};
