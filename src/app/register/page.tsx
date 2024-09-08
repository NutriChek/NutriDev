'use client'

import React, { useState } from "react";
import { Button, Input } from '@nextui-org/react';
import {EyeFilledIcon} from "../../components/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../../components/EyeSlashFilledIcon";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <div className='flex-col flex gap-2 pt-4 items-center'>

      <Input className='max-w-xs' variant={"bordered"} type='username' label='Username' placeholder='Enter a username' />
      <Input className='max-w-xs' variant={"bordered"} type='email' label='Email' placeholder='Enter your email' />

      <Input
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
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
        className="max-w-xs self-center"
      />
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

      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500  text-white shadow-lg max-w-xl">
        Log In
      </Button>
    </div>
  );
}
