import React, { useState } from "react";

import { AppStateType, AppStateSchema } from "@/types/shared.types";

const initState = AppStateSchema;

const reducer = ({ action, payload }: { action: string; payload: any }) => {};

const AppProvider = () => {
  const [appState, setAppState] = useState(initState);

  return {};
};

export default AppProvider;
