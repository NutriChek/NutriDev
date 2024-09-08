'use client'

import React, { useState } from "react";
import { Button, Input } from '@nextui-org/react';
import {EyeFilledIcon} from "../../components/eye-filled-icon";
import {EyeSlashFilledIcon} from "../../components/eye-slash-filled-icon";
import Password from "@/components/password-input";
import Link from "next/link";

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <div className='flex-col flex gap-2 pt-10 items-center'>

      <Input className='max-w-xs' variant={"bordered"} type='username' label='Username' placeholder='Enter a username' />
      <Input className='max-w-xs' variant={"bordered"} type='email' label='Email' placeholder='Enter your email' />

      <Password/>
      <Input
        label="Repeat Password"
        variant="bordered"
        placeholder="Repeat your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs"
      />

      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500  text-white shadow-lg px-32">
        Register
      </Button>
      <Link href='/login' className="underline text-gray-800 text-sm">Already have an account? Log In</Link>
    </div>
  );
}
