import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/solid";
import React from "react";

type ContactActionsProps = {
  thumbsUp: number;
  thumbsDown: number;
  onClickThumbsUp: () => void;
  onClickThumbsDown: () => void;
}
export const ContactActions: React.FC<ContactActionsProps> = ({
  thumbsUp,
  thumbsDown,
  onClickThumbsUp,
  onClickThumbsDown,
}) => {
  return (
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="w-0 flex-1 flex">
          <button
            onClick={onClickThumbsUp}
            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
          >
            <ThumbUpIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">{ thumbsUp }</span>
          </button>
        </div>
        <div className="-ml-px w-0 flex-1 flex">
        <button
            onClick={onClickThumbsDown}
            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
          >
            <ThumbDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">{ thumbsDown }</span>
          </button>
        </div>
      </div>
    </div>
  );
}