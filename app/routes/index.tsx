import Sidebar from "~/components/Sidebar";
import Center from "~/components/Center";

export default function Index() {
  return (
    <main className="flex h-screen overflow-hiden w-full px-24">
      <Center/>
      <Sidebar/>
    </main>
  );
}
