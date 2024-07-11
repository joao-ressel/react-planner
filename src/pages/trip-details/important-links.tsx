import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { CreateLinkModal } from "./create-link-modal";

interface Link {
  id: string;
  title: string;
  url: string;
}

export const ImportantLinks = () => {
  const { tripId } = useParams();
  const [createLinkModal, setCreateLinkModal] = useState(false);
  const [links, setLinks] = useState<Link[]>([]);

  const openCreateLinkModal = () => {
    setCreateLinkModal(true);
  };

  const closeModal = () => {
    setCreateLinkModal(false);
  };

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then((response) => setLinks(response.data.links));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      {links.length > 0 ? (
        <div className="space-y-5">
          {links.map((link) => {
            return (
              <div key={link.id} className="flex items-center justify-between gap-4 ">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">{link.title}</span>
                  <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                    {link.url}
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400" />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-zinc-400">Não há links salvos</p>
      )}

      <Button onClick={openCreateLinkModal} variant="secondary">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
      {createLinkModal && <CreateLinkModal closeModal={closeModal} />}
    </div>
  );
};
