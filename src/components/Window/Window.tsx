import { useRef } from "react";
import { useMoveable } from "../../libs/moveable";

export default function Window() {
  const move = useRef({} as HTMLDivElement);

  const moveable = useMoveable(move);


  return (
    <div className="window" ref={move}>
      <div className="titlebar" {...moveable}>
        <span className="titilebar-name">Moving App</span>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure exercitationem, vel tenetur illum ipsam ratione neque at eos. Quibusdam repellendus omnis repudiandae corrupti illo consectetur natus voluptatibus aliquam distinctio!
      </div>
    </div>
  )
}
