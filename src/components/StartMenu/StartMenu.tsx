"use client";
import { useRef } from "react";
import { useAppContext } from "../../contexts/AppContext";
import Toolbar from "./ToolBar";
import AllApps from "./AllApps";
import QuickAccessPanel from "./QuickAccessPanel";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function StartMenu() {
  const app = useAppContext();
  const ref = useRef({} as HTMLDivElement);

  useOutsideClick([ref], app.programState.startMenu, () => app.setProgramState("startMenu", false));

  return app.programState.startMenu && (
    <div className="absolute left-1 bottom-12  grid grid-cols-[3rem,18rem,30rem] gap-1" ref={ref}>
      <Toolbar />
      <AllApps />
      <QuickAccessPanel />
    </div>
  );
}
