/** @format */

import ProfileComponent from "@/components/profile/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foluke Oladipo - Licensed Financial Professional - License #19883154",
  description:
    "Foluke Oladipo is a Licensed Financial Professional at Bildove Financial Solutions, helping individuals and families achieve financial success with personalized solutions tailored to their unique needs and goals.",
};

export default function ProfilePage() {
  return <ProfileComponent />;
}
