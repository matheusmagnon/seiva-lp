import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
  display: "swap",
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export const metadata: Metadata = {
  title: {
    default: "SEIVA — Sistema de Gestão do SUAS",
    template: "%s | SEIVA",
  },
  description:
    "Software SaaS para gestão da assistência social municipal (SUAS). Prontuário digital, atendimento, agenda de equipe, RMA automatizado, encaminhamentos — multi-tenant com banco isolado e sigilo LGPD.",
  keywords: [
    "sistema de gestão do suas",
    "software assistência social municipal",
    "prontuário suas digital",
    "rma automatizado",
    "sistema para cras",
    "sistema para clínica",
    "prontuário eletrônico",
    "software para clínica multiprofissional",
    "gestão de pacientes",
    "agenda para clínica",
    "LGPD",
    "SUAS",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://seiva.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SEIVA — Gestão do SUAS",
    description:
      "Prontuário digital, atendimento e agenda para prefeituras (SUAS). Multi-tenant com banco isolado, offline-ready e sigilo LGPD.",
    siteName: "SEIVA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEIVA — Gestão de pessoas, atendimentos e agenda",
    description:
      "Prontuário digital, atendimento e agenda para prefeituras e clínicas.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={workSans.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:ring-2 focus:ring-ring focus:shadow-md"
        >
          Pular para o conteúdo principal
        </a>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
              `,
            }}
          />
        )}
        {children}
      </body>
    </html>
  )
}
