import { cn } from "../../../utils/cn";

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "tw-group tw-flex tw-overflow-hidden tw-p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "tw-flex-row": !vertical,
          "tw-flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "tw-flex tw-shrink-0 tw-justify-around [gap:var(--gap)]",
              {
                "tw-animate-marquee tw-flex-row": !vertical,
                "tw-animate-marquee-vertical tw-flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
