"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { defaultCompanies } from "@/data/companies";

const CompanyCard = ({ company }) => (
  <Link href={`/student/companies/${company.id}`} className="card-link">
    <Card className="hover:shadow-lg transition-all w-full max-w-sm mx-auto no-underlinecursor-pointer h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src={company.logo}
          alt={company.name}
          className="w-12 h-12 rounded-md object-contain bg-gray-50 p-2"
        />
        <div>
          <CardTitle className="text-lg">{company.name}</CardTitle>
          <p className="text-sm text-gray-500">{company.industry}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">📍 {company.location}</p>
        {company.applied && (
          <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            Applied
          </span>
        )}
      </CardContent>
    </Card>
  </Link>
);
const CompanyList = ({ companies }) => {
  const [tab, setTab] = useState("all");

  // use passed-in companies if available, otherwise fallback
  const data = companies ?? defaultCompanies;

  const filteredCompanies =
    tab === "applied" ? data.filter((c) => c.applied) : data;

  return (
    <main>
      <h2 className="text-2xl font-bold mb-8 text-center">
        Companies you might be interested in
      </h2>

      <Tabs defaultValue="all" onValueChange={setTab} className="w-full">
        <TabsList className="flex justify-center mb-8 mt-4 w-full h-14">
          <TabsTrigger
            value="all"
            className="px-6 py-3 text-lg font-semibold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            ALL
          </TabsTrigger>
          <TabsTrigger
            value="applied"
            className="px-6 py-3 text-lg font-semibold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            APPLIED
          </TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default CompanyList;
