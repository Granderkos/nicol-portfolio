export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" class="w-5.5 h-5.5"/>
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
