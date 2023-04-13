import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);
  const handleInput = (e) => {
    const input = e.target.value;
    setValue(input);
  };

  const handleButton = async () => {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      // input: value,
      prompt: value,
      temperature: 1,
      max_tokens: 1000,
    });
    setData(response.data.choices[0].text);
  };

  return (
    <div className="App">
      <div className="flex flex-col space-y-5 ">
        <h1>HELLLO THIS IN OPEN AI TEST API</h1>
        <input
          type="text"
          onChange={handleInput}
          value={value}
          className="p-2 w-[30rem] self-center border-2 border-[#ECFF02] rounded-xl"
        />
        <button
          type="button"
          onClick={handleButton}
          className="w-[13rem] self-center"
        >
          submit
        </button>

        <p className="text-[#ECFF02]">{data}</p>
      </div>
    </div>
  );
}

export default App;
