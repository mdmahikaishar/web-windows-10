import QuickAds from "./QuickAds";
import QuickApps from "./QuickApps";
import QuickHistory from "./QuickHistory";
import QuickWelcome from "./QuickWelcome";

export default function QuickAccessPanel() {
  return (
    <div className="flex flex-col gap-1">
      <QuickWelcome />
      <div className="grow flex flex-col gap-1 scrollY scrollYHidden">
        <QuickApps />
        <QuickAds />
        <QuickHistory />
      </div>
    </div>
  );
}
