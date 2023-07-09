"use client";
import { useState } from "react";
import PackageInfo from "@/components/PackageInfo";
import IntakeForm from "@/components/IntakeForm";
import ThanksForOrder from "@/components/ThanksForOrder";

import Policies from "@/components/Policies";
import Congragulations from "@/components/Congragulations";

export default function Page({ searchParams }: { searchParams: any }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [customerFormData, setCustomerFormData] = useState<any>({});

  // Tab==1 -> Policies
  // Tab==2 -> Order review
  // Tab==3 -> Intake Form
  // Tab==4 -> Thanks message

  return (
    <main>
      {selectedTab == 1 && <Policies data={{ selectedTab, setSelectedTab }} />}
      {selectedTab == 2 && (
        <PackageInfo
          id={searchParams.id}
          data={{ selectedTab, setSelectedTab }}
        />
      )}
      {selectedTab == 3 && (
        <IntakeForm
          id={searchParams.id}
          data={{ selectedTab, setSelectedTab }}
        />
      )}

      {selectedTab == 5 && <Congragulations />}
    </main>
  );
}
