import React from "react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10">
        <div>
          <Image
            src="/favicon.ico"
            alt="logo"
            width={100}
            height={100}
            className="h-auto"
          />
        </div>
        <div className="space-y-5 text-white">
          <h1 className="h1">Manage and secure your files the best way</h1>
          <p className="body-1">
            This is a simple and secure way to store, share, and secure your
            files.
          </p>
          <div>
            <Image
              src="/illustration.png"
              alt="file"
              width={300}
              height={300}
              className="transition-all duration-300 hover:rotate-6 hover:scale-110"
            />
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default layout;
