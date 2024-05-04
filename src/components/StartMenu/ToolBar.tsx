"use client";
import { useAppContext } from "../../contexts/AppContext";
import { IconType } from "react-icons";
import {
  AiOutlineMenu,
  AiOutlinePoweroff,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

const styles = {
  button: "w-12 aspect-square grid place-items-center hover:bg-[#00000020]",
};

/**
 * styles: w-12
 */
export default function ToolBar() {
  const app = useAppContext();

  return (
    <div className="flex flex-col items-center justify-between bg-[#00000080] shadow-xl">
      <div className="flex flex-col items-center gap-1">
        <Button Icon={AiOutlineMenu} key="startMenuToolbarMenu" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <Button Icon={AiOutlineUser} key="startMenuToolbarUser" />
        <Button
          Icon={AiOutlineSetting}
          onClick={() => {
            app.setProgramState("startMenu", false);
            app.setProgramState("settingTwo", true);
          }}
          key="startMenuToolbarSetting"
        />
        <Button Icon={AiOutlinePoweroff} key="startMenuToolbarShutdown" />
      </div>
    </div>
  );
}

interface IToolBarButton extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
}

function Button({ Icon, className = "", ...props }: IToolBarButton) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <Icon />
    </button>
  );
}
