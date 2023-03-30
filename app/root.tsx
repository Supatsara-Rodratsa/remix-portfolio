import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { ReactNode } from 'react'
import stylesheet from '~/styles/tailwind.css'
import { NavBar } from './components/NavBar'
import { STATIC_WORD } from './constants/constant'
import { IconFab } from './components/IconFab'
import { motion, useScroll } from 'framer-motion'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Portfolio',
  viewport: 'width=device-width,initial-scale=1',
})

export type LayoutProps = {
  children: ReactNode
}

export default function App() {
  const { scrollYProgress } = useScroll()
  return (
    <html lang="en" className="bg-purple">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <motion.div
            className="fixed top-0 left-0 right-0 h-[10px] bg-red origin-[0%]"
            style={{ scaleX: scrollYProgress }}
          />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <IconFab word={STATIC_WORD.CONTACT_FAB} link="contact" />
        </Layout>
      </body>
    </html>
  )
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="p-[40px] pb-0 overflow-hidden w-screen relative m-auto">
      <NavBar />
      <div className="flex min-h-[calc(100vh_-_40px)] w-full h-full text-white">
        {children}
      </div>
    </main>
  )
}
