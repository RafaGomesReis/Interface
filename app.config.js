module.exports = {
  name: "interface-loja",
  slug: "interface-loja",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/logo.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/logo.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/logo.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    favicon: "./assets/logo.png"
  },
  plugins: [
    "expo-router"
  ],
  scheme: "interface-loja",
  sdkVersion: "53.0.0"
}; 