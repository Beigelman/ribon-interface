import React, { useEffect, useState } from "react";
import { Animate } from "react-move";

export type Props = {
  repeat: boolean;
  duration: number;
  valueStart: number;
  children(value: number): JSX.Element;
  valueEnd: number;
  easingFunction(normalizedTime: number): number;
};
function AnimatedProgressProvider({
  repeat,
  duration,
  valueStart,
  children,
  valueEnd,
  easingFunction,
}: Props): JSX.Element {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (repeat) {
      window.setInterval(() => {
        setIsAnimated((prevAnimated) => !prevAnimated);
      }, duration * 1000);
    } else {
      setIsAnimated((prevAnimated) => !prevAnimated);
    }
  }, [duration, repeat]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => <div>{children(value)}</div>}
    </Animate>
  );
}

export default AnimatedProgressProvider;
