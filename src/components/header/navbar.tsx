import React, { FC, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Link from "next/link";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

import { isClient as isClientPage } from "@/utils/checkEnvironments";

const isClient = isClientPage();

const Navbar: FC = () => {

  return (
    <></>
  );
};

export default Navbar;
