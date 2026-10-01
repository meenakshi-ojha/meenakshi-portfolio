import { NextResponse } from "next/server";
import React from "react";
import { renderToStream } from "@react-pdf/renderer";
import { ResumePDFTwoColumn } from "@/components/ResumePDFTwoColumn";

export const runtime = "nodejs";

export async function GET() {
  try {
    const stream = await renderToStream(React.createElement(ResumePDFTwoColumn));

    return new NextResponse(stream as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Meenakshi_Ojha_Resume_TwoColumn.pdf",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
