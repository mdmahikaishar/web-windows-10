"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { IAppContext, IAppState, Programs,  } from "./types";

const AppState: IAppState = {
  programState: {
    startMenu: false,
    settingOne: false,
    settingTwo: false,
    searcher: false
  }
}

const AppContext = createContext(AppState as IAppContext);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(AppState);

  const setProgramState = (name: keyof Programs, state: boolean) => {
    setState(pre => ({ programState: { ...pre.programState, [name]: state } }));
  }
  const toggleProgramState = (name: keyof Programs) => {
    setState(pre => ({
      programState: {
        ...pre.programState,
        [name]: !pre.programState[name]
      }
    }));
  }

  return (
    <AppContext.Provider value={{ ...state, setProgramState, toggleProgramState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): IAppContext {
  return useContext(AppContext);
}
