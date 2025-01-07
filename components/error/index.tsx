import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface Props {}

function index(props: Props) {
  const {} = props;
  const router = useRouter();
  const { id } = router.query;
  const content =
    id === "en" ? "Internal server error" : "Terjadi kesalahan pada server";

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <ExclamationTriangleIcon className="text-red-500 w-32 mx-auto" />
        <div className="text-2xl font-semibold text-red-500">{content}</div>
      </div>
    </div>
  );
}

export default index;
