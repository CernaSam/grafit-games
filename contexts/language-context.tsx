"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "cs"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LOCAL_STORAGE_KEY = "preferred-language"

const translations = {
  en: {
    
    // Navigation
    "nav.process": "Process",
    "nav.about": "About Us",
    "nav.legal": "Legal Form",
    
    // Hero
    "hero.badge": "🚧 Launching Soon!  Expected: September 2026 🔧",
    "hero.title": "Turn Your Student Game Into a Successful Business",
    "hero.description":
    "Grafit Games provides the legal structure and funding you need to take your developed game from classroom project to market success.",
    "hero.learnMore": "Learn About Grafit",
    "hero.watchDemo": "Watch Demo",
    
    // Process
    "process.title": "Our Incubation Process",
    "process.subtitle": "A structured journey to transform your game into a market-ready product",
    "process.steps": [
      {
        title: "1. Application & Selection",
        short: "Submit your game and get selected.",
        full: "Submit your application with a playable build or concept, and we'll evaluate teams based on originality, feasibility, and market potential. ",
      },
      {
        title: "2. Legal & Financial Setup",
        short: "Get incorporated and funded.",
        full: "We help set up your company, sort out ownership structure, and provide initial funding for your development.",
      },
      {
        title: "3. Mentorship & Polishing",
        short: "Iterate with expert support.",
        full: "Access experienced game dev mentors who help refine your game design, art direction, and technical polish.",
      },
      {
        title: "4. Market Strategy",
        short: "Prepare for your audience.",
        full: "We guide your positioning, marketing strategy, and help build your community through social media and influencers.",
      },
      {
        title: "5. Launch Preparation",
        short: "Lock in your launch plan.",
        full: "Develop your final build, store presence, trailers, and all materials needed for a strong launch.",
      },
      {
        title: "6. Market Release",
        short: "Release your game to the world.",
        full: "Launch across platforms, get post-release analytics, and continue with support, patches, and potential funding rounds.",
      },
    ],
    
    // About Incubator
    "about.title": "About The Incubator",
    "about.stats.funding": "Initial Funding",
    "about.stats.teams": "Teams Per Year",
    "about.stats.duration": "Program Duration",
    "about.stats.success": "Success Rate",
    "about.why": "Why Choose Grafit Games?",
    "about.feature1": "Legal structure and incorporation assistance",
    "about.feature2": "Seed funding to support your launch",
    "about.feature3": "Industry mentors and expert guidance",
    "about.feature4": "Marketing and PR support for your game",

    // About Us
    "aboutUs.title": "About Us",
    "aboutUs.subtitle": "Meet the team behind Grafit Games",
    "aboutUs.partners": "Our University Partners",

    // Legal Structure
    "legal.title": "Legal Structure",
    "legal.subtitle": "How our incubator supports your business legally",
    "legal.intro":
      "Our incubator provides a comprehensive legal framework to help student game developers transition from academic projects to commercial ventures.",
    "legal.entity.title": "Legal Entity Formation",
    "legal.entity.description":
      "We assist in establishing the appropriate business entity (LLC, corporation) for your game studio with all necessary documentation.",
    "legal.ip.title": "IP Protection",
    "legal.ip.description":
      "We help secure and protect your intellectual property through patents, trademarks, and copyright registrations.",
    "legal.contracts.title": "Contract Templates",
    "legal.contracts.description":
      "Access to professionally drafted contracts for team members, contractors, publishers, and distribution platforms.",
    "legal.compliance.title": "Regulatory Compliance",
    "legal.compliance.description":
      "Guidance on industry-specific regulations, privacy policies, terms of service, and age ratings.",

    // Sign Up
    "signup.title": "Get Notified When We Launch",
    "signup.subtitle": "Be the first to know when applications open for our 2026 cohort",
    "signup.name": "Full Name",
    "signup.email": "Email",
    "signup.discord": "Discord Username (optional)",
    "signup.game": "Game Project (optional)",
    "signup.button": "Sign Up for Updates",
    "signup.terms": "By signing up, you agree to our",
    "signup.termsLink": "Terms of Service",
    "signup.and": "and",
    "signup.privacyLink": "Privacy Policy",

    // Footer
    "footer.tagline": "Turning student games into successful businesses since 2026.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.rights": "© 2025 Grafit Games Incubator. All rights reserved.",

    // Language
    language: "CZ",
  },
  cs: {
    // Navigation
    "nav.process": "Proces",
    "nav.about": "O nás",
    "nav.legal": "Legální forma",

    // Hero
    "hero.badge": "🚧 Spouštíme brzy!  Odhad: Září 2026 🔧",
    "hero.title": "Proměňte svou studentskou hru v úspěšný byznys",
    "hero.description":
      "Grafit Games poskytuje právní strukturu a financování, které potřebujete k přeměně vaší hry ze školního projektu na úspěšný produkt.",
    "hero.learnMore": "Zjistit více o Grafit",
    "hero.watchDemo": "Zhlédnout demo",

    // Process
    "process.title": "Náš inkubační proces",
    "process.subtitle": "Strukturovaná cesta k přeměně vaší hry na produkt připravený pro trh",
    "process.steps": [
      {
        title: "1. Přihláška a výběr",
        short: "Odešlete svou hru a buďte vybráni.",
        full: "Pošlete přihlášku s hratelným buildem nebo konceptem a my ohodnotíme týmy podle originality, proveditelnosti a tržního potenciálu.",
      },
      {
        title: "2. Právní a finanční nastavení",
        short: "Založte firmu a získejte finance.",
        full: "Pomůžeme vám založit společnost, vyřešit vlastnickou strukturu a získat počáteční financování pro vývoj.",
      },
      {
        title: "3. Mentoring a vylepšování",
        short: "Iterujte s podporou odborníků.",
        full: "Získáte přístup ke zkušeným mentorům, kteří pomohou s designem hry, vizuály i technickým zpracováním.",
      },
      {
        title: "4. Marketingová strategie",
        short: "Připravte se na své publikum.",
        full: "Pomáháme s positioningem, marketingem a budováním komunity přes sociální sítě a influencery.",
      },
      {
        title: "5. Příprava na uvedení",
        short: "Uzavřete plán spuštění.",
        full: "Vytvořte finální verzi hry, stránky v obchodech, trailery a všechny potřebné materiály pro silné uvedení.",
      },
      {
        title: "6. Uvedení na trh",
        short: "Uveďte svou hru světu.",
        full: "Spusťte hru napříč platformami, sledujte analýzy a pokračujte s podporou, aktualizacemi i dalším financováním.",
      },
    ],

    // About Incubator
    "about.title": "O inkubátoru",
    "about.stats.funding": "Počáteční financování",
    "about.stats.teams": "Týmů za rok",
    "about.stats.duration": "Délka programu",
    "about.stats.success": "Úspěšnost",
    "about.why": "Proč zvolit Grafit Games?",
    "about.feature1": "Právní struktura a pomoc se založením",
    "about.feature2": "Počáteční financování pro váš start",
    "about.feature3": "Mentoři z oboru a odborné vedení",
    "about.feature4": "Marketingová a PR podpora pro vaši hru",

    // About Us
    "aboutUs.title": "O nás",
    "aboutUs.subtitle": "Seznamte se s týmem za Grafit Games",
    "aboutUs.partners": "Naši univerzitní partneři",

    // Legal Structure
    "legal.title": "Právní struktura",
    "legal.subtitle": "Jak náš inkubátor právně podporuje váš byznys",
    "legal.intro":
      "Náš inkubátor poskytuje komplexní právní rámec, který pomáhá studentským vývojářům her přejít od akademických projektů ke komerčním podnikům.",
    "legal.entity.title": "Založení právnické osoby",
    "legal.entity.description":
      "Pomáháme se založením vhodné formy podnikání (s.r.o., a.s.) pro vaše herní studio se všemi potřebnými dokumenty.",
    "legal.ip.title": "Ochrana duševního vlastnictví",
    "legal.ip.description":
      "Pomáháme zajistit a chránit vaše duševní vlastnictví prostřednictvím patentů, ochranných známek a autorských práv.",
    "legal.contracts.title": "Smluvní šablony",
    "legal.contracts.description":
      "Přístup k profesionálně vypracovaným smlouvám pro členy týmu, dodavatele, vydavatele a distribuční platformy.",
    "legal.compliance.title": "Regulační soulad",
    "legal.compliance.description":
      "Poradenství v oblasti specifických předpisů, zásad ochrany osobních údajů, obchodních podmínek a věkových hodnocení.",

    // Sign Up
    "signup.title": "Buďte informováni o spuštění",
    "signup.subtitle": "Buďte první, kdo se dozví, kdy se otevřou přihlášky pro náš ročník 2026",
    "signup.name": "Celé jméno",
    "signup.email": "Email",
    "signup.discord": "Discord uživatelské jméno (volitelné)",
    "signup.game": "Herní projekt (volitelné)",
    "signup.button": "Přihlásit se k odběru novinek",
    "signup.terms": "Přihlášením souhlasíte s našimi",
    "signup.termsLink": "Obchodními podmínkami",
    "signup.and": "a",
    "signup.privacyLink": "Zásadami ochrany osobních údajů",

    // Footer
    "footer.tagline": "Přeměňujeme studentské hry na úspěšné podniky od roku 2026.",
    "footer.quickLinks": "Rychlé odkazy",
    "footer.resources": "Zdroje",
    "footer.contact": "Kontakt",
    "footer.rights": "© 2025 Grafit Games Inkubátor. Všechna práva vyhrazena.",

    // Language
    language: "EN",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const storedLang = localStorage.getItem(LOCAL_STORAGE_KEY) as Language
    if (storedLang) {
      setLanguageState(storedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(LOCAL_STORAGE_KEY, lang)
  }

  const t = (key: string): any => {
    const value = translations[language][key as keyof typeof translations[typeof language]]
    return value ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
