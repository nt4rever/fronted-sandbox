import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const DebounceTest = () => {
  const [text, setText] = useState<string>("");
  const value = useDebounce(text, 300);
  return (
    <div className="w-9/12">
      <h1 className="font-semibold text-2xl">useDebounce hooks</h1>
      <h3>Res: {value}</h3>
      <input
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-white border rounded-lg outline-blue-400"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
    </div>
  );
};

export default DebounceTest;
