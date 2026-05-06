function IconBase({ children, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      {children}
    </svg>
  );
}

function SparkIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="m6.5 6.5 2.8 2.8" />
      <path d="m14.7 14.7 2.8 2.8" />
      <path d="m17.5 6.5-2.8 2.8" />
      <path d="m9.3 14.7-2.8 2.8" />
      <circle cx="12" cy="12" r="2.5" />
    </IconBase>
  );
}

function PeelIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 4h10" />
      <path d="M9 4v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4" />
      <path d="M6 20c1.8-2.7 4.1-4 6-4s4.2 1.3 6 4" />
    </IconBase>
  );
}

function PulseIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </IconBase>
  );
}

function FlowIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M4 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    </IconBase>
  );
}

function DropIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3c3.5 4 5 6.4 5 9a5 5 0 1 1-10 0c0-2.6 1.5-5 5-9Z" />
    </IconBase>
  );
}

function LipsIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 12c2.2-2.2 4.4-3.3 8-3.3S17.8 9.8 20 12c-2.2 2.2-4.4 3.3-8 3.3S6.2 14.2 4 12Z" />
      <path d="M7 12c1.7 1.3 3.3 1.9 5 1.9s3.3-.6 5-1.9" />
    </IconBase>
  );
}

function OrbIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
      <path d="M8.5 15c1-.9 2.2-1.5 3.5-1.5s2.5.6 3.5 1.5" />
    </IconBase>
  );
}

function SmoothIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 7c2.5 0 2.5 3 5 3s2.5-3 5-3" />
      <path d="M6 13c2.5 0 2.5 3 5 3s2.5-3 5-3" />
    </IconBase>
  );
}

function VeinIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 4v16" />
      <path d="M12 9c-2.5 0-2.5 3-5 3" />
      <path d="M12 15c2.5 0 2.5-3 5-3" />
    </IconBase>
  );
}

function OutlineIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12c2.1-2.4 4.3-3.6 7-3.6s4.9 1.2 7 3.6c-2.1 2.4-4.3 3.6-7 3.6S7.1 14.4 5 12Z" />
      <path d="M8 12h8" />
    </IconBase>
  );
}

function ShapeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 5h10v14H7z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </IconBase>
  );
}

function MoleculeIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="7" cy="12" r="2" />
      <circle cx="16.5" cy="7.5" r="2" />
      <circle cx="16.5" cy="16.5" r="2" />
      <path d="M8.8 11.2 14.7 8.3" />
      <path d="m8.9 12.8 5.8 2.8" />
    </IconBase>
  );
}

function InstagramIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M16.6 7.6h.01" />
    </IconBase>
  );
}

function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M13.4 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.6 1.6-1.6H16V4a14 14 0 0 0-1.8-.1c-2.4 0-4 1.4-4 4.1V10H8v3h2.2v7" />
    </IconBase>
  );
}

function LinkedInIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7.3 9.4V18" />
      <path d="M7.3 6.7h.01" />
      <path d="M11.3 18v-4.8c0-1.8 1-3 2.6-3 1.5 0 2.3 1 2.3 2.9V18" />
      <path d="M11.3 11.1V9.4" />
    </IconBase>
  );
}

function ChevronLeftIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m14.5 6-5 6 5 6" />
    </IconBase>
  );
}

function ChevronRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m9.5 6 5 6-5 6" />
    </IconBase>
  );
}

function WhatsAppIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M20 11.6A8 8 0 0 1 8.3 18.7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
      <path d="M9.2 8.8c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.3 1.7.7.6 1.4 1 2.2 1.3.2.1.4 0 .5-.1l.5-.6c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.5v.5c0 .4-.2.7-.5.9-.4.3-.9.4-1.5.3-1-.2-2-.6-2.9-1.2a10.3 10.3 0 0 1-3.5-3.5c-.6-.9-1-1.9-1.2-2.9-.1-.5 0-1 .2-1.4Z" />
    </IconBase>
  );
}

export {
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  FlowIcon,
  InstagramIcon,
  LinkedInIcon,
  LipsIcon,
  MoleculeIcon,
  OrbIcon,
  OutlineIcon,
  PeelIcon,
  PulseIcon,
  ShapeIcon,
  SmoothIcon,
  SparkIcon,
  DropIcon,
  VeinIcon,
  WhatsAppIcon,
};
