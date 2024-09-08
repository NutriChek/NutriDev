'use client'

import React from "react";
import { Button, Input } from '@nextui-org/react';
import Password from "@/components/password-input";
import Link from "next/link";

export default function Page() {
  
  return (
    <div className='flex-col flex gap-2 pt-10 items-center'>
      <Input className='max-w-xs' variant={"bordered"} type='email' label='Email' placeholder='Enter your email' />
      <Password/>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500  text-white shadow-lg px-32">
        Log In
      </Button>
      <Link href='/register' className="underline text-gray-800 text-sm">No account? Register</Link>
    </div>
  );
}
