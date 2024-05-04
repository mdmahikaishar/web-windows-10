import AppIcon from "../AppIcon";
import { BiPhotoAlbum } from "react-icons/bi";

const TOP_APPS = [
  { name: "Photos", Icon: BiPhotoAlbum },
  { name: "Gallary", Icon: BiPhotoAlbum },
];

export default function TopApps() {
  return (
    <div className="h-full grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] place-content-start gap-4 scrollYHidden">
      {TOP_APPS.map((app) => (
        <AppIcon app={app} key={app.name} />
      ))}
    </div>
  );
}
