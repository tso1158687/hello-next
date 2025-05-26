"use client";
import Link from "next/link";
import { useContext } from "react";
import { VersionContext } from "../context/versionContext";

export default function User() {
  return (
    <div>
        <h2>version: {useContext(VersionContext)}</h2>
      <h1>Hello User</h1>
      <Link href="/">home</Link>
    </div>
  );
}
