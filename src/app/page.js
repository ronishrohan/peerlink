"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import {
  ArrowRight,
  ArrowRightCircle,
  ArrowRightCircleIcon,
  IndianRupee,
  LocateIcon,
  LucideBadgeIndianRupee,
  MessageCircleQuestionIcon,
  PlusCircle,
  Sparkle,
} from "lucide-react";
import React from "react";

const Card = ({ color, children }) => {
  const { theme } = useTheme();

  const colorClasses = {
    green:
      theme === "light"
        ? "border-green-300 bg-green-200 text-green-900"
        : "border-green-900 bg-green-900/40 text-green-100",
    blue:
      theme === "light"
        ? "border-blue-300 bg-blue-200 text-blue-900"
        : "border-blue-900 bg-blue-900/40 text-blue-100",
    yellow:
      theme === "light"
        ? "border-yellow-300 bg-yellow-200 text-yellow-900"
        : "border-yellow-900 bg-yellow-900/40 text-yellow-100",
    pink:
      theme === "light"
        ? "border-pink-300 bg-pink-200 text-pink-900"
        : "border-pink-900 bg-pink-900/40 text-pink-100",
  };

  return (
    <button
      className={`w-full h-full group cursor-pointer font-serif h-[fit-content] rounded-md flex items-start justify-between items-center p-4 border ${colorClasses[color]}`}
    >
      <div className="text-left text-2xl font-light">{children}</div>
      <ArrowRightCircleIcon className="group-hover:opacity-100 opacity-0 duration-300 ease-in-out -translate-x-2 group-hover:translate-x-0 transition-all" />
    </button>
  );
};

const page = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="w-full shrink-0 grid gap-2 grid-rows-2 grid-cols-2 sm:grid-rows-none sm:grid-cols-4 ">
        <Card color="green">Need a team?</Card>
        <Card color="blue">Looking for devs?</Card>
        <Card color="yellow">Find designers</Card>
        <Card color="pink">Project ideas</Card>
      </div>
      <div className="mt-4 text-3xl   flex justify-between items-stretch">
        <span className="font-serif font-thin tracking-tighter">Upcoming</span>
        <Button variant="default" className={"h-full "}>
          <PlusCircle />
          More{" "}
        </Button>
      </div>
      <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 gap-2 mt-4">
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
        <HackathonCard />
      </div>
    </div>
  );
};

const HackathonCard = () => {
  return (
    <div className="bg-border/20 hover:border-foreground/20 hover:bg-border/50 overflow-hidden group p-2 relative border border-border rounded-md h-fit flex flex-col">
      <div className="flex gap-2 items-stretch mb-4">
        <div className="size-15 shrink-0 rounded-full overflow-hidden" >
          <img src="https://d14ti7ztt9zv5f.cloudfront.net/emojis/Apple/Grinning-Face-with-Smiling-Eyes-on-Apple-iOS-13.3/Grinning-Face-with-Smiling-Eyes-on-Apple-iOS-13.3.png"/>
        </div>
        <div className="flex flex-col shrink-1 overflow-hidden ">
          <h1 className="text-xl font-sans tracking-tighter font-base">
            Smart India Hackathon
          </h1>
          <h2 className="flex gap-2 text-lg text-foreground/60 items-center">
            Bangalore, IN
          </h2>
        </div>
      </div>
      {/* <h2 className="h-16 w-full bottom-2 right-2 group-hover:opacity-20 opacity-0 duration-300 ease-in-out bg-yellow-400 absolute z-10 blur-3xl"></h2> */}
      <div className="mt-auto flex  w-full gap-2 justify-end">
        
        <div className="flex gap-1 items-center text-xl mr-auto text-foreground/90 font-bold tracking-tighter font-sans "><IndianRupee size={12} />1,000 <span className="text-sm text-foreground/60">/ per team</span></div>
        <Button variant="outline" className=""><MessageCircleQuestionIcon></MessageCircleQuestionIcon></Button>
        <Button className=""><ArrowRight></ArrowRight></Button>
      </div>
    </div>
  );
};

export default page;
