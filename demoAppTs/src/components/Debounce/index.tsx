import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const DebounceTest = () => {
  const [text, setText] = useState<string>("");
  const value = useDebounce(text, 300);

  return (
    <div className="w-60">
      <h1>useDebounce hooks</h1>
      <h3>Res: {value}</h3>
      <input
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
    </div>
  );
};

export default DebounceTest;
