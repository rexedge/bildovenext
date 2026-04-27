/** @format */

import { BUTTON } from "@/utils/const";
import ButtonItem from "./buttonItem";

export default function ProfileButton() {
  return (
    <div className="w-full space-y-2 mt-2">
      {BUTTON.map((Btn, index) => (
        <ButtonItem
          key={index}
          title={Btn.title}
          icon={<Btn.icon />}
          href={Btn.href}
        />
      ))}
    </div>
  );
}
