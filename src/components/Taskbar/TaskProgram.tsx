import { AiFillChrome, AiFillFolder, AiOutlineSearch} from "react-icons/ai";
import Button from "./Button";
import { useAppContext } from "../../contexts/AppContext";

export default function TaskProgram() {
  const app = useAppContext();

  return (
    <div className="grow flex items-center gap-1 bg-[#00000080]">
      <Button Icon={AiFillFolder} variant="window" color="overlap" />
      <Button Icon={AiFillChrome} variant="window" color="overlap" />
      <Button Icon={AiOutlineSearch} variant="window" color="overlap" onClick={() => app.toggleProgramState("searcher")}/>
    </div>
  );
}
