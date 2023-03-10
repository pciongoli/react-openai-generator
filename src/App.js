import { useState } from "react";
import OpenAI from "./OpenAI";

function App() {
   const [input, setInput] = useState("");
   const [output, setOutput] = useState("");

   async function handleSubmit(event) {
      event.preventDefault();
      const generatedOutput = await OpenAI.generateOutput(input);
      setOutput(generatedOutput);
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Generate Output</button>
         </form>
         <pre>{output}</pre>
      </div>
   );
}

export default App;
