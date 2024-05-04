import Content from "./Content";
import QuickAccess from "./QuickAccess";
import Searchbox from "./Searchbox";
import Welcome from "./Welcome";
import styles from "../../styles/styles";
import { useAppContext } from "../../contexts/AppContext";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function Searcher() {
  const app = useAppContext();
  const ref = useRef({} as HTMLDivElement);
  
  useOutsideClick([ref], app.programState.searcher, () => app.setProgramState("searcher", false));

  return app.programState.searcher && (
    <div className={`w-[35rem] h-[75vh] max-h-[40rem] p-6 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col gap-4 ${styles.windowTransparent} shadow-xl`} ref={ref}>
      <div className="grow mx-auto w-10/12 flex flex-col gap-6">
        <Welcome />
        <Searchbox />
        <Content />
      </div>
      <QuickAccess />
    </div>
  );
}
