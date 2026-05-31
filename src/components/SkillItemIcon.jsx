const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function Icon({ children, fill = 'none' }) {
  return (
    <svg {...iconProps} fill={fill}>
      {children}
    </svg>
  )
}

const icons = {
  'Social Media Strategy': (
    <Icon>
      <path d="M4 18V6l8-3 8 3v12" />
      <path d="M12 9v12M4 6l8 3 8-3" />
    </Icon>
  ),
  'Content Calendar Management': (
    <Icon>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </Icon>
  ),
  'Community Management': (
    <Icon>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14 19c0-2.2 1.8-4 4-4" />
    </Icon>
  ),
  'Brand Storytelling': (
    <Icon>
      <path d="M5 5h14v14H5z" />
      <path d="M8 9h8M8 13h6" />
    </Icon>
  ),
  'Organic Growth': (
    <Icon>
      <path d="M4 18h16" />
      <path d="M7 14l3-4 3 2 4-6" />
      <path d="M17 6h2v2" />
    </Icon>
  ),
  'Google Ads': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M12 4.5 4 19.5h3.5L12 11l4.5 8.5H20L12 4.5Z" />
      <path fill="#FBBC04" d="M12 11 7.5 19.5H11L12 17.5 13 19.5h3.5L12 11Z" />
      <path fill="#34A853" d="M12 4.5 7 14.5 4 19.5h3.5L12 11V4.5Z" />
    </svg>
  ),
  'Meta Ads': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="url(#meta-gradient)"
        d="M12 4c-3.2 0-5.8 2.4-6.8 5.5C4.2 12.6 6.4 16 9.5 16c1.8 0 3.3-1 4.2-2.5.9 1.5 2.4 2.5 4.2 2.5 3.1 0 5.3-3.4 4.3-6.5C20.8 6.4 18.2 4 15 4c-1.8 0-3 1-3 3s-1.2-3-3-3Z"
      />
      <defs>
        <linearGradient id="meta-gradient" x1="4" y1="4" x2="20" y2="16">
          <stop stopColor="#0866FF" />
          <stop offset="1" stopColor="#A033FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'Campaign Optimisation': (
    <Icon>
      <path d="M4 14h4v6H4zM10 10h4v10h-4zM16 6h4v14h-4z" />
    </Icon>
  ),
  'A/B Testing': (
    <Icon>
      <path d="M8 4v16M16 4v16M4 8h8M12 16h8" />
    </Icon>
  ),
  'ROI Tracking': (
    <Icon>
      <path d="M4 18V6h16v12H4z" />
      <path d="M8 14l3-3 2 2 4-5" />
    </Icon>
  ),
  'Reels Production': (
    <Icon>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m10 9 6 3-6 3V9z" fill="currentColor" stroke="none" />
    </Icon>
  ),
  'Short-Form Video Editing': (
    <Icon>
      <path d="M4 7h12v10H4z" />
      <path d="M16 10l4-2v8l-4-2" />
      <path d="M8 11h4" />
    </Icon>
  ),
  Copywriting: (
    <Icon>
      <path d="M4 18h12" />
      <path d="M7 4l9 9-4 4-9-9 4-4z" />
    </Icon>
  ),
  Canva: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#00C4CC" />
      <path
        fill="#fff"
        d="M9.2 8.2c.8-1.1 2.4-1.3 3.4-.4.6.5.8 1.2.7 1.9-.1.8-.7 1.4-1.5 1.6 1 .2 1.7 1 1.7 2 0 1.2-1 2.2-2.2 2.2H8.5V8.2H9.2zm-.7 2.4h1.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1.1v1.8zm0 3.1h1.3c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-1.3v2.2zM14.8 8.2h1.8c1.4 0 2.4 1 2.4 2.3s-1 2.3-2.4 2.3h-1.8V8.2z"
      />
    </svg>
  ),
  Filmora: (
    <Icon>
      <path d="M4 6h16v12H4z" />
      <path d="M8 6v12M16 6v12M4 10h16M4 14h16" />
    </Icon>
  ),
  'AI Video Tools': (
    <Icon>
      <path d="M12 3l1.4 4.3H18l-3.6 2.6 1.4 4.3L12 11.6 8.2 14.2l1.4-4.3L6 7.3h4.6L12 3z" />
      <rect x="4" y="16" width="16" height="4" rx="1" />
    </Icon>
  ),
  'Google Analytics': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F9AB00" d="M5 18V8h3v10H5z" />
      <path fill="#E37400" d="M10.5 18V5h3v13h-3z" />
      <circle cx="18" cy="16" r="3" fill="#E37400" />
    </svg>
  ),
  'Google Search Console': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M12 4a8 8 0 1 0 5.3 14l3.7 3.7-1.4 1.4-3.7-3.7A8 8 0 0 1 12 4zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
      <path fill="#34A853" d="M11 8h2v5h-2z" />
      <path fill="#34A853" d="M11 14h2v2h-2z" />
    </svg>
  ),
  'Google Tag Manager': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#8AB4F8" d="M12 3 4 11l8 8 8-8-8-8zm0 3.8L16.2 11 12 15.2 7.8 11 12 6.8z" />
      <path fill="#4285F4" d="M12 15.2 16.2 11H7.8L12 15.2z" />
    </svg>
  ),
  'Meta Insights': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#0866FF" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#A033FF" />
      <rect x="16" y="5" width="4" height="15" rx="1" fill="#0866FF" />
    </svg>
  ),
  'Performance Reporting': (
    <Icon>
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </Icon>
  ),
  'WhatsApp Automation': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#25D366" />
      <path
        fill="#fff"
        d="M8.5 7.5c2.8-2.8 7.4-2.4 10.1.3 2.3 2.3 2.5 5.8.6 8.3l.7 2.6-2.7-.7c-1.9 1-4.2.8-6-0.4-2.5-1.8-3.1-5.2-1.3-7.8-.4.5-.9 1.2-1.4 2.7z"
      />
    </svg>
  ),
  Zapier: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#FF4A00" />
      <path stroke="#fff" strokeWidth="2" strokeLinecap="round" d="M12 7v10M7 12h10" />
    </svg>
  ),
  n8n: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" fill="#EA4B71" />
      <circle cx="18" cy="6" r="2.5" fill="#EA4B71" />
      <circle cx="18" cy="18" r="2.5" fill="#EA4B71" />
      <path stroke="#EA4B71" strokeWidth="1.75" d="M8.5 11.2 15.5 7.2M8.5 12.8l7 4" />
    </svg>
  ),
  'Zoho CRM': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#E42527" />
      <path fill="#fff" d="M7 9h10v2H7zm0 4h7v2H7z" />
    </svg>
  ),
  Buffer: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="4" rx="2" fill="#231F20" />
      <rect x="4" y="10" width="16" height="4" rx="2" fill="#168EDA" />
      <rect x="4" y="15" width="16" height="4" rx="2" fill="#76B852" />
    </svg>
  ),
  Hootsuite: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#143059" />
      <path
        fill="#fff"
        d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4c-.6 0-1.2-.1-1.7-.4L8 16l.4-2.3C8.1 13 8 12.5 8 12V10z"
      />
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#21759B" />
      <path
        fill="#fff"
        d="M12 5.5c-3.6 0-6.5 2.9-6.5 6.5S8.4 18.5 12 18.5s6.5-2.9 6.5-6.5S15.6 5.5 12 5.5zm-2.8 10.2 1.1-3.2 1.2 3.2H9.2zm4.1 0 .9-2.6.8 2.6h-1.7z"
      />
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#E44D26" d="M4 3h16l-1.5 17-6.5 2-6.5-2L4 3z" />
      <path fill="#fff" d="M8 8h8l-.3 3H9.2l.2 2.2 3.6 1 .3 3.2L12 18l-3.3-.9-.2-2h2.8l.1 1 1.7.5 1.7-.5.3-3.3-4.2-1.2-.3-3.2h5.3l.3-3H8z" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1572B6" d="M4 3h16l-1.5 17-6.5 2-6.5-2L4 3z" />
      <path fill="#fff" d="M8 8h8l-.4 4H9l.2 2.2 3.5 1 .3 3.2L12 18l-3.2-.9-.2-2h2.7l.1 1 1.7.5 1.7-.5.3-3.3-4.1-1.2-.3-3.2h5.2l.4-4H8z" />
    </svg>
  ),
  'On-Page SEO': (
    <Icon>
      <circle cx="10" cy="10" r="6" />
      <path d="M15 15l5 5" />
      <path d="M8 10h4M10 8v4" />
    </Icon>
  ),
  'Website Development': (
    <Icon>
      <path d="M4 7h16v10H4z" />
      <path d="M4 10h16M8 7V5M16 7V5" />
      <path d="M8 14h.01M11 14h2" />
    </Icon>
  ),
}

const fallbackIcon = (
  <Icon>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v8M8 12h8" />
  </Icon>
)

export function SkillItemIcon({ name }) {
  return icons[name] ?? fallbackIcon
}
