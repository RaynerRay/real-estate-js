"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Book,
  Boxes,
  BriefcaseBusiness,
  Building,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  DiscAlbum,
  ExternalLink,
  FileBox,
  FolderArchiveIcon,
  FolderDot,
  HeartHandshake,
  House,
  HouseIcon,
  HousePlugIcon,
  HousePlus,
  LayoutGrid,
  LayoutList,
  LocateFixedIcon,
  LogOut,
  MicVocal,
  MonitorPlay,
  Music,
  PenLine,
  PersonStanding,
  PersonStandingIcon,
  ScanSearch,
  SendToBack,
  Slack,
  Truck,
  User,
  UserSquare2,
  Users2,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  const role = 'ADMIN'
  session?.user?.role;
  const userStatus = true
  session?.user?.status || false;

  const pathname = usePathname();
  let sidebarLinks = [

    {
      title: "Resources",
      icon: Book,
      href: "/dashboard/resources",
    },
    {
      title: "Agents",
      icon: PersonStanding,
      href: "/dashboard/agents",
    },
  
    {
      title: "Blog",
      icon: PenLine ,
      href: "/dashboard/blogs",
    },
   
    {
      title: "Support",
      icon: HeartHandshake,
      href: "/dashboard/support",
    },
    // {
    //   title: "Settings",
    //   icon: LayoutGrid,
    //   href: "/dashboard/settings",
    // },
    {
      title: "Home",
      icon: ExternalLink,
      href: "/",
    },
  ];
  let catalogueLinks = [
   
    {
      title: "Categories",
      icon: FolderDot ,
      href: "/dashboard/categories",
    },
    {
      title: "SubCategories",
      icon: FolderArchiveIcon ,
      href: "/dashboard/subcategories",
    },
    {
      title: "Companies",
      icon: BriefcaseBusiness ,
      href: "/dashboard/companies",
    },
    {
      title: "Properties",
      icon: House ,
      href: "/dashboard/properties",
    },
    {
      title: "Cities",
      icon: Building,
      href: "/dashboard/cities",
    },
    {
      title: "Towns",
      icon: HousePlus,
      href: "/dashboard/towns",
    },
    {
      title: "Adverts",
      icon: MonitorPlay,
      href: "/dashboard/adverts",
    },
  ];
  if (role === "AGENT") {
    sidebarLinks = [
      
      {
        title: "Profile",
        icon: CircleDollarSign,
        href: "/dashboard/profile",
      },
      {
        title: "Support",
        icon: HeartHandshake,
        href: "/dashboard/support",
      },
      // {
      //   title: "Settings",
      //   icon: LayoutGrid,
      //   href: "/dashboard/settings",
      // },
      {
        title: "Home",
        icon: ExternalLink,
        href: "/",
      },
    ];
    catalogueLinks = [
      // {
      //   title: "Profile",
      //   icon: Boxes,
      //   href: "/dashboard/products",
      // },
      // {
      //   title: "Messages",
      //   icon: ScanSearch,
      //   href: "/dashboard/favourites",
      // },
    ];
  }
  if (role === "USER") {
    sidebarLinks = [
      // {
      //   title: "My Orders",
      //   icon: Truck,
      //   href: "/dashboard/orders",
      // },
      {
        title: "Profile",
        icon: PersonStandingIcon,
        href: "/dashboard/profile",
      },
      {
        title: "Home",
        icon: ExternalLink,
        href: "/",
      },
    ];
    catalogueLinks = [];
  }
  if (role === "ADMIN" && userStatus === false) {
    sidebarLinks = [];
    catalogueLinks = [];
  }
  async function handleLogout() {
    await signOut();
    router.push("/");
  }
  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300  fixed left-0 top-0 shadow-md overflow-y-scroll"
          : " mt-20 sm:mt-0 hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300  fixed left-0 top-0 shadow-md overflow-y-scroll"
      }
    >
      <Link
        onClick={() => setShowSidebar(false)}
        className="px-6 py-4"
        href="/dashboard"
      >
        {/* <Image src={logo} alt="limifood logo" className="w-36" /> */}
      </Link>
      <div className="space-y-3 flex flex-col  ">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-green-500 text-green-500"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        {catalogueLinks.length > 0 && (
          <Collapsible className="px-6">
            <CollapsibleTrigger
              className=""
              onClick={() => setOpenMenu(!openMenu)}
            >
              <button className="flex items-center space-x-6  py-2 ">
                <div className="flex items-center space-x-3">
                  <Slack />
                  <span>Catalogue</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="rounded-lg py-3 px-3 pl-6 dark:bg-slate-800 dark:text-slate-300">
              {catalogueLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    onClick={() => setShowSidebar(false)}
                    key={i}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center space-x-3 py-1 text-sm   text-green-500"
                        : "flex items-center space-x-3  py-1 "
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-green-500 text-green-500"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button
            onClick={handleLogout}
            className="bg-green-800 rounded-md flex items-center text-white space-x-3 px-6 py-3"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
