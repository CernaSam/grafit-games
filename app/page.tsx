"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gamepad2, ArrowRight, BookOpen, Users, Rocket, Route, Shield, FileText, Scale, PaintRoller, HandCoins } from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const icons = [Users, Scale, PaintRoller, Route, Rocket, HandCoins]

function IncubationSteps() {
  const { t } = useLanguage()
  const [expandedStepIndex, setExpandedStepIndex] = useState<number | null>(null);
  const steps = t("process.steps", { returnObjects: true }) as Array<{ title: string; short: string; full: string }>

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t("process.title")}</h2>
          <p className="text-gray-500 max-w-[700px]">{t("process.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={index} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition" onClick={() => setExpandedStepIndex(prev => (prev === index ? null : index))}>
                <div className="mb-4">
                  <Icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{expandedStepIndex === index ? step.full : step.short}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary"/>
            <span className="text-xl font-bold invisible md:visible"><Link href="#hero">Grafit Games</Link></span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.process")}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#legal" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.legal")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="#signup">
              <Button className="bg-primary hover:bg-yellow-600 text-background">{t("signup.button")}</Button>
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-yellow-50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700 mb-4">
                {t("hero.badge")}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
                {t("hero.title1")}
                <span className="text-primary">
                  {t("hero.title2")}
                </span>
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[700px]">{t("hero.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="https://fit.cvut.cz/cs/veda-a-vyzkum/zazemi/vyzkumne-skupiny/8375-grafit" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-yellow-600 text-background px-8">
                    {t("hero.learnMore")}
                  </Button>
                </a>
                <a href="https://fit.cvut.cz/cs/zivot-na-fit/aktualne/udalosti/20630-gamejam-2024" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-yellow-50">
                    {t("hero.related")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <IncubationSteps />

        {/* Project Description */}
        <section className="py-20 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary text-2xl mb-1">$25K</h3>
                    <p className="text-gray-500 text-sm">{t("about.stats.funding")}</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary text-2xl mb-1">12</h3>
                    <p className="text-gray-500 text-sm">{t("about.stats.teams")}</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary text-2xl mb-1">6 mo</h3>
                    <p className="text-gray-500 text-sm">{t("about.stats.duration")}</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary text-2xl mb-1">85%</h3>
                    <p className="text-gray-500 text-sm">{t("about.stats.success")}</p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-lg border-2 border-yellow-200">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Game Incubator"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-2">{t("about.why")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-yellow-100 p-1 rounded-full">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600">{t("about.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-yellow-100 p-1 rounded-full">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600">{t("about.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-yellow-100 p-1 rounded-full">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600">{t("about.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-yellow-100 p-1 rounded-full">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-600">{t("about.feature4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("aboutUs.title")}</h2>
              <p className="text-gray-500 max-w-[700px]">{t("aboutUs.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Member 1 */}
              <a href="https://fit.cvut.cz/en/faculty/organizational-structure/departments/527-department-of-software-engineering/people">
                <div className="bg-background border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      href="https://fit.cvut.cz/en/faculty/organizational-structure/departments/527-department-of-software-engineering/people"
                      src="/matousek-profile.avif?height=96&width=96"
                      alt="Team Member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">Ing. Honza Matoušek</h3>
                  <p className="text-primary text-sm mb-4 text-center">Industry Mentor</p>
                  <p className="text-gray-500 text-center">
                  Alumni of the Faculty of Information Technology, member of the Department of Software Engineering 
                  </p>
                </div>
              </a>

              {/* Team Member 2 */}
              <a href="https://fit.cvut.cz/en/faculty/organizational-structure/departments/527-department-of-software-engineering/people">
                <div className="bg-background border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src="/brem-profile.avif?height=96&width=96"
                      alt="Team Member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">Bc. Ondřej Brém, MSc.</h3>
                  <p className="text-primary text-sm mb-4 text-center">Industry Mentor</p>
                  <p className="text-gray-500 text-center">
                    Alumni of Aalto, FIN and KTH, SWE, member of the Department of Software Engineering 
                  </p>
                </div>
              </a>
            </div>

            {/* <div className="mt-16 bg-yellow-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t("aboutUs.partners")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="bg-background p-4 rounded-lg w-full h-20 flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="University Logo" className="max-h-10" />
                </div>
                <div className="bg-background p-4 rounded-lg w-full h-20 flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="University Logo" className="max-h-10" />
                </div>
                <div className="bg-background p-4 rounded-lg w-full h-20 flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="University Logo" className="max-h-10" />
                </div>
                <div className="bg-background p-4 rounded-lg w-full h-20 flex items-center justify-center">
                  <img src="/placeholder.svg?height=40&width=120" alt="University Logo" className="max-h-10" />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Legal Structure Section */}
        <section id="legal" className="py-20 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t("legal.title")}</h2>
              <p className="text-gray-500 max-w-[700px]">{t("legal.subtitle")}</p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg border-2 border-yellow-200 mb-10">
              <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">{t("legal.intro")}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("legal.entity.title")}</h3>
                  </div>
                  <p className="text-gray-600">{t("legal.entity.description")}</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("legal.ip.title")}</h3>
                  </div>
                  <p className="text-gray-600">{t("legal.ip.description")}</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("legal.contracts.title")}</h3>
                  </div>
                  <p className="text-gray-600">{t("legal.contracts.description")}</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("legal.compliance.title")}</h3>
                  </div>
                  <p className="text-gray-600">{t("legal.compliance.description")}</p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-yellow-100 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-xl font-bold">Legal Resources</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">Legal workshops and seminars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">Access to legal professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">Document templates library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-700">Legal compliance checklist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <section id="signup" className="py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-md mx-auto bg-background rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">{t("signup.title")}</h2>
                <p className="text-gray-500 mt-2">{t("signup.subtitle")}</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("signup.name")}
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("signup.email")}
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="discord" className="text-sm font-medium">
                    {t("signup.discord")}
                  </label>
                  <Input id="discord" placeholder="user.name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="game" className="text-sm font-medium">
                    {t("signup.game")}
                  </label>
                  {/* <Input id="game" placeholder="Brief description of your game" /> */}
                  <Textarea id="game" rows={3} placeholder="Brief description of your game" />
                </div>
                <Button className="w-full bg-primary hover:bg-yellow-600 text-background">{t("signup.button")}</Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  {t("signup.terms")}{" "}
                  <Link href="#" className="text-primary hover:underline">
                    {t("signup.termsLink")}
                  </Link>{" "}
                  {t("signup.and")}{" "}
                  <Link href="#" className="text-primary hover:underline">
                    {t("signup.privacyLink")}
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-background py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Grafit Games</span>
              </div>
              <p className="text-gray-400 text-sm">{t("footer.tagline")}</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-primary text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-gray-400 hover:text-primary text-sm">
                    {t("nav.process")}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-primary text-sm">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="#legal" className="text-gray-400 hover:text-primary text-sm">
                    {t("nav.legal")}
                  </Link>
                </li>
                <li>
                  <Link href="#signup" className="text-gray-400 hover:text-primary text-sm">
                    {t("signup.button")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t("footer.resources")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gray-950 text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gray-950 text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gray-950 text-sm">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-gray-950 text-sm">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>   
            <div>
              <h3 className="font-bold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">Email: info@grafit-games.edu</li>
                <li className="text-gray-400 text-sm">Phone: (123) 456-7890</li>
                <li className="text-gray-400 text-sm">Address: 123 University Ave, Game City, GC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  )
}
