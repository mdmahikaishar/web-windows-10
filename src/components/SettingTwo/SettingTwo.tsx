"use client";
import { useRef } from "react";
import { SETTINGS } from "./data";
import { Titlebar } from "../../components/common";
import styles from "../../styles/styles";
import { useAppContext } from "../../contexts/AppContext";
import Head from "./Head";
import Searchbar from "./Searchbar";
import Item from "./item";
import { useMoveable } from "../../libs/moveable";

export default function SettingTwo() {
  const app = useAppContext();
  const move = useRef({} as HTMLDivElement);

  const moveable = useMoveable(move);

  return app.programState.settingTwo && (
    <div  className={`${styles.window} w-[50rem] absolute border-4 h-5/6 resize`} ref={move}>
      <Titlebar name="Setting" onClose={() => app.toggleProgramState("settingTwo")} {...moveable} />

      {/* main view */}
      <div className={`${styles.windowMain} flex flex-col`}>
        <Head />

        {/* main content */}
        <div className={`${styles.windowTransparent} p-8`}>
          <div className="mx-auto w-11/12 flex flex-col gap-8">
            <Searchbar />

            {/* setting items */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
              {SETTINGS.map((setting) => (
                <Item setting={setting} key={setting.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
