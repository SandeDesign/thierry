"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Facebook, Music, Linkedin, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeSkillFrame, setActiveSkillFrame] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  // Social media links - Easy to edit
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/thierrycarli88",
      icon: Facebook
    },
    {
      name: "LinkedIn", 
      url: "https://nl.linkedin.com/in/thierry-carli-ab109146",
      icon: Linkedin
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/7gfsF37Jne4z7aRzNwSBcZ?si=pAoxRsjRTzuaqzrcFZaN6A",
      icon: Music
    }
  ];

  const skills = [
    { name: "SKILL 1", active: true, url: "/skills/skill-1" },
    { name: "SKILL 2", active: false, url: "/skills/skill-2" },
    { name: "SKILL 3", active: false, url: "/skills/skill-3" },
  ];

  const companies = [
    {
      id: "festina-lente",
      name: "Festina Lente Groep",
      logo: "https://fl-group.org/wp-content/uploads/2024/11/Logo-FESTINA-LENTE-1-e1732628560926.png",
      url: "/companies/festina-lente"
    },
    {
      id: "it-knecht",
      name: "IT Knecht bv",
      logo: "https://itknecht.nl/wp-content/uploads/2025/01/cropped-cropped-file-1-1-e1736278706265.webp",
      url: "/companies/it-knecht"
    },
    {
      id: "sande-design",
      name: "SandeDesign",
      logo: "https://fl-group.org/wp-content/uploads/2025/02/Adobe-Express-file.png",
      url: "/companies/sande-design"
    },
    {
      id: "buddy",
      name: "Buddy",
      logo: "https://fl-group.org/wp-content/uploads/2024/11/LOGO-BUDDY-ZONDER-TEKST-e1732644562860-150x150.png",
      url: "/companies/buddy"
    },
  ];

  return (
    <div className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center">
      <div className="device max-w-5xl w-full">
        <div className="device-header">
          <div className="flex items-center gap-3">
            <div className="text-xl font-semibold">Thierry Carli</div>
            <div className="device-dots">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="device-dot" />
              ))}
            </div>
          </div>
        </div>

        <div className="device-screen">
          <div className="grid md:grid-cols-[300px,1fr] gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="profile-container">
                <Image
                  src="https://fl-group.org/wp-content/uploads/2025/03/3fd59a88db99bdec41874898e348fb3e_huge.jpeg"
                  alt="Profile"
                  fill
                  className="profile-image"
                  priority
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
              
              <a
                href="https://thierry.fl-group.org/contact.vcf"
                download="Thierry-Contact.vcf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <Download className="w-5 h-5" />
                <span>Opslaan in contacten</span>
              </a>

              <div className="space-y-2 p-4 bg-secondary/30 rounded-lg">
                <p className="text-sm italic">"Een visie zonder zicht wil niet zeggen dat hij blind is. Hij keek maar zag niks, dat wil zeggen dat hij dom is."</p>
              </div>

              <div className="space-y-3">
                {skills.map((skill, i) => (
                  <button 
                    key={i} 
                    className="skill-button"
                    onClick={() => setActiveSkillFrame(activeSkillFrame === skill.url ? null : skill.url)}
                  >
                    <div className={`w-3 h-3 rounded-full ${skill.active ? 'bg-success' : 'bg-muted'}`} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </button>
                ))}
                
                <div className="flex gap-2 mt-4 justify-center">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Biography) */}
            <div className="portfolio-container">
              <div className="space-y-6">
                <div className="portfolio-nav">
                  <div className="portfolio-title">
                    <span className="text-warning">⭐</span>
                    BIOGRAFIE
                  </div>
                </div>

                <div className="prose prose-invert max-w-none space-y-4">
                  <h2 className="text-xl font-bold">Over Mij</h2>
                  <p>
                    Welkom op mijn digitale portfolio! Ik ben een gepassioneerde professional
                    met expertise in grafisch ontwerp, motion design en Webflow development.
                    Met jarenlange ervaring help ik bedrijven hun digitale aanwezigheid naar
                    een hoger niveau te tillen.
                  </p>
                  <p>
                    In mijn werk combineer ik creativiteit met technische kennis om
                    oplossingen te creëren die niet alleen mooi zijn, maar ook effectief
                    en gebruiksvriendelijk.
                  </p>
                </div>

                <div className="portfolio-nav">
                  <div className="portfolio-title">
                    <span className="text-warning">⭐</span>
                    ACTIEVE BEDRIJVEN
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {companies.map((company, i) => (
                    <div
                      key={company.id}
                      className="company-grid-item"
                      onClick={() => setActiveCompany(activeCompany === company.url ? null : company.url)}
                    >
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={100}
                        height={100}
                        className="company-logo"
                        sizes="100px"
                      />
                      <div className="company-name">{company.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill iFrames */}
        <AnimatePresence>
          {activeSkillFrame && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-full w-full flex items-center justify-center p-4">
                <div className="w-full max-w-4xl h-full max-h-[90vh] overflow-auto rounded-lg bg-card">
                  <div className="flex justify-end p-4">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setActiveSkillFrame(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <iframe
                    src={activeSkillFrame}
                    className="w-full h-[calc(100%-4rem)] border-none bg-card"
                    title="Skill Details"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Company iFrames */}
        <AnimatePresence>
          {activeCompany && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-full w-full flex items-center justify-center p-4">
                <div className="w-full max-w-4xl h-full max-h-[90vh] overflow-auto rounded-lg bg-card">
                  <div className="flex justify-end p-4">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setActiveCompany(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <iframe
                    src={activeCompany}
                    className="w-full h-[calc(100%-4rem)] border-none bg-card"
                    title="Company Details"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}