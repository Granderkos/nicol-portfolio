export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-medium text-foreground">Nicol Štampferová</span>
        </div>

        <p className="text-sm text-muted-foreground">2D Grafická Designérka</p>

        <p className="text-sm text-muted-foreground">
          © {currentYear}
        </p>
      </div>
    </footer>
  )
}
