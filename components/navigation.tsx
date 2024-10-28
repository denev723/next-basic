"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {pathname === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About-us</Link>
          {pathname === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
