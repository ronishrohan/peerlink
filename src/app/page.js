"use client"
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { ArrowRightCircleIcon, PlusCircle } from 'lucide-react';
import React from 'react'

const Card = ({ color, children }) => {
  const { theme } = useTheme();
  
  const colorClasses = {
    green: theme === 'light' 
      ? 'border-green-300 bg-green-200 text-green-900' 
      : 'border-green-900 bg-green-900/40 text-green-100',
    blue: theme === 'light' 
      ? 'border-blue-300 bg-blue-200 text-blue-900' 
      : 'border-blue-900 bg-blue-900/40 text-blue-100',
    yellow: theme === 'light' 
      ? 'border-yellow-300 bg-yellow-200 text-yellow-900' 
      : 'border-yellow-900 bg-yellow-900/40 text-yellow-100',
    pink: theme === 'light' 
      ? 'border-pink-300 bg-pink-200 text-pink-900' 
      : 'border-pink-900 bg-pink-900/40 text-pink-100'
  };

  return (
    <button className={`w-full group cursor-pointer font-serif h-[fit-content] rounded-md flex justify-between items-center p-4 border ${colorClasses[color]}`}>
      <div className='text-left text-2xl font-light'>{children}</div>
      <ArrowRightCircleIcon className='group-hover:opacity-100 opacity-0 duration-300 ease-in-out -translate-x-2 group-hover:translate-x-0 transition-all' />
    </button>
  );
};

const page = () => {
  return (
    <div className='flex flex-col p-2' >
      <div className='w-full shrink-0 grid gap-2 grid-cols-4 '>
      <Card color="green">Need a team?</Card>
      <Card color="blue">Looking for devs?</Card>
      <Card color="yellow">Find designers</Card>
      <Card color="pink">Project ideas</Card>
    </div>
    <div className="mt-4 text-5xl   flex justify-between items-stretch" ><span className='font-serif font-thin tracking-tighter' >Upcoming</span>
      <Button variant="default" className={"h-full "}><PlusCircle />More </Button>
    </div>
    </div>
  )
}

export default page