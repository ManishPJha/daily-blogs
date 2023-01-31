import React, { Fragment, useEffect } from "react";
import { NextPage } from "next";
import { trpc } from "@/utils/trpc";

const Index: NextPage = () => {
  const message = trpc.welcome.useQuery();
  return (
    <Fragment>
      <div className="max-w-lg mx-auto h-40 p-6 mt-8 text-xl font-medium rounded-sm bg-white">
        {message.data?.message}
      </div>
      <div id="register-modal"></div>
    </Fragment>
  );
};

export default Index;
