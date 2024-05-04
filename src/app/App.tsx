import { AppContextProvider } from "../contexts/AppContext";
import Taskbar from "../components/Taskbar";
import StartMenu from "../components/StartMenu";
import SettingOne from "../components/SettingOne";
import SettingTwo from "../components/SettingTwo";
import Searcher from "../components/Searcher";

export default function App() {
  return (
    <>
      <AppContextProvider>
        {/* <Window /> */}
        <StartMenu />
        <SettingOne />
        <SettingTwo />
        <Searcher />
        <Taskbar />
      </AppContextProvider>
    </>
  )
}
