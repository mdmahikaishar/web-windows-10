import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { useAppContext } from "../../contexts/AppContext";

export default function QuickAccess() {
  const app = useAppContext();
  
  return (
    <div className="flex-none flex items-center justify-end gap-1">
      <button className="h-10 aspect-square grid place-items-center hover:bg-[#00000020]" 
        onClick={() => {
          app.setProgramState("settingOne", true);
          app.setProgramState("searcher", false);
        }}
      >
        <AiOutlineSetting />
      </button>
      <button className="h-10 aspect-square grid place-items-center hover:bg-[#00000020]">
        <AiOutlineLogout />
      </button>
    </div>
  );
}
