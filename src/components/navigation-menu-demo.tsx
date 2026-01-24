"use client"

import * as React from "react"
import { Link } from "@tanstack/react-router"

import { useIsMobile } from "../../hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const programs: { title: string; href: string; description: string; icon: string }[] = [
  {
    title: "Frontend Development Training",
    href: "/programs/frontend",
    description: "HTML, CSS, JavaScript for Beginners",
    icon: "💻",
  },
  {
    title: "Backend Development Training",
    href: "/programs/backend",
    description: "PHP & MySQL, Node.js, Python for Beginners",
    icon: "⚙️",
  },
  {
    title: "Mobile App Development",
    href: "/programs/mobile",
    description: "Android, Flutter for beginners",
    icon: "📱",
  },
  {
    title: "Robotics & Internet of Things (IoT)",
    href: "/programs/robotics",
    description: "Lorem Ipsum",
    icon: "🤖",
  },
  {
    title: "Advanced Software Development",
    href: "/programs/advanced",
    description: "React.js, Node.js, Python for Intermediates",
    icon: "🚀",
  },
  {
    title: "Soft Skills & Entrepreneurship Courses",
    href: "/programs/soft-skills",
    description: "covering startup pitching, business management, and digital brand visibility.",
    icon: "💼",
  },
]

const products: { title: string; href: string; description: string; icon: string }[] = [
  {
    title: "WEBTRAY",
    href: "/products/webtray",
    description: "HTML, CSS, JavaScript for Beginners",
    icon: "🌐",
  },
  {
    title: "Inno Build",
    href: "/products/inno-build",
    description: "PHP & MySQL, Node.js, Python for Beginners",
    icon: "🏗️",
  },
  {
    title: "InnospaceX",
    href: "/products/innospacex",
    description: "Android, Flutter for beginners",
    icon: "🚀",
  },
]

const community: { title: string; href: string; description: string; icon: string }[] = [
  {
    title: "WEBTRAY",
    href: "/community/webtray",
    description: "HTML, CSS, JavaScript for Beginners",
    icon: "🌐",
  },
  {
    title: "Inno Build",
    href: "/community/inno-build",
    description: "PHP & MySQL, Node.js, Python for Beginners",
    icon: "🏗️",
  },
  {
    title: "InnospaceX",
    href: "/community/innospacex",
    description: "Android, Flutter for beginners",
    icon: "🚀",
  },
]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap ">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px]">
              {programs.map((program) => (
                <ProgramItem
                  key={program.title}
                  title={program.title}
                  href={program.href}
                  icon={program.icon}
                >
                  {program.description}
                </ProgramItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[750px]">
              {products.map((product) => (
                <ProductItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                  icon={product.icon}
                >
                  {product.description}
                </ProductItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[750px]">
              {community.map((item) => (
                <ProductItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </ProductItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Our Hub</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ProgramItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          to={href}
          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-300 text-2xl">
              {icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold leading-tight mb-1">{title}</div>
              <p className="text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function ProductItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link 
          to={href}
          className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="space-y-2">
            <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-400 text-3xl">
              {icon}
            </div>
            <div>
              <div className="text-sm font-bold leading-tight mb-1">{title}</div>
              <p className="text-xs leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default NavigationMenuDemo