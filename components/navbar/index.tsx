import React, { useRef } from "react";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import { LanguageIcon } from "components/icons";

import { Dropdown } from "components";
import { useRedirect, useScrolled } from "hooks";

export default function PrimarySearchAppBar() {
  const { redirect, navlinks, router, sign } = useRedirect();

  const { isScrolled, navbarStyle, logoStyle, open, setOpen } = useScrolled();

  const menus = (
    <>
      {navlinks.map((item: any, key: any) => {
        if (item.isDropdown) {
          return (
            <Dropdown
              key={key}
              label={item["label" + sign]}
              options={item.options}
              color={logoStyle.color1}
              sign={sign}
            />
          );
        }

        return (
          <div
            key={key}
            className={`cursor-pointer transition-all duration-500 text-[14px] hover:text-warning1 font-medium ${
              isScrolled ? "text-indigo2" : "text-white"
            }`}
            onClick={() => redirect(item.url)}
          >
            {item["label" + sign]}
          </div>
        );
      })}
    </>
  );

  const indo = (
    <svg
      width="25"
      height="15"
      viewBox="0 0 513 342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_301_779)">
        <path d="M0 -0.00585938H513V341.994H0V-0.00585938Z" fill="white" />
        <path d="M0 -0.00585938H513V170.994H0V-0.00585938Z" fill="#C70000" />
      </g>
      <defs>
        <clipPath id="clip0_301_779">
          <rect
            width="513"
            height="342"
            fill="white"
            transform="translate(0 -0.00585938)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const unitedKingdom = (
    <svg
      width="25"
      height="15"
      viewBox="0 0 513 343"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_301_1200)">
        <path d="M0 0.926514H513V342.93H0V0.926514Z" fill="white" />
        <path
          d="M288.562 0.923584H224.438V139.86H0V203.985H224.438V342.922H288.562V203.985H513V139.86H288.562V0.923584Z"
          fill="#D80027"
        />
        <path
          d="M394.554 231.401L513 297.205V231.401H394.554ZM312.261 231.401L513 342.922V311.387L369.026 231.401H312.261ZM459.53 342.922L312.261 261.099V342.922H459.53Z"
          fill="#0052B4"
        />
        <path
          d="M312.261 231.401L513 342.922V311.387L369.026 231.401H312.261Z"
          fill="white"
        />
        <path
          d="M312.261 231.401L513 342.922V311.387L369.026 231.401H312.261Z"
          fill="#D80027"
        />
        <path
          d="M90.5174 231.399L0 281.687V231.399H90.5174ZM200.739 245.58V342.921H25.5408L200.739 245.58Z"
          fill="#0052B4"
        />
        <path
          d="M143.974 231.401L0 311.387V342.922L200.739 231.401H143.974Z"
          fill="#D80027"
        />
        <path
          d="M118.446 112.445L0 46.6407V112.445H118.446ZM200.739 112.445L0 0.923584V32.4591L143.974 112.445H200.739ZM53.4702 0.923584L200.739 82.7471V0.923584H53.4702Z"
          fill="#0052B4"
        />
        <path
          d="M200.739 112.445L0 0.923584V32.4591L143.974 112.445H200.739Z"
          fill="white"
        />
        <path
          d="M200.739 112.445L0 0.923584V32.4591L143.974 112.445H200.739Z"
          fill="#D80027"
        />
        <path
          d="M422.483 112.447L513 62.1589V112.447H422.483ZM312.261 98.2653V0.924561H487.459L312.261 98.2653Z"
          fill="#0052B4"
        />
        <path
          d="M369.026 112.445L513 32.4591V0.923584L312.261 112.445H369.026Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_301_1200">
          <rect
            width="513"
            height="342"
            fill="white"
            transform="translate(0 0.926514)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const language = (
    <div className="absolute right-[60px] sm:right-[75px] lg:relative lg:right-0">
      <Dropdown
        leftIcon={sign === "_ind" ? indo : unitedKingdom}
        label="ID"
        options={[
          {
            label: (
              <>
                {indo} <span className="ml-3">Indonesia</span>
              </>
            ),
            value: "id",
          },
          {
            label: (
              <>
                {unitedKingdom}
                <span className="ml-3">English</span>
              </>
            ),
            value: "en",
          },
        ]}
        placement="bottom-end"
        color={logoStyle.color1}
        isButton
      />
    </div>
  );

  const logo = (
    <div
      className="cursor-pointer hover:opacity-80 transition-all duration-300"
      onClick={() => router.push("/")}
    >
      {/* <LogoIcon {...logoStyle} /> */}
      <img alt="logo" src={"/images/logo/"+navbarStyle.logoImageNavbar} className="h-[40px]" />
    </div>
  );

  return (
    <div
      id="navbars"
      className="fixed top-0 flex items-center justify-between w-full px-3 xl:px-16 2xl:px-64 transition-all duration-300 h-[70px] bg-opacity-0 z-20 bg-none z-30"
      style={navbarStyle}
    >
      {logo}
      <div className="block lg:hidden">
        <IconButton
          aria-label="menu"
          variant="ghost"
          _hover={{ bg: "rgba(200,200,200,0.3)" }}
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
        >
          <Bars3Icon className={`h-8`} style={{ color: logoStyle.color1 }} />
        </IconButton>
      </div>
      <Drawer placement={"top"} onClose={() => setOpen(false)} isOpen={open}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            size="lg"
            marginTop={2}
            color="gray.500"
            _focus={{ boxShadow: "none" }}
          />
          <DrawerHeader borderBottomWidth="1px">{logo}</DrawerHeader>
          <DrawerBody>
            <div
              className={`${
                open ? "grid gap-5" : "hidden"
              } transition-all duration-300 py-5`}
            >
              {menus}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="items-center justify-center hidden lg:flex gap-5">
        {menus}
      </div>
      {language}
    </div>
  );
}
