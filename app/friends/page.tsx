import React from "react";

export const metadata = {
  title: "Friend",
  description: "My friends.",
};

/**
 * 友链列表
 */
const friends: {
  name: string;
  avatar: string;
  url: string;
}[] = [
  {
    avatar: "/friends/haohao.jpg",
    name: "HaoHao",
    url: "https://fish-blog-nextjs-wine.vercel.app/",
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-normal">
        My Friends
      </h1>
      <p className="grid grid-cols-4 bg-slate-50 rounded-xl py-8 px-4 gap-y-8">
        {friends.map((friend) => (
          <a
            href={friend.url}
            target="_blank"
            className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
            <img
              className="w-16 h-16 rounded-full hover:scale-110 transition-transform border"
              src={friend.avatar}
              alt=""
            />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              {friend.name}
            </span>
          </a>
        ))}
      </p>
    </section>
  );
}
