import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

type props = {
  state: string;
};

function Status({ state }: props): JSX.Element | null {
  switch (state) {
    case "success":
      return (
        <div className="bg-green-700 p-3 rounded-md text-white flex gap-2 items-center">
          <span>
            <FaCheckCircle />
          </span>
          <p>Boom! It worked! Even our free servers are impressed. </p>
        </div>
      );
    case "wait":
      return (
        <div className="bg-yellow-700 p-3 rounded-md text-white flex gap-2 items-center">
          <span>
            <FaExclamationTriangle />
          </span>
          <p className="text-base">Hold on! My free servers need a moment.😅</p>
        </div>
      );
    case "failed":
      return (
        <div className="bg-red-700 p-3 rounded-md text-white flex gap-2 items-center">
          <span>
            <FaExclamationCircle />
          </span>
          <p>
            Opps! it went all wrong.
            <br />
            <span
              className="cursor-pointer underline"
              onClick={() => {
                window.open("mailto:pranavmunot09@gmail.com");
              }}
            >
              click & send direct mail
            </span>
          </p>
        </div>
      );
    case "wrong":
      return (
        <div className="bg-blue-700 p-3 rounded-md text-white flex gap-2 items-center">
          <span>
            <FaExclamationCircle />
          </span>
          <p>
            Wait a min!🧐 you messed up something. Check all the fields again.
          </p>
        </div>
      );
  }
  return null;
}

export default Status;
