import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { SETTINGS } from "./data";
import { useMoveable } from "../../libs/moveable";
import { useAppContext } from "../../contexts/AppContext";
import { BiX } from "react-icons/bi";

export default function SettingOne() {
  const app = useAppContext();
  const move = useRef({} as HTMLDivElement);

  const moveable = useMoveable(move);

  return app.programState.settingOne && (
    <div className="w-[80vw] px-10 pt-10 pb-16 absolute flex flex-col gap-8 bg-[#00000060] border border-gray-700 shadow-2xl" style={{ backdropFilter: "blur(2rem)" }} {...moveable} ref={move}>
      <button className="h-10 w-12 absolute right-0 top-0 grid place-items-center hover:bg-red-700" onClick={() => app.setProgramState("settingOne", false)}>
        <BiX />
      </button>

      {/* searchbar */}
      <div className="h-12 px-4 flex items-center gap-4 border-b border-b-gray-700 transition-all hover:bg-[#00000020] hover:shadow-xl focus-within:bg-[#00000020] focus-within:shadow-xl">
        <BsSearch className="flex-none text-2xl" />
        <input
          type="text"
          className="w-full font-normal text-xl bg-transparent outline-none placeholder:text-gray-400"
          placeholder="Find a setting"
        />
      </div>

      {/* setting */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-1">
        {SETTINGS.map((setting) => (
          <div className="h-[10rem] p-4 flex flex-col items-center text-center bg-[#00000020] transition-all cursor-pointer hover:bg-[#00000060] hover:shadow-xl" key={setting.name}>
            <div className="h-14 aspect-square grid place-items-center">
              <setting.Icon className="text-4xl" />
            </div>
            <h3 className="font-semibold text-xl">{setting.name}</h3>
            <span className="text-sm">{setting.describtion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
