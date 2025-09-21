import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import MenuSvg from "../../assets/svg/MenuSvg";
import { Button } from "../ui";
import { KeplrWallet } from "../wallet";
import { HambugerMenu } from "../design/Header";
import logo from "../../assets/IA chat/logo.png";

// Componente combinado para wallets de escritorio
const DesktopWallets = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:block relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-4 text-n-1"
      >
        <span className="relative z-10">Connect Wallets</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-n-8 border border-n-6 rounded-lg p-4 shadow-lg z-50">
          <div className="space-y-4">
            <div>
              <h3 className="text-n-3 text-sm mb-2">EVM Chains (MetaMask, WalletConnect)</h3>
              <appkit-button />
            </div>
            <div className="border-t border-n-6 pt-4">
              <h3 className="text-n-3 text-sm mb-2">Cosmos Chains (Keplr)</h3>
              <KeplrWallet />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-n-3 hover:text-n-1"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:bg-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            src={logo}
            width={190}
            height={40}
            alt="Brainwave"
            className="pointer-events-none select-none"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Mobile Connect Wallet Buttons */}
            <div className="lg:hidden w-full max-w-xs px-6 py-4 space-y-4">
              <div>
                <h3 className="text-n-3 text-sm mb-2 text-center">EVM Chains (MetaMask)</h3>
                <appkit-button />
              </div>
              <div>
                <h3 className="text-n-3 text-sm mb-2 text-center">Cosmos Chains (Keplr)</h3>
                <KeplrWallet />
              </div>
            </div>
          </div>

          <HambugerMenu />
        </nav>

        <DesktopWallets />

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;