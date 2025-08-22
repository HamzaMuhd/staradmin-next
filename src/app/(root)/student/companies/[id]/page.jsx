"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { defaultCompanies } from "@/data/companies";

export default function CompanyDetail() {
  const { id } = useParams();
  const company = defaultCompanies.find((c) => c.id === Number(id));

  if (!company) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold">Company not found</h2>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <div className="w-full h-56 relative rounded-2xl overflow-hidden shadow-md">
        <Image
          src={company.logo}
          alt={company.name}
          fill
          className="object-cover"
        />
      </div>
      {/* Company Info */})
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{company.name}</h1>
        <p className="text-gray-600 mt-2">{company.description}</p>
        <p className="text-sm text-gray-500 mt-1">
          📍 {company.location} · {company.industry}
        </p>
      </div>
      {/* Internship Openings */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Available Openings</h2>
        {company.openings?.length > 0 ? (
          <div className="grid gap-4">
            {company.openings.map((opening) => (
              <Card key={opening.id} className="p-4">
                <CardContent>
                  <h3 className="text-lg font-medium">{opening.title}</h3>
                  <p className="text-sm text-gray-500">{opening.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No internship openings available.</p>
        )}
      </section>
      {/* Apply Button */}
      <div className="mt-8 flex justify-center">
        <Button size="lg" className="px-8">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
