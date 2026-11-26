import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import Menu from "@/components/Menu";
import Bestsellers from "@/components/Bestsellers";
import BulkOrders from "@/components/BulkOrders";
import WhyUs from "@/components/WhyUs";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import OrderTray from "@/components/OrderTray";
import { OrderProvider } from "@/components/OrderContext";

export default function Home() {
  return (
    <OrderProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoStrip />
        <Bestsellers />
        <Menu />
        <WhyUs />
        <BulkOrders />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <OrderTray />
    </OrderProvider>
  );
}
