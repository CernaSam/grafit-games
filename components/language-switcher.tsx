"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "cs" : "en")
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="w-12 px-2 text-sm font-medium">
      {t("language")}
    </Button>
  )
}
