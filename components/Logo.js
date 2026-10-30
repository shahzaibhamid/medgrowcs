import Image from 'next/image';

export default function Logo({ size = 'md', variant = 'light' }) {
  const onDark = variant === 'dark';

  return (
    <span className={`brand-logo brand-logo--${size}`} aria-hidden="true">
      <Image
        className="brand-logo__image"
        src={onDark ? '/codesquad-logo-on-dark.png' : '/codesquad-logo-on-light.png'}
        alt=""
        width={384}
        height={onDark ? 71 : 83}
        priority
      />
    </span>
  );
}