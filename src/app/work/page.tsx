import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Work experience and professional history of Arka Garai, full-stack developer.",
};

export default function WorkPage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="mb-6 text-2xl font-semibold sm:text-3xl">Work</h1>

        <div className="py-8 text-center">
          <p className="text-secondary text-sm sm:text-base">Coming soon...</p>
        </div>
      </section>
    </Container>
  );
}
