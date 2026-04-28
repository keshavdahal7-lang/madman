import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  title?: string;
};

function IconBase({ size = 24, title, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="2" y="9" width="2.4" height="6" rx="1" />
      <rect x="19.6" y="9" width="2.4" height="6" rx="1" />
      <rect x="5" y="8" width="2.4" height="8" rx="1" />
      <rect x="16.6" y="8" width="2.4" height="8" rx="1" />
      <rect x="7.8" y="11" width="8.4" height="2" rx="1" />
    </IconBase>
  );
}

export function BarbellIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 9v6" />
      <path d="M5.5 8v8" />
      <path d="M8 10v4" />
      <path d="M16 10v4" />
      <path d="M18.5 8v8" />
      <path d="M21 9v6" />
      <path d="M8 12h8" />
    </IconBase>
  );
}

export function KettlebellIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8.5 9V7.7A3.5 3.5 0 0 1 12 4.2a3.5 3.5 0 0 1 3.5 3.5V9" />
      <path d="M6.3 11.2A2.2 2.2 0 0 1 8.5 9h7a2.2 2.2 0 0 1 2.2 2.2v5.3A3.5 3.5 0 0 1 14.2 20H9.8a3.5 3.5 0 0 1-3.5-3.5z" />
    </IconBase>
  );
}

export function RunningIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="14.5" cy="5.2" r="1.6" />
      <path d="M10.5 10.2l2.5-2 2.5 1" />
      <path d="M13 8.2l-1 3.8 2.8 2" />
      <path d="M12 12l-3.8 2.2" />
      <path d="M14.8 14l2.8 2.5" />
      <path d="M10.3 14.6l-2.6 3.2" />
    </IconBase>
  );
}

export function JumpRopeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="2.5" height="6" rx="1" />
      <rect x="18.5" y="4" width="2.5" height="6" rx="1" />
      <path d="M5.5 8c2 7 11 7 13 0" />
      <path d="M9.5 14.5c0 1.4 1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
    </IconBase>
  );
}

export function StopwatchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 13l2.7-2" />
      <path d="M10 3h4" />
      <path d="M14.5 5.2l1.6-1.6" />
    </IconBase>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-7-4.8-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.2-7 10-7 10z" />
      <path d="M7.8 12h2.2l1.3-2.2 1.5 4 1.1-1.8h2.3" />
    </IconBase>
  );
}

export function YogaIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="5.4" r="1.6" />
      <path d="M12 8v4" />
      <path d="M8.2 10.2L12 12l3.8-1.8" />
      <path d="M7 16c1.6-1.3 3.2-2 5-2s3.4.7 5 2" />
      <path d="M6 19h12" />
    </IconBase>
  );
}

export function BottleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M10 3h4" />
      <path d="M10.8 3v2.3l-1.9 2.3v9.4A2 2 0 0 0 10.9 19h2.2a2 2 0 0 0 2-2V7.6l-1.9-2.3V3" />
      <path d="M9 11h6" />
    </IconBase>
  );
}

export function TapeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 7h9a5 5 0 1 1 0 10H9a3 3 0 0 1 0-6h5" />
      <path d="M8 11h1" />
      <path d="M10.5 11h1" />
      <path d="M13 11h1" />
    </IconBase>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 4h10v3a5 5 0 0 1-10 0z" />
      <path d="M7 6H5a2 2 0 0 0 2 2" />
      <path d="M17 6h2a2 2 0 0 1-2 2" />
      <path d="M12 12v3" />
      <path d="M9 19h6" />
      <path d="M10 15h4" />
    </IconBase>
  );
}
