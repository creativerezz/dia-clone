import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  "PLANNING", "LEARNING", "FUN", "DEVELOPMENT",
  "WRITING", "REASONING", "RESEARCH", "SHOPPING", "MARKETING"
];

const featuredSkills = [
  {
    id: "will-i-regret-buying-this",
    title: "Calculate the likelihood you'll regret a purchase.",
    author: "@annabelstrauss",
    image: "https://ext.same-assets.com/3797006017/3968294363.png"
  },
  {
    id: "nfl-fantasy-player-analyzer",
    title: "Win your fantasy league.",
    author: "@FaCo9",
    image: "https://ext.same-assets.com/3797006017/15230117.png"
  },
  {
    id: "fact-check",
    title: "A one-click fact-checker.",
    author: "@olenyoonok",
    image: "https://ext.same-assets.com/3797006017/1391982820.jpeg"
  }
];

const recommendedPacks = [
  {
    title: "Back To School",
    description: "Start the semester strong with essential Skills made by students, for students.",
    contributors: 8,
    color: "bg-gradient-to-br from-blue-200 to-blue-300",
    textColor: "text-gray-800",
    avatar: "https://ext.same-assets.com/3797006017/3655994631.jpeg"
  },
  {
    title: "Make The Most Of Your Browsing History",
    description: "Turn yesterday's searches into today's reflections, recaps, and takeaways.",
    contributors: 2,
    color: "bg-gradient-to-br from-amber-800 to-amber-900",
    textColor: "text-white",
    avatar: "https://ext.same-assets.com/3797006017/1951221440.jpeg"
  },
  {
    title: "Shop Smarter",
    description: "More thoughtful ways to shop, built around what you're already looking for.",
    contributors: 5,
    color: "bg-gradient-to-br from-yellow-200 to-yellow-300",
    textColor: "text-gray-800",
    avatar: "https://ext.same-assets.com/3797006017/3616836516.jpeg"
  },
  {
    title: "Do Like The Greats",
    description: "Inspired by the techniques of people our members admire, each Skill helps you borrow a little of their magic.",
    contributors: 3,
    color: "bg-gradient-to-br from-purple-200 to-purple-300",
    textColor: "text-gray-800",
    avatar: "https://ext.same-assets.com/3797006017/1887163226.jpeg"
  }
];

const exploreSkills = [
  {
    id: "transcript",
    title: "Creates a transcript of any Youtube video.",
    author: "@maeeshabiswas",
    image: "https://ext.same-assets.com/3797006017/2558729082.png"
  },
  {
    id: "watch-tonight",
    title: "Find something to watch tonight.",
    author: "Flix Mündler",
    image: "https://ext.same-assets.com/3797006017/3065460283.jpeg"
  },
  {
    id: "millenial-me",
    title: "Your Gen Z translator.",
    author: "Team Dia",
    image: "https://ext.same-assets.com/3797006017/1543461517.png"
  },
  {
    id: "fill-in-the-gap",
    title: "A skill for when memory fails.",
    author: "@validatedev",
    image: "https://ext.same-assets.com/3797006017/2550818202.png"
  },
  {
    id: "how-to-web",
    title: "Learn to code any webpage.",
    author: "Team Dia",
    image: "https://ext.same-assets.com/3797006017/3720366337.png"
  },
  {
    id: "outline",
    title: "Generates a quick essay outline for any topic.",
    author: "Team Dia",
    image: "https://ext.same-assets.com/3797006017/3574475910.png"
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">◐</span>
                </div>
                <span className="text-lg font-semibold">Dia</span>
              </Link>
              <nav className="flex space-x-6">
                <Link href="/skills" className="text-gray-900 font-medium">Skills</Link>
                <Link href="/students" className="text-gray-600">Students</Link>
              </nav>
            </div>
            <Button variant="outline" className="rounded-full">
              Get early access
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-light text-gray-900 mb-6">
            See what's possible
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Skills are shortcuts for your repeatable workflows in Dia.
            Discover and remix the best from the community.
          </p>
          <Button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">
            Get Early Access to Skills
          </Button>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-12">
            The ones we keep coming back to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSkills.map((skill) => (
              <Card key={skill.id} className="overflow-hidden border-0 shadow-sm skill-card">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={skill.image}
                    alt={skill.id}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 skill-card-overlay px-3 py-1 rounded-full text-sm font-mono">
                    /{skill.id}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {skill.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{skill.author}</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      See more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Packs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-12">
            Recommended packs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedPacks.map((pack, index) => (
              <Card key={index} className={`${pack.color} border-0 overflow-hidden pack-card`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${pack.textColor}`}>
                    {pack.title}
                  </h3>
                  <p className={`text-sm mb-6 ${pack.textColor} opacity-80`}>
                    {pack.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={pack.avatar}
                      alt="Contributor"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className={`text-sm ${pack.textColor} opacity-70`}>
                      {pack.contributors} contributors
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Skills */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-center text-gray-900 mb-8">
            Explore Skills
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <Badge key={category} variant="outline" className="px-4 py-2 text-sm">
                {category}
              </Badge>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {exploreSkills.map((skill) => (
              <Card key={skill.id} className="overflow-hidden border-0 shadow-sm skill-card">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={skill.image}
                    alt={skill.id}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 skill-card-overlay px-3 py-1 rounded-full text-sm font-mono">
                    /{skill.id}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {skill.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{skill.author}</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      See more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">1</span>
            <span className="w-8 h-8 text-gray-400 rounded-full flex items-center justify-center text-sm">2</span>
            <span className="w-8 h-8 text-gray-400 rounded-full flex items-center justify-center text-sm">3</span>
            <span className="w-8 h-8 text-gray-400 rounded-full flex items-center justify-center text-sm">4</span>
            <span className="w-8 h-8 text-gray-400 rounded-full flex items-center justify-center text-sm">5</span>
            <span className="text-gray-400">...</span>
            <span className="w-8 h-8 text-gray-400 rounded-full flex items-center justify-center text-sm">11</span>
            <span className="text-gray-400">→</span>
          </div>
        </div>
      </section>

      {/* Power Up Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-light text-gray-900 mb-4">
            Power up<br />your internet
          </h2>
          <Button className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 mb-4">
            Submit your own Skill →
          </Button>
          <p className="text-gray-600">
            Dreaming about Skills? <Link href="#" className="underline">Tap in.</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">PRODUCT</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/skills">SKILLS</Link></li>
                <li><Link href="/privacy">PRIVACY</Link></li>
                <li><Link href="/terms">TERMS OF USE</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help">HELP</Link></li>
                <li><Link href="/students">STUDENTS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about">ABOUT US</Link></li>
                <li><Link href="/careers">CAREERS</Link></li>
                <li><Link href="/newsletter">NEWSLETTER</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">CONNECT</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/x">X</Link></li>
                <li><Link href="/instagram">INSTAGRAM</Link></li>
                <li><Link href="/linkedin">LINKEDIN</Link></li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-600">THE BROWSER COMPANY</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>COPYRIGHT © 2025</span>
              <span>DESIGNED AND BUILT BY THE BROWSER COMPANY OF NEW YORK</span>
            </div>
            <span>CURRENT STATUS: BETA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
