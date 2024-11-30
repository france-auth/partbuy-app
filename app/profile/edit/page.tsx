"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";

const ProfileForm: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className="flex items-center justify-center text-color">
      <form className="w-full max-w-md space-y-6 py-6 rounded-lg shadow-lg montserrat">
        {/* Profile Picture */}
        <div>
          <label className="block mb-2 text-[10px] leading-[12.19px] font-bold">
            Edit Profile Picture
          </label>
          <div className="w-full border border-[#3246DA] rounded-lg focus:outline-none">
            <div className="flex relative justify-between items-center py-[6px] px-4 bg-[#D9D9D933]">
              <div className="w-[31px] h-[31px] rounded-full bg-[#D9D9D913] flex items-center justify-center">
                {profilePicture ? (
                  <Image
                    src={profilePicture}
                    alt="pfp"
                    width={1}
                    height={1}
                    className="w-full h-auto rounded-full opacity-70"
                  />
                ) : (
                  <span className="text-gray-500 text-xs"></span>
                )}
              </div>
              <label
                htmlFor="upload-profile"
                className="px-4 py-4 property-button border-[#3246DA] underline cursor-pointer block text-[10px] leading-[12.19px] font-bold absolute right-4"
              >
                Select Picture
              </label>
              <input
                type="file"
                id="upload-profile"
                name="upload-profile"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        {/* Edit Name */}
        <div>
          <label htmlFor="edit-name" className="block mb-2 text-[10px] leading-[12.19px] font-bold">
            Edit Name
          </label>
          <input
            type="text"
            id="edit-name"
            name="edit-name"
            placeholder="John Doe"
            className="w-full px-4 py-4 bg-[#D9D9D933] border border-[#3246DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3246DA] text-[#B0B0B0] text-[10px] leading-[12.19px] font-bold"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email-address" className="block mb-2 text-[10px] leading-[12.19px] font-bold">
            Email Address
          </label>
          <input
            type="email"
            id="email-address"
            name="email-address"
            placeholder="johndoe@gmail.com"
            className="w-full px-4 py-4 bg-[#D9D9D933] border border-[#3246DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3246DA] text-[#B0B0B0] text-[10px] leading-[12.19px] font-bold"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone-number" className="block mb-2 text-[10px] leading-[12.19px] font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-number"
            name="phone-number"
            placeholder="815625625626"
            className="w-full px-4 py-4 bg-[#D9D9D933] border border-[#3246DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3246DA] text-[#B0B0B0] text-[10px] leading-[12.19px] font-bold"
          />
        </div>
        <Button
          name="save edits"
          src="/dashboard/join-auction.svg"
          alt="save edits"
          width={15}
          height={15}
          link=""
          className="mt-5 px-3 py-3 rounded-full hover:border hover:border-[#3246DA] bg-[#3246DA] hover:bg-[#FFFFFF1A] text-[10px] leading-[12.19px] uppercase font-bold montserrat text-[#B0B0B0]"
        />
      </form>
    </div>
  );
};


const EditProfile = () => {
  return (
    <main className="page">
      <Header name="Edit Profile" />
      <div className="w-full montserrat">
        <ProfileForm />
      </div>
      <Navbar />
    </main>
  )
}

export default EditProfile;