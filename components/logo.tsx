import Link from "next/link";

interface LogoProps {
  className?: string;
  asLink?: boolean;
}

export function Logo({ className = "", asLink = true }: LogoProps) {
  const content = (
    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
      Vikiflow
    </h3>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className={`inline-block hover:opacity-80 transition-opacity ${className}`}
      >
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
