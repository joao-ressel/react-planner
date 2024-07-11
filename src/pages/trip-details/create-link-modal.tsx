import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateLinkModalProps {
  closeModal: () => void;
}

export const CreateLinkModal = ({ closeModal }: CreateLinkModalProps) => {
  const { tripId } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const url = data.get("url")?.toString();

    if (!title || !url) {
      console.error("Title or url is missing.");
      return;
    }

    try {
      const response = await api.post(`/trips/${tripId}/links`, {
        title,
        url,
      });
      console.log("API Response:", response.data);
      closeModal();
    } catch (error) {
      console.error("API Error:", error);
    }

    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <Button type="button" variant="icon" onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </Button>
          </div>
          <p className="text-sm text-zinc-400">Todos convidados podem visualizar os links importantes.</p>
        </div>
        <form onSubmit={createActivity} className="space-y-3">
          <div className="px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Dê um titulo para o link!"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              required
            />
          </div>

          <div className="px-4 h-14 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link2 className="text-zinc-400 size-5" />
            <input
              name="url"
              placeholder="Qual a URL?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              required
            />
          </div>
          <Button size="full" type="submit">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
};
