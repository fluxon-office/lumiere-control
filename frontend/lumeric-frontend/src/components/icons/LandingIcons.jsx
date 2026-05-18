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
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.02 3.2A12.7 12.7 0 0 0 5.1 22.43L3.6 28.8l6.52-1.47A12.69 12.69 0 1 0 16.02 3.2Zm0 22.86c-1.94 0-3.83-.55-5.47-1.58l-.39-.24-3.88.87.9-3.78-.25-.4A10.18 10.18 0 1 1 16.02 26.06Zm5.9-7.63c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.46.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
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
