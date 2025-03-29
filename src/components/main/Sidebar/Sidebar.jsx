"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Code2Icon, HomeIcon, LucideSettings, Settings, UserCircle2 } from "lucide-react";
import React, { useState } from "react";

const NavButton = ({ children, onClick,logo, selected }) => (
  <Button
    onClick={onClick}
    className="text-base font-light text-left justify-between h-fit py-2 cursor-pointer"
    variant={selected ? "selected" : "outline"}
  >
    <div className="flex gap-3 items-center">{logo} {children}</div>

    <div className="size-2 flex items-center justify-center">
      <div
        className={`rounded-full transition-all duration-300 ease-in-out ${
          selected ? "size-2" : "size-0"
        } bg-primary-foreground`}
      ></div>
    </div>
  </Button>
);

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const {theme, setTheme} = useTheme()
  return (
    <div className="sm:w-1/5 overflow-hidden shrink-0 h-full border-r border-border flex flex-col w-0 ">
      <div className={`h-16 flex items-center shrink-0 text-2xl font-serif font-light p-4 ${theme === "dark" ? "text-primary" : "text-primary-foreground"} border-b border-border`}>
        Peerlink
      </div>
      <div className="flex flex-col w-full gap-2 mt-2 px-2 font-sans">
        <NavButton logo={<HomeIcon />} onClick={() => setSelected(0)} selected={selected == 0}>
          Home
        </NavButton>
        <NavButton logo={<Code2Icon />} onClick={() => setSelected(1)} selected={selected == 1}>
          Hackathons
        </NavButton>
        <NavButton logo={<UserCircle2 />} onClick={() => setSelected(2)} selected={selected == 2}>
          Invites
        </NavButton>
        <NavButton logo={<LucideSettings />} onClick={() => setSelected(3)} selected={selected == 3}>
          Settings
        </NavButton>
      </div>
     
    </div>
  );
};

export default Sidebar;
