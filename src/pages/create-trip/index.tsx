import { FormEvent, useState } from "react";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { useNavigate } from "react-router-dom";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export const CreateTripPage = () => {
  const navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventStartAndDates, setEventStartAndDates] = useState<DateRange | undefined>();

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

  const openGuestsModal = () => {
    setIsGuestModalOpen(true);
  };

  const openConfirmTripModal = () => {
    setIsConfirmTripModalOpen(true);
  };

  const closeModal = () => {
    setIsGuestModalOpen(false);
    setIsConfirmTripModalOpen(false);
  };

  const openGuestInput = () => {
    setIsGuestInputOpen(true);
  };

  const closeGuestInput = () => {
    setIsGuestInputOpen(false);
  };

  const removeEmailFromInvites = (emailToRemove: string) => {
    const newEmailList = emailsToInvite.filter((email) => email !== emailToRemove);
    setEmailsToInvite(newEmailList);
  };

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(destination);
    console.log(eventStartAndDates);
    console.log(emailsToInvite);
    console.log(ownerName);
    console.log(ownerEmail);

    if (!destination) {
      return;
    }
    if (emailsToInvite.length === 0) {
      return;
    }
    if (!eventStartAndDates?.from || !eventStartAndDates?.to) {
      return;
    }
    if (!ownerName || !ownerEmail) {
      return;
    }

    const response = await api.post("/trips", {
      destination,
      starts_at: eventStartAndDates?.from,
      ends_at: eventStartAndDates?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    const { tripId } = response.data;

    navigate(`/trips/${tripId}`);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestInput={closeGuestInput}
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
            setDestination={setDestination}
            setEventStartAndDates={setEventStartAndDates}
            eventStartAndDates={eventStartAndDates}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com nossos{" "}
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
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addEmailToInvite={addEmailToInvite}
          closeModal={closeModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeModal={closeModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
};
