"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

import LimitedUser from "@/components/virtualMachines/LimitedUser";
import PowerUser from "@/components/virtualMachines/PowerUser";

export default function AdminView({
  role,
  creation,
}: {
  role: string | undefined;
  creation: (
    publisher: string | undefined,
    offer: string | undefined,
    sku: string | undefined
  ) => void;
}) {
  const error = !!useSearchParams().get("error");

  const [loading, setLoading] = useState(false);

  const handleCreation = useCallback(
    (
      publisher: string | undefined,
      offer: string | undefined,
      sku: string | undefined
    ) => {
      setLoading(true);
      creation(publisher, offer, sku);
    },
    [creation]
  );

  useEffect(() => {
    if (error) {
      toast.error(
        "Erreur dans la création de la machine virtuelle, veuillez réesayer. Erreur probable : 3 machines virtuelles sont déjà en cours d'utilisation.",
        { duration: 60000 }
      );
      setLoading(false);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center mt-56">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <p className="flex justify-center text-xl w-full">
          Bienvenue, vous êtes connecté en tant que : {role}
        </p>
        {role === "restricedUser" && (
          <p className="mt-3">
            Vous n&rsquo;avez aucun crédit pour lancer une machine virtuelle...
          </p>
        )}
        <div className="flex justify-evenly mt-10 w-full">
          {role === "limitedUser" && (
            <LimitedUser handleCreation={handleCreation} loading={loading} />
          )}
          {role === "powerUser" && (
            <PowerUser handleCreation={handleCreation} loading={loading} />
          )}
        </div>
        <div className="mt-10 w-full flex justify-center">
          {loading && (
            <FaSpinner className="animate-spin text-blue-500" size={30} />
          )}
        </div>
      </div>
    </div>
  );
}
