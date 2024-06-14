
import { AdminPanel } from "./AdminPanel-Header";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {

  
  
  return (
    <>
      <section className="flex bg-slate-950 min-h-screen">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <AdminPanel />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          <Outlet />
        </main>
      </section>
    </>
  );
};
