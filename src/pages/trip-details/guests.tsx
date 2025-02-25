import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle, CircleDashed, UserCog } from "lucide-react";

import { api } from "../../lib/axios";
import { Button } from "../../components/button";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export const Guests = () => {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    fetchParticipants();
  }, [tripId]);

  const fetchParticipants = () => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
      .catch((error) => console.error("Error fetching participants:", error));
  };

  async function confirmParticipant(participantId: string) {
    try {
      await api.patch(`/participants/${participantId}/confirm`);

      setParticipants((prevParticipants) =>
        prevParticipants.map((participant) =>
          participant.id === participantId ? { ...participant, is_confirmed: true } : participant
        )
      );
    } catch (error) {
      console.error("Error confirming participant:", error);
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex items-center justify-between gap-4 ">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {participant?.name ?? `Participante ${index}`}
                </span>
                <span className="block text-sm text-zinc-400 truncate">{participant?.email}</span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle className="size-5 text-green-400" />
              ) : (
                <button className="" onClick={() => confirmParticipant(participant.id)}>
                  <CircleDashed className="size-5 text-zinc-400" />
                </button>
              )}
            </div>
          );
        })}
      </div>
      <Button variant="secondary">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
};
