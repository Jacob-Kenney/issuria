export function PartnerLogos() {
    const logos = [
      { name: "Open Banking Project", logo: "/obp-logo.png" },
      { name: "Scaleway", logo: "/scaleway-logo.png" },
    ]
  
    return (
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center">
            <img src={logo.logo || "/placeholder.svg"} alt={logo.name} className="h-8 max-w-[120px] object-contain" />
          </div>
        ))}
      </div>
    )
  }
  