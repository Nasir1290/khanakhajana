"use client";

import { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

function ShareAction({ title, shareUrl }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsShow((prev) => !prev)}
        className=" flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <button>Share</button>
      </div>
      {isShow && (
        <div className="flex gap-4 justify-end">
          <div className=" mt-4 p-4">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              hashtag={"#Food"} // Add a hashtag if desired
              className="social-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>

          <div className=" mt-4 p-4">
            <TwitterShareButton
              url={shareUrl}
              quote={title}
              hashtag={"#Food"} // Add a hashtag if desired
              className="social-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div className=" mt-4 p-4">
            <WhatsappShareButton
              url={shareUrl}
              quote={title}
              hashtag={"#Food"} // Add a hashtag if desired
              className="social-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div className=" mt-4 p-4">
            <FacebookMessengerShareButton
              url={shareUrl}
              quote={title}
              hashtag={"#Food"} // Add a hashtag if desired
              className="social-button"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareAction;
