"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "cs"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.process": "Process",
    "nav.about": "About Us",

    // Hero
    "hero.badge": "Launching 2026",
    "hero.title": "Turn Your Student Game Into a Successful Business",
    "hero.description":
      "GameLaunch provides the legal structure and funding you need to take your developed game from classroom project to market success.",
    "hero.learnMore": "Learn More",
    "hero.watchDemo": "Watch Demo",

    // Process
    "process.title": "Our Incubation Process",
    "process.subtitle": "A structured journey to transform your game into a market-ready product",
    "process.step1.title": "1. Application & Selection",
    "process.step2.title": "2. Legal & Financial Setup",
    "process.step3.title": "3. Mentorship & Polishing",
    "process.step4.title": "4. Market Strategy",
    "process.step5.title": "5. Launch Preparation",
    "process.step6.title": "6. Market Release",
    "process.learnMore": "Learn more",

    // About Incubator
    "about.title": "About The Incubator",
    "about.stats.funding": "Initial Funding",
    "about.stats.teams": "Teams Per Year",
    "about.stats.duration": "Program Duration",
    "about.stats.success": "Success Rate",
    "about.why": "Why Choose GameLaunch?",
    "about.feature1": "Legal structure and incorporation assistance",
    "about.feature2": "Seed funding to support your launch",
    "about.feature3": "Industry mentors and expert guidance",
    "about.feature4": "Marketing and PR support for your game",

    // About Us
    "aboutUs.title": "About Us",
    "aboutUs.subtitle": "Meet the team behind GameLaunch",
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
    "signup.university": "University",
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
    "footer.rights": "© 2026 GameLaunch Incubator. All rights reserved.",

    // Language
    language: "CZ",
  },
  cs: {
    // Navigation
    "nav.process": "Proces",
    "nav.about": "O nás",

    // Hero
    "hero.badge": "Spouštíme 2026",
    "hero.title": "Proměňte svou studentskou hru v úspěšný byznys",
    "hero.description":
      "GameLaunch poskytuje právní strukturu a financování, které potřebujete k přeměně vaší hry ze školního projektu na úspěšný produkt.",
    "hero.learnMore": "Zjistit více",
    "hero.watchDemo": "Zhlédnout demo",

    // Process
    "process.title": "Náš inkubační proces",
    "process.subtitle": "Strukturovaná cesta k přeměně vaší hry na produkt připravený pro trh",
    "process.step1.title": "1. Přihláška a výběr",
    "process.step2.title": "2. Právní a finanční nastavení",
    "process.step3.title": "3. Mentoring a vylepšování",
    "process.step4.title": "4. Marketingová strategie",
    "process.step5.title": "5. Příprava na uvedení",
    "process.step6.title": "6. Uvedení na trh",
    "process.learnMore": "Zjistit více",

    // About Incubator
    "about.title": "O inkubátoru",
    "about.stats.funding": "Počáteční financování",
    "about.stats.teams": "Týmů za rok",
    "about.stats.duration": "Délka programu",
    "about.stats.success": "Úspěšnost",
    "about.why": "Proč zvolit GameLaunch?",
    "about.feature1": "Právní struktura a pomoc se založením",
    "about.feature2": "Počáteční financování pro váš start",
    "about.feature3": "Mentoři z oboru a odborné vedení",
    "about.feature4": "Marketingová a PR podpora pro vaši hru",

    // About Us
    "aboutUs.title": "O nás",
    "aboutUs.subtitle": "Seznamte se s týmem za GameLaunch",
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
    "signup.university": "Univerzita",
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
    "footer.rights": "© 2026 GameLaunch Inkubátor. Všechna práva vyhrazena.",

    // Language
    language: "EN",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
