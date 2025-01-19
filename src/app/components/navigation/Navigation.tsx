import React from "react";
import "./navigation.scss";
import Link from "next/link";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <header id="header">
      <nav id="nav" className="awning">
        <div className="nav-container">
          <Link href="#" className="btn btn-link">
            (WIP)
          </Link>
          <Link href="#" className="btn btn-link">
            (WIP)
          </Link>
          <Link href="#" className="btn btn-link">
            (WIP)
          </Link>
          <Link href="#" className="btn btn-link">
            (WIP)
          </Link>
          <Link href="#" className="btn btn-link">
            waitlist
          </Link>
        </div>
      </nav>
      <div className="head-side">
        <img src="/gfx/head-side.png" alt="" />
      </div>
    </header>
  );
}
