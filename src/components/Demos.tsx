import { Phone } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./button/Button";
import { Input } from "./input/Input";

const Demos = () => {
  const [text, setText] = useState("");
  return (
    <>
      <main className="p-4">
        <div className="mt-5 w-1/2">
          <Button className="w-full rounded-full" variant={"destructive"}>
            Join Now
          </Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button className="w-full">Regular Plan</Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button className="w-full rounded-full">Sign In</Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button
            className="w-full rounded-full"
            loading
            loadingText="Signing in..."
          >
            Sign In
          </Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button className="w-full rounded-full" variant={"subtle"}>
            Get started
          </Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button className="w-full" variant={"outline"}>
            Try for free
          </Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button className="w-full rounded-full" variant={"ghost"}>
            Get started
          </Button>
        </div>
        <div className="mt-5 w-1/2">
          <Button className="w-full rounded-full" variant={"link"}>
            Get started
          </Button>
        </div>
        <div className="mt-5">
          <Button className="rounded-full" variant={"accent"}>
            <Phone className="mr-2 h-4 w-4" /> Call
          </Button>
        </div>
        <div className="w-1/2">
          <h1>Input elements</h1>
          <div className="mt-5">
            <Input
              placeholder="Your name"
              type={"password"}
              name="text"
              value={text}
              id="password"
              label="Password"
              onChange={(e) => setText(e.currentTarget.value)}
            />
          </div>
          <div className="mt-6">
            <Input
              type={"email"}
              placeholder="Your Email"
              id="email"
              label="Email"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Demos;
