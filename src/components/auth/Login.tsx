import React from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

const Login = () => {
  return (
    <div>
      <p className="mb-8 text-gray1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mb-8 space-y-4">
        <div>
          <Input
            id="username"
            type="text"
            placeholder="Entrez votre nom d'utlisateur"
            name="username"
            label="Nom utilisateur"
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            label="Mot de pass"
            placeholder="Entrez votre mot de pass"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="w-full lg:w-1/2" size={"lg"}>
          Se connecter
        </Button>
      </div>
    </div>
  );
};

export default Login;
