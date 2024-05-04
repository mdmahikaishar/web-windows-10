export type Programs = {
  startMenu: boolean;
  settingOne: boolean;
  settingTwo: boolean;
  searcher: boolean;
};

export type TAppAction =
  | {
      type: "SET_PROGRAM_STATE";
      payload: { name: keyof Programs };
    }
  | { type: ""; payload: null }
  | { type: ""; payload: null };

export interface IAppState {
  programState: { [P in keyof Programs]: boolean };
}

export interface IAppContext extends IAppState {
  setProgramState: (name: keyof Programs, state: boolean) => void;
  toggleProgramState: (name: keyof Programs) => void;
}