import { Navbar } from "../Navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col mx-auto max-w-full h-auto">
      <Navbar />
      {children}
    </div>
  )
}