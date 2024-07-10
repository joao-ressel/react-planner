import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

export const DestinationAndDateStep = ({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
}: DestinationAndDateStepProps) => {
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);
  const [eventStartAndDates, setEventStartAndDates] = useState<
    DateRange | undefined
  >();
  const openDatepicker = () => {
    return setIsDatepickerOpen(true);
  };

  const closeDatepicker = () => {
    return setIsDatepickerOpen(false);
  };

  const displayedDate =
    eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to
      ? format(eventStartAndDates.from, "d' de' LLL")
          .concat(" até ")
          .concat(format(eventStartAndDates.to, "d' de' LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 flex items-center rounded-xl px-4 shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <button
        onClick={openDatepicker}
        disabled={isGuestInputOpen}
        className="flex items-center gap-2 text-left w-56"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatepickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <Button onClick={closeDatepicker} variant="icon">
                  <X className="size-5 text-zinc-400" />
                </Button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndDates}
              onSelect={setEventStartAndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar <ArrowRight className="size-5" />{" "}
        </Button>
      )}
    </div>
  );
};
