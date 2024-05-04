import { useState } from "react";
import TabButton from "../TabButton";
import AllApps from "./AllApps";
import RecentlyAdded from "./RecentlyAdded";
import TopApps from "./TopApps";

export default function Content({}: { search?: boolean }) {
  const [active, setActive] = useState("TopApps");

  return (
    <div className="grow flex flex-col gap-4">
      <div className="flex-none flex items-center justify-evenly">
        <TabButton name="Top apps" onClick={() => setActive("TopApps")} />
        <TabButton name="Recently added" onClick={() => setActive("RecentlyAdded")} />
        <TabButton name="All apps" onClick={() => setActive("AllApps")} />
      </div>

      <div className="grow">
        {active === "TopApps" ? (
            <TopApps />
          ) : active === "RecentlyAdded" ? (
            <RecentlyAdded />
          ) : (
            <AllApps />
          )
        }
      </div>
    </div>
  );
}
