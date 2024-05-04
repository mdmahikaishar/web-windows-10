import { BiNote, BiWallet } from "react-icons/bi";
import AppIcon from "../AppIcon";


const TOP_APPS = [
  { name: "One Note", Icon: BiNote },
  { name: "Wallet", Icon: BiWallet },
];

export default function RecentlyAdded() {
  return (
    <div className="h-full grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] place-content-start gap-4 scrollYHidden">
      {TOP_APPS.map((app) => (
        <AppIcon app={app} key={app.name} />
      ))}
    </div>
  );
}
