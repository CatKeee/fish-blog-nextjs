import React from "react";

export const metadata = {
  title: "About",
  description: "About me.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-normal">About</h1>

      <div className="bg-slate-50 rounded-xl  p-8">
        <p className="flex justify-center items-center flex-col gap-4">
          <img
            className="w-20 h-20 rounded-full"
            src="/images/avatar.jpg"
            alt="头像"
          />
          <span className="font-bold text-lg">JXDN</span>
          <p>An exceptional full-stack engineer🥷.</p>
        </p>
      </div>
    </section>
  );
}
