import path from "path";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(process.cwd(), "public/fonts/Inter-Regular.woff"), fontWeight: 400 },
    { src: path.join(process.cwd(), "public/fonts/Inter-Bold.woff"), fontWeight: 700 },
  ],
});

// Default hyphenation mangles already-hyphenated words (e.g. "pixel-perfect" -> "pix-el-perfect").
// Only wrap at real spaces/existing hyphens instead.
Font.registerHyphenationCallback((word) => [word]);
