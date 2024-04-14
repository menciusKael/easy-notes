// "use client";
import { NoteItem } from "@/types/notes";
import dayjs from "dayjs";

export default async function NoteList({ notes }: { notes: NoteItem[] }) {
  if (notes.length == 0) {
    return <div className="p-4">{"No notes created yet!"}</div>;
  }

  return (
    <ul className="notes-list">
      {notes.map((item: any, index: number) => {
        const { title, updateTime } = item;
        return (
          <li key={index}>
            <header className="sidebar-note-header">
              <strong>{title}</strong>
              <small>{dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}</small>
            </header>
          </li>
        );
      })}
    </ul>
  );
}
