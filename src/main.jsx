import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, sepolia, polygon, optimism, arbitrum, base, avalanche } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { sonic } from "./chains/sonic.js";
import { celestiaMainnet, celestiaMochaTestnet, celestiaArabicaDevnet, monadTestnet } from "./chains/index.js";

// 🔹 Configuración simplificada de RainbowKit + Wagmi
const config = getDefaultConfig({
  appName: "Sonic IA",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    sonic, 
    mainnet, 
    sepolia, 
    avalanche, 
    polygon, 
    optimism, 
    arbitrum, 
    base, 
    celestiaMainnet,
    celestiaMochaTestnet,
    celestiaArabicaDevnet,
    monadTestnet
  ],
  ssr: false,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Router>
              <App />
            </Router>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found');
}
