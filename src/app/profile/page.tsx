/** @format */

import ProfileComponent from "@/components/profile/profile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Foluke Oladipo - Licensed Financial Professional. - License #19883154",
  description:
    "Foluke Oladipo is  a Licensed Financial Professional at Bildove Financial Solutions. With a passion for helping individuals and families achieve financial success, I specialize in providing personalized financial solutions tailored to your unique needs and goals.",
};

export default function ProfilePage() {
  return <ProfileComponent />;
}
