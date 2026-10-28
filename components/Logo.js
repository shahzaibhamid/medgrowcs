// Typographic "HealthCare by CodeSquad" lockup. Rendered inline (not <img>) so it
// uses the site's web fonts and can animate. The wrapping link carries the label.
export default function Logo({ size = 'md', variant = 'light', animate = true }) {
  const cls = ['brand-logo', `brand-logo--${size}`];
  if (variant === 'dark') cls.push('brand-logo--dark');
  if (animate) cls.push('brand-logo--animate');

  return (
    <span className={cls.join(' ')} aria-hidden="true">
      <svg className="brand-logo__mark" viewBox="0 0 40 40">
        <rect className="brand-logo__tile" x="1" y="1" width="38" height="38" rx="11" />
        <g className="brand-logo__cross">
          <path pathLength="1" d="M20 11v18" />
          <path pathLength="1" d="M11 20h18" />
        </g>
      </svg>
      <span className="brand-logo__text">
        <span className="brand-logo__name">Health<em>Care</em></span>
        <span className="brand-logo__by">by <b>CodeSquad</b></span>
      </span>
    </span>
  );
}
