import Header from "@/components/Header";
import PackageInfo from "@/components/PackageInfo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header selected="packages" />

      {children}
    </div>
  );
}
