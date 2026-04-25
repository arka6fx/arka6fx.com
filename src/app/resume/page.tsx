import Link from "next/link";
import { Container } from "@/components/Container";

const RESUME_ID = "1devzVtTnPaWYJoz10jt54U6vSGlJtGmi";
const RESUME_EMBED = `https://docs.google.com/gview?url=https://drive.google.com/uc?export=download%26id=${RESUME_ID}&embedded=true`;
const RESUME_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;
const RESUME_VIEW = `https://drive.google.com/file/d/${RESUME_ID}/view`;

export default function ResumePage() {
  return (
    <Container>
      <section className="py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Resume</h1>

        <div className="flex gap-4 mb-6">
          <Link
            href={RESUME_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium rounded transition-colors min-h-[48px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download PDF</span>
          </Link>
          <Link
            href={RESUME_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-divider hover:border-[#00BFFF] text-[#94A3B8] hover:text-[#00BFFF] font-medium rounded transition-colors min-h-[48px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>View on Drive</span>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <div className="bg-[#0B0F19] p-4 sm:p-6 lg:p-8 rounded-xl">
            <div className="relative bg-white rounded-lg overflow-hidden"
                 style={{ aspectRatio: "1 / 1.414", width: "100%", maxWidth: "850px", minHeight: "1200px" }}>
              <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-4 bg-[#1E293B]/80 backdrop-blur-sm border-b border-divider z-10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-[10px] text-secondary/70">resume.pdf</span>
                </div>
                <Link
                  href={RESUME_VIEW}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] text-[#94A3B8] hover:text-[#00BFFF] transition-colors duration-150"
                  aria-label="Open in new tab"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>open ↗</span>
                </Link>
              </div>
              <div className="absolute top-10 left-0 right-0 bottom-0">
                <iframe
                  src={RESUME_EMBED}
                  className="w-full h-full border-0"
                  title="Resume Preview"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#94A3B8] mt-6">
          Can&apos;t see the preview?{" "}
          <Link
            href={RESUME_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6EDF3] hover:!text-[#00BFFF] transition-colors duration-150"
          >
            Open in Google Drive ↗
          </Link>
          {" "}or{" "}
          <Link
            href={RESUME_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6EDF3] hover:!text-[#00BFFF] transition-colors duration-150"
          >
            download directly ↗
          </Link>
        </p>
      </section>
    </Container>
  );
}