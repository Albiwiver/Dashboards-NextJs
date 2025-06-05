import { Logo } from "@/components/atoms/Logo/Logo";
import { CallToAction } from "@/components/molecules/CallToAction/CallToAction";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-[32px] items-center sm:items-start">
      <Logo />

      <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2 tracking-[-.01em]">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            src/app/page.tsx
          </code>
          .
        </li>
        <li className="tracking-[-.01em]">
          Save and see your changes instantly.
        </li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <CallToAction
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/vercel.svg"
          text="Deploy now"
          variant="primary"
        />
        <CallToAction
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          text="Read our docs"
          variant="secondary"
        />
      </div>
    </div>
  );
};
