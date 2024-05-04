"use client";
import { FaMicrosoft } from "react-icons/fa";
import {  AiOutlineMessage } from "react-icons/ai";
import { useAppContext } from "../../contexts/AppContext";
import Button from "./Button";
import Searchbox from "./Searchbox";
import TaskProgram from "./TaskProgram";
import DateTime from "./DateTime";
import Toolbar from "./Toolbar";

export default function Taskbar() {
  const app = useAppContext();

  return (
    <div className="w-screen h-10 px-1 absolute bottom-1 flex items-center gap-1 bg-transparent select-none z-50">
      <Button Icon={FaMicrosoft} variant="window" onClick={() => app.toggleProgramState("startMenu")} />
      <Searchbox />

      <TaskProgram />

      <Toolbar />
      <DateTime />
      <Button Icon={AiOutlineMessage} variant="square" />
    </div>
  );
}
