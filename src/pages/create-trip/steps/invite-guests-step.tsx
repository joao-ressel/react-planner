import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export const InviteGuestsStep = ({
  openGuestsModal,
  openConfirmTripModal,
  emailsToInvite,
}: InviteGuestsStepProps) => {
  return (
    <div className="h-16 bg-zinc-900 flex items-center rounded-xl px-4 shadow-shape gap-3">
      <Button type="button" onClick={openGuestsModal} variant="transparent">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </Button>
      <Button onClick={openConfirmTripModal} type="button">
        Confirmar viagem <ArrowRight className="size-5" />{" "}
      </Button>
    </div>
  );
};
