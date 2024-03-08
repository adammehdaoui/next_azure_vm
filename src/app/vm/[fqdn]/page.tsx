"use client";

import VMLogin from "@/components/VMLogin";
import { usePathname } from "next/navigation";

export default function VM() {
  function copyToClipboard() {
    navigator.clipboard.writeText("test");
    console.log("test");
  }

  const fqdn = usePathname().split("/")[2];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white p-8 rounded-xl shadow-md w-1/2 space-y-5">
        <h1 className="text-xl">
          Informations de connexion à la machine virtuelle
        </h1>
        <VMLogin
          text={`Se connecter à la machine en SSH : ssh notadmin@${fqdn}`}
          textToCopy={`ssh notadmin@${fqdn}`}
        />
        <VMLogin text={`Nom d'utilisateur : notadmin`} textToCopy="notadmin" />
        <VMLogin
          text={`Mot de passe pour se connecter : Pa$$w0rd92`}
          textToCopy="Pa$$w0rd92"
        />
      </div>
    </div>
  );
}
