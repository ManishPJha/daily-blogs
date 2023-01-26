import React, { useEffect } from "react";
import { trpc } from "@/utils/trpc";

import Navbar from "@/components/header/navbar";
import { NextPage } from "next";

const Index: NextPage = () => {
  const message = trpc.welcome.useQuery();
  return (
    <div>
      <Navbar />
    </div>
    // <div className="max-w-lg mx-auto h-40 p-6 mt-8 text-xl font-medium rounded-sm bg-white">
    //   {message.data?.message}
    // </div>
  );
};

export default Index;
