import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-panel px-4 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-panel text-tx3">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
      <h1 className="text-lg font-semibold text-tx1">Page not found</h1>
      <p className="max-w-sm text-sm text-tx2">
        This page doesn&apos;t exist in this portfolio.
      </p>
      <Link
        href="/"
        className="rounded-lg border border-line bg-card px-4 py-2 text-xs font-semibold text-tx1 shadow-sm transition hover:bg-hover"
      >
        Go home
      </Link>
    </div>
  );
}
