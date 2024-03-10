"use client";

import { useEffect, useRef, useState } from "react";
import Link, { LinkProps } from "next/link";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { usePathname } from "next/navigation";

interface CustomLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  loaderColor?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  loaderColor = "#007bff",
  ...rest
}) => {
  const [wontNavigate, setWontNavigate] = useState(false);
  const loadingBarRef = useRef<LoadingBarRef>(null);

  const { href } = rest;
  const pathname = usePathname();

  if (!wontNavigate && (href === pathname || href.toString().startsWith("#"))) {
    setWontNavigate(true);
  }

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.complete();
    }
  }, [pathname]);

  const handleClick = () => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart(); // No error now
      if (wontNavigate) {
        return loadingBarRef.current.complete();
      }
      setTimeout(() => {
        loadingBarRef.current?.complete();
      }, 5000);
    }
  };

  return (
    <>
      <Link {...rest} onClick={handleClick}>
        {children}
      </Link>
      <LoadingBar color={loaderColor} ref={loadingBarRef} />
    </>
  );
};

export default CustomLink;
