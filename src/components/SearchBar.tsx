// import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);

  //The commented section will be use later for the AI generating recipes tool

  // const [prompt, setPrompt] = useState("");
  // const [response, setResponse] = useState("");
  // const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      setIsSearchButtonPressed(true);
    }
    // axios
    //   .post(`${HTTP}`, { input })
    //   .then((res) => {
    //     setResponse(res.data);

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // setPrompt("");
  };

  const handleClose = () => {
    setInput("");
    setIsSearchButtonPressed(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-secondary rounded-3xl flex justify-between items-center py-2 px-4 md:my-16 my-6">
          <input
            className="placeholder:text-medium justify-center focus:outline-none w-full"
            placeholder="What do you feel like eating?"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setIsSearchButtonPressed(false);
            }}
          />

          {!isSearchButtonPressed ? (
            <button type="submit">
              <SearchIcon sx={{ width: 16, cursor: "pointer" }} />
            </button>
          ) : (
            <CloseIcon
              sx={{ width: 16, cursor: "pointer" }}
              onClick={() => handleClose()}
            />
          )}
        </div>
      </form>
    </div>
  );
};
