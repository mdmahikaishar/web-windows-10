import { SETTING_OPTIONS } from "./data";
import Option from "./Option";

export default function SettingHead() {
  return (
    <div className="flex-none bg-gray-900">
      <div className="mx-auto w-10/12 py-4 flex items-center justify-between">
        {/* headUser */}
        <div className="flex items-center gap-4">
          {/* headUserImage */}
          <div className="w-24 aspect-square grid rounded-full overflow-hidden select-none">
            <img
              src="/bg-dark.jpg"
              className="w-full h-full object-cover"
              alt="user"
            />
          </div>
          {/* headUserInfo */}
          <div className="flex flex-col gap-1 cursor-default">
            <h1 className="mb-2 font-semibold text-2xl">Kaishar</h1>
            <span className="text-sm text-gray-300">mahikaishar@gmail.com</span>
            <a href="/" className="text-sm text-blue-500">
              Microsoft Accont
            </a>
          </div>
        </div>

        {/* recentOptions */}
        <div className="grid grid-cols-[repeat(3,7.5rem)] gap-1">
          {SETTING_OPTIONS.map((option) => (
            <Option option={option} key={option.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
