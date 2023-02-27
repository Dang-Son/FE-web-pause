import Sidebar from "~/components/Sidebar";
import Center from "~/routes/Home";

export default function Index() {
  return (
    <main className=" bg-slate-100">
      <div className="flex h-full overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <Center />
        <Sidebar />
      </div>
    </main>
  );
}
