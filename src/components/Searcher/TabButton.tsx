export default function TabButton({
  name,
  onClick
}: {
  name: string;
  onClick?: () => void;
}) {
  return (
    <button className="px-4 py-1 font-semibold text-sm bg-transparent border-b-2 border-b-transparent hover:border-b-blue-500" onClick={onClick}>
      {name}
    </button>
  );
}
