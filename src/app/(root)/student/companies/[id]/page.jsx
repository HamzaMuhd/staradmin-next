"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { defaultCompanies } from "@/data/companies";
import {
  Briefcase,
  MapPin,
  Building2,
  Clock,
  DollarSign,
  Globe,
} from "lucide-react";

export default function CompanyDetail() {
  const { id } = useParams();
  const company = defaultCompanies.find((c) => c.id === Number(id));

  if (!company) {
    return (
      <div className="content-wrapper">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h2 className="text-xl font-semibold">Company not found</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The company you’re looking for doesn’t exist or was removed.
          </p>
        </div>
      </div>
    );
  }

  const openings = company.openings ?? [];

  return (
    <div className="content-wrapper">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main */}
          <main className="lg:col-span-8">
            {/* Header */}
            <header className="flex flex-col items-center gap-4 text-center">
              <Avatar className="h-20 w-20 rounded-xl ring-1 ring-border">
                <AvatarImage src={company.logo} alt={company.name} />
                <AvatarFallback className="rounded-xl">
                  {company.name?.charAt(0) ?? "C"}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {company.name}
                </h1>
                <div className="mt-1 flex flex-wrap justify-center items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {company.location || "—"}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                  <span className="inline-flex items-center">
                    <Building2 className="mr-1 h-4 w-4" />
                    {company.industry || "Industry"}
                  </span>
                </div>
              </div>
            </header>

            <Separator className="my-6" />

            {/* About */}
            <section>
              <h2 className="text-base font-semibold">About</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {company.description ||
                  "No description provided for this organization."}
              </p>
            </section>

            <Separator className="my-6" />

            {/* Internship Openings */}
            <section>
              <div className="mb-3">
                <h2 className="text-base font-semibold">Internship Openings</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  {openings.length
                    ? `${openings.length} open role${
                        openings.length > 1 ? "s" : ""
                      }`
                    : "No open internships at the moment"}
                </p>
              </div>

              {openings.length > 0 ? (
                <ul className="mt-2 divide-y rounded-xl border bg-card">
                  {openings.map((o) => (
                    <li
                      key={o.id}
                      className="group p-4 transition hover:bg-muted/40"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex min-w-0 items-start gap-3">
                          <div className="mt-0.5 rounded-md border p-1.5">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="truncate text-sm font-medium">
                                {o.title}
                              </h3>
                              {o.mode && (
                                <Badge variant="secondary" className="h-5">
                                  {o.mode}
                                </Badge>
                              )}
                              {o.duration && (
                                <Badge variant="outline" className="h-5">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {o.duration}
                                </Badge>
                              )}
                              {o.stipend && (
                                <Badge variant="outline" className="h-5">
                                  <DollarSign className="mr-1 h-3 w-3" />
                                  {o.stipend}
                                </Badge>
                              )}
                            </div>
                            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                              {o.summary || o.type || "Internship"}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full"
                          >
                            Details
                          </Button>
                          <Button size="sm" className="rounded-full">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <Card className="mt-2">
                  <CardContent className="p-6 text-center text-sm text-muted-foreground">
                    We’ll list internships here when they become available.
                  </CardContent>
                </Card>
              )}
            </section>

            {/* Bottom Apply Button */}
            <div className="mt-8 flex justify-center">
              <Button className="rounded-full">Apply Now</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
