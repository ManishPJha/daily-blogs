import { isClient } from "@/utils/checkEnvironments";
import React from "react";
import { createPortal } from "react-dom";

const isClientWindow = isClient();

const Message = ({ text, type }: { text: string; type: string }) => {
  return isClientWindow
    ? createPortal(
        <div className={`alert alert-${type} shadow-lg`}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>,
        document.querySelector("#toast-message") as HTMLElement
      )
    : "";
};

export default {
  info(text: string) {
    return Message({ text: text, type: "info" });
  },
  success(text: string) {
    return Message({ text: text, type: "success" });
  },
  warn(text: string) {
    return Message({ text: text, type: "warning" });
  },
  error(text: string) {
    return Message({ text: text, type: "error" });
  },
};

// export default {
//   info(text: string) {
//     return <Message text={text} type="info" />;
//   },
//   success(text: string) {
//     Message({ text: text, type: "success" });
//   },
//   warn(text: string) {
//     return <Message text={text} type="warning" />;
//   },
//   error(text: string) {
//     return <Message text={text} type="error" />;
//   },
// };
