"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import speakersData from "./speakers.json";

interface Speaker {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

interface Sponsor {
  name: string;
  imageUrl: string;
  websiteUrl: string;
}

const sponsorsData: Sponsor[] = [
  {
    name: "GyanDhan",
    imageUrl: "/GD.png",
    websiteUrl: "https://www.gyandhan.com/",
  },
  {
    name: "KEDGE Business School",
    imageUrl: "/KBS.png",
    websiteUrl: "https://www.kedge.edu/",
  },
  {
    name: "Startup Buddy",
    imageUrl: "/sb.png",
    websiteUrl: "https://www.startupbuddy.co.in/",
  },
  {
    name: "Atlas Skilltech University",
    imageUrl: "/Atlas-Skilltech-University.jpg",
    websiteUrl: "https://atlasuniversity.edu.in/",
  },
];

export default function Home() {
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date and time to April 19, 2025, 8:30 AM
  const targetDate = new Date("2025-04-19T08:30:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSpeaker = () => {
    setCurrentSpeakerIndex((prevIndex) =>
      prevIndex === 0 ? speakersData.length - 1 : prevIndex - 1
    );
  };

  const handleNextSpeaker = () => {
    setCurrentSpeakerIndex((prevIndex) =>
      prevIndex === speakersData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSpeakerIndex(index);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const currentSpeaker = speakersData[currentSpeakerIndex];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="TEDx GD Goenka Gurugram Youth Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        <nav className="flex gap-6">
          <Link href="#about" className="hover:text-red-600 transition-colors">
            About us
          </Link>
          <Link href="#sponsors" className="hover:text-red-600 transition-colors">
            Sponsors
          </Link>
          <Link href="#team" className="hover:text-red-600 transition-colors">
            Team
          </Link>
          <button
            onClick={openContactModal}
            className="hover:text-red-600 transition-colors"
          >
            Contact Us
          </button>
        </nav>
      </header>

      {/* Contact Us Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-black p-8 rounded-lg shadow-lg relative animate-scale-in border border-red-600">
            <button
              onClick={closeContactModal}
              className="absolute top-2 right-2 text-white hover:text-red-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-red-600">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                Email: tedxgdgps.48youth@gmail.com
              </p>
              <p className="text-gray-300">
                Phone 1: +91 80760 47987
              </p>
              <p className="text-gray-300">
                Phone 2: +91 88605 40353
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row md:justify-center items-center relative">
        <div className="md:w-1/2 pr-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Uncharted Terrains
          </h1>
          <p className="text-gray-300 mb-8 max-w-xl">
            Every journey into the unknown begins with a story. Uncharted
            Terrain is about exploring perspectives that challenge the norm.
            Ideas that break barriers and ideas that carve new paths. From
            personal struggles to groundbreaking innovations, this theme
            embraces the diverse experiences that shape our world. It's an
            invitation to step into the unfamiliar, to question, to discover,
            and to redefine what's possible — one story at a time.
          </p>
          {/* Buy Tickets Button */}
          <Link
            href="https://forms.gle/hH7NBQjXAXu7AuZH9"
            className="inline-block border border-red-600 text-white px-8 py-3 rounded-full hover:bg-red-600/10 transition-colors"
          >
            Buy Tickets
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center absolute md:relative top-0 left-0 w-full md:w-auto md:right-[-50px]">
          <div className="relative w-80 h-80">
            <Image
              src="/Vector.svg?height=320&width=320"
              alt="Red spiral animation"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Event Countdown</h2>
          <div className="flex justify-center gap-6 mb-4">
            <CountdownItem label="Days" value={countdown.days} />
            <CountdownItem label="Hours" value={countdown.hours} />
            <CountdownItem label="Minutes" value={countdown.minutes} />
            <CountdownItem label="Seconds" value={countdown.seconds} />
          </div>
          <p className="text-gray-300">19th April 2025, 8:30 AM</p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          {/* Modified the text content div */}
          <div className="md:w-1/2 pr-8 z-10">
            {" "}
            {/* Added md:pl-8 */}
            <p className="text-gray-300 mb-8 max-w-xl">
              In the spirit of discovering and spreading ideas, TEDx is a
              program of local, self-organized events that bring people
              together to share a TED-like experience. At a TEDx event, TED
              Talks video and live speakers combine to spark deep discussion
              and connection. These local, self-organized events are branded
              TEDx, where x = independently organized TED event.
            </p>
            <p className="text-gray-300 mb-8 max-w-xl">
              The TED Conference provides general guidance for the TEDx program,
              but individual TEDx events are self-organized. (Subject to
              certain rules and regulations.)
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden border border-red-600 w-[300px] h-[300px]">
              <Image
                src="/about.png?height=300&width=300"
                alt="TEDx Speaker on stage"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sponsorsData.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Image
                src={`${sponsor.imageUrl}?height=100&width=150`}
                alt={sponsor.name}
                width={150}
                height={100}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Speakers</h2>
        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={handlePrevSpeaker}
              className="absolute left-0 z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <div className="mx-auto max-w-4xl flex">
              <div className="bg-black/80 rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={currentSpeaker.imageUrl}
                      alt={currentSpeaker.name}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold mb-1">
                      {currentSpeaker.name}
                    </h3>
                    <p className="text-red-600 mb-4">{currentSpeaker.role}</p>
                    <p className="text-gray-300 text-sm">
                      {currentSpeaker.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNextSpeaker}
              className="absolute right-0 z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {speakersData.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-2 h-2 rounded-full ${
                  i === currentSpeakerIndex ? "bg-white" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Team</h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Sadhya Kalra",
                role: "Lead Organiser",
                imageUrl: "/team/sadhya.jpeg",
              },
              {
                name: "Shreyansh Sahu",
                role: "Technical Director",
                imageUrl: "/team/shreyansh.jpeg",
                linkedinUrl: "https://www.linkedin.com/in/the-shreyansh-sahu/",
              },
              {
                name: "Kanishka Karwa",
                role: "Guest Manager",
                imageUrl: "/team/kanishka.jpg",
              },
              {
                name: "Vivaan Bafna",
                role: "Executive Producer",
                imageUrl: "/team/vivaan.jpeg",
              },
              {
                name: "Srida Padha",
                role: "Curator",
                imageUrl: "/team/srida.jpeg",
              },
              {
                name: "Siddhant Sharma",
                role: "Design Head",
                imageUrl: "/team/siddhant.jpeg",
              },
              {
                name: "Dia Ahooja",
                role: "Event Manager",
                imageUrl: "/team/dia.jpeg",
              },
              {
                name: "Yuvraj Katyal",
                role: "Photographer",
                imageUrl: "/team/yuvraj.jpeg",
              },
              {
                name: "Jas Manocha",
                role: "Production Team",
                imageUrl: "/team/jas.jpeg",
              },
              {
                name: "Shivesh Arora",
                role: "Production Team",
                imageUrl: "/team/shivesh.jpeg",
              },
              {
                name: "D. Sharad",
                role: "Photographer",
                imageUrl: "/team/sharad.jpeg",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mb-2 overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={150}
                      height={200}
                      className="object-cover w-full h-auto hover:opacity-80 transition-opacity"
                    />
                  </div>
                </a>
                <h3 className="font-medium text-center">{member.name}</h3>
                <p className="text-red-600 text-xs text-center">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-red-600 font-bold mb-2">
                <span className="text-xl">TEDx</span>
              </div>
              <p className="text-sm text-gray-400">
                Copyright © 2025
                <br />
                TEDxGDGoenkaGurugram Youth
              </p>
              <a href="#" className="inline-block mt-2">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>

            <div className="text-right">
              <h3 className="text-red-600 font-medium mb-2">Contact us</h3>
              <p className="text-sm text-gray-400">
                tedxgdgps.48youth@gmail.com
                <br />
                +91 80760 47987
                <br />
                +91 88605 40353
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface CountdownItemProps {
  label: string;
  value: number;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold text-red-600 animate-pulse">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
};
