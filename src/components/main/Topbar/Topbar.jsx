"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MoonIcon, Search, SunMedium, User2, UserCircle2 } from 'lucide-react'
import React from 'react'
import { useTheme } from '@/hooks/useTheme'

const Topbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='border-b border-border h-16 shrink-0 top-0 sticky bg-background/90 backdrop-blur-sm  w-full p-4 flex items-center'>
        <div className={`text-xl font-sans font-bold ${theme === "dark" ? "text-primary" : "text-primary-foreground"}`}>Home</div>
        <div className='flex gap-2 ml-auto items-stretch' >
            <div className='relative group'>
                <Search size={14} className='absolute pointer-events-none transition-all left-3 group-focus-within:text-primary top-1/2 transform -translate-y-1/2 text-gray-500 z-10' />
            <Input className={"min-w-[300px] pl-8"}  placeholder="Search for hackathons" />
            </div>
            <Button  ><User2 /></Button>
            <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'light' ? <MoonIcon /> : <SunMedium />}
            </Button>
        </div>
    </div>
  )
}

export default Topbar