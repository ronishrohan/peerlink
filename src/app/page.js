"use client"
import { useTheme } from '@/hooks/useTheme';
import { ArrowRightCircleIcon } from 'lucide-react';
import React from 'react'

const Card = ({ color, children }) => {
  const { theme } = useTheme();
  return (
    <button className={`w-full group cursor-pointer font-serif h-[fit-content] rounded-md flex  justify-between items-center p-4 
      ${theme === 'light' 
        ? `border border-${color}-300 bg-${color}-200 text-${color}-900` 
        : `border border-${color}-900 bg-${color}-900/40 text-${color}-100`}`}>
      <div className='text-left text-2xl font-light'>{children}</div>
      <ArrowRightCircleIcon className='group-hover:opacity-100 opacity-0  duration-300 ease-in-out -translate-x-2 group-hover:translate-x-0 transition-all' />
    </button>
  );
};

const page = () => {
  return (
    <div className='w-full h-[200vh] shrink-0 grid gap-2 grid-cols-4 p-2'>
      <Card color="green">Need a team?</Card>
      <Card color="blue">Looking for devs?</Card>
      <Card color="yellow">Find designers</Card>
      <Card color="pink">Project ideas</Card>
    </div>
  )
}

export default page