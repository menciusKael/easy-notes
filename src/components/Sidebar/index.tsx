import React from "react";
import Link from "next/link";

import { getAllNotes } from "@/libs/redis";
import SidebarNoteList from "@/components/SidebarNoteList";

export default async function Sidebar() {
  const notes = await getAllNotes();
  const noteDatas = Object.values(notes).map((item) => JSON.parse(item));

  return (
    <>
      <section className="h-full bg-white overflow-y-scroll z-1000 min-w-64 max-w-80 w-1/3 shadow-xl">
        <Link href={"/"}>
          <section className="uppercase p-[16px] pt-9 flex items-center">
            <img
              className="w-5 h-5 mr-3"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <span className="font-bold">Daily Notes</span>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          {/* SideSearchField */}
        </section>
        <nav>
          <SidebarNoteList notes={noteDatas} />
        </nav>
      </section>
    </>
  );
}
