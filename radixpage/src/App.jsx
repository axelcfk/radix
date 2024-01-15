// import { useState } from 'react'

import "./App.css";
import "./index.css";
import Overview from "./Overview";
import MyTable from "./table";
import Header from "./DropDown";
import Search from "./SearchBar";
import MyAvatar from "./Avatar";
import DownloadButton from "./Button";
import Cards from "./Cards";
import Tab from "./Tabs";
import { Card, Separator } from "@radix-ui/themes";
// import Card3 from "./CardSales";

export default function App() {
  return (
    <Card className=" m-16 p-0  w-full">
      <section>
        <div className="flex justify-between">
          <div>
            <Header />
          </div>

          <nav className="flex h-8 items-center">
            <div className=" mr-4">
              <Search />
            </div>
            <div>
              <MyAvatar />
            </div>
          </nav>
        </div>

        <Separator my="3" size="4" />

        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold tracking-tight my-10">Dashboard</h2>
          <DownloadButton />
        </div>
        <div className="mb-10">
          <Tab />
        </div>
        <div>
          <Cards />
        </div>

        <div className="flex ">
          <div className=" w-7/12 mr-4">
            <Overview />
          </div>

          <div className="w-5/12 h-full">
            <MyTable />
          </div>
        </div>
      </section>
    </Card>
  );
}
