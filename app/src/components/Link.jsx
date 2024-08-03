
function Link ({href, target, className, rel, children}) {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}

export default Link;
