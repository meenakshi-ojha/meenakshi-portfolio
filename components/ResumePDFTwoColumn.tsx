import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { resumeData, splitBoldSegments, getContactLinks } from "@/data/resume";
import "@/components/pdfFonts";

const ACCENT = "#1976d2";
const contactLinks = getContactLinks(resumeData);

const renderFormatted = (text: string) =>
  splitBoldSegments(text).map((seg, i) =>
    seg.bold ? (
      <Text key={i} style={{ fontWeight: "bold" }}>
        {seg.text}
      </Text>
    ) : (
      seg.text
    )
  );

const styles = StyleSheet.create({
  page: {
    fontSize: 9,
    fontFamily: "Inter",
    lineHeight: 1.2,
  },
  headerBand: {
    padding: 11,
    paddingBottom: 11,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 1.2,
    marginBottom: 7,
  },
  title: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: ACCENT,
    lineHeight: 1.2,
    marginBottom: 7,
  },
  contactLine: {
    fontSize: 8.5,
  },
  row: {
    flexDirection: "row",
    flexGrow: 1,
  },
  sidebar: {
    width: "32%",
    backgroundColor: "#f4f6f9",
    padding: 11,
  },
  main: {
    width: "68%",
    padding: 11,
  },
  sidebarHeading: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: ACCENT,
    paddingBottom: 3,
  },
  sidebarHeadingSpaced: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 14,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: ACCENT,
    paddingBottom: 3,
  },
  competencyPill: {
    fontSize: 8,
    backgroundColor: "#dbe7f7",
    color: "#0d3c6e",
    fontWeight: "bold",
    padding: 4,
    marginBottom: 4,
    borderRadius: 3,
  },
  skillCategoryLabel: {
    fontSize: 8.5,
    fontWeight: "bold",
    marginBottom: 1,
    marginTop: 4,
  },
  skillText: {
    fontSize: 8,
    lineHeight: 1.15,
    marginBottom: 1.5,
  },
  eduDegree: {
    fontSize: 8.5,
    fontWeight: "bold",
    marginBottom: 1,
  },
  eduMeta: {
    fontSize: 8,
    color: "#444",
  },
  certName: {
    fontSize: 8.5,
    fontWeight: "bold",
  },
  certMeta: {
    fontSize: 8,
    color: "#444",
    marginBottom: 4,
  },
  mainSectionHeading: {
    fontSize: 12,
    fontWeight: "bold",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  mainSectionHeadingSpaced: {
    fontSize: 12,
    fontWeight: "bold",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 6,
    marginTop: 6,
  },
  summaryText: {
    fontSize: 9.5,
    lineHeight: 1.4,
    textAlign: "justify",
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roleTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  dateRange: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#555",
  },
  companyInfo: {
    fontSize: 9,
    fontWeight: "bold",
    color: ACCENT,
    marginBottom: 2,
  },
  bulletPoint: {
    fontSize: 9,
    marginBottom: 1.5,
    lineHeight: 1.2,
  },
});

export const ResumePDFTwoColumn = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Full-width header band */}
      <View style={styles.headerBand}>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.title}>{resumeData.title}</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {contactLinks.map((link, i) => (
            <Text key={link.href} style={styles.contactLine}>
              <Link src={link.href} style={{ color: ACCENT }}>
                {link.label}
              </Link>
              {i < contactLinks.length - 1 ? " | " : ""}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.row}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarHeading}>Education</Text>
          <Text style={styles.eduDegree}>{resumeData.education.degree}</Text>
          <Text style={styles.eduMeta}>
            {resumeData.education.university}, {resumeData.education.location}
          </Text>
          <Text style={styles.eduMeta}>
            {resumeData.education.startDate} – {resumeData.education.endDate}
          </Text>

          <Text style={styles.sidebarHeadingSpaced}>Core Competencies</Text>
          {resumeData.coreCompetencies.map((item) => (
            <Text key={item} style={styles.competencyPill}>
              {item}
            </Text>
          ))}

          <Text style={styles.sidebarHeadingSpaced}>Technical Skills</Text>
          {Object.entries(resumeData.skills).map(([key, value]) => (
            <View key={key}>
              <Text style={styles.skillCategoryLabel}>
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
              </Text>
              <Text style={styles.skillText}>{value}</Text>
            </View>
          ))}

          {resumeData.certifications.length > 0 && (
            <>
              <Text style={styles.sidebarHeadingSpaced}>Certification</Text>
              {resumeData.certifications.map((cert) => (
                <View key={cert.name} style={{ marginBottom: 4 }}>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certMeta}>
                    {cert.issuer} — {cert.year}
                  </Text>
                </View>
              ))}
            </>
          )}
        </View>

        {/* Main column */}
        <View style={styles.main}>
          <Text style={styles.mainSectionHeading}>Profile Summary</Text>
          <Text style={styles.summaryText}>{renderFormatted(resumeData.summary)}</Text>

          <Text style={styles.mainSectionHeadingSpaced}>Work Experience</Text>
          {resumeData.experience.map((job, index) => (
            <View key={index} style={{ marginBottom: 6 }}>
              <View style={styles.jobHeader}>
                <Text style={styles.roleTitle}>{job.role}</Text>
                <Text style={styles.dateRange}>
                  {job.startDate} – {job.endDate}
                </Text>
              </View>
              <Text style={styles.companyInfo}>
                {job.company}, {job.location}
              </Text>
              {job.highlights.map((highlight, i) => (
                <Text key={i} style={styles.bulletPoint}>
                  {"•"} {renderFormatted(highlight)}
                </Text>
              ))}
            </View>
          ))}

          <Text style={styles.mainSectionHeadingSpaced}>Languages & Soft Skills</Text>
          <Text style={styles.bulletPoint}>
            <Text style={{ fontWeight: "bold" }}>Languages: </Text>
            {resumeData.languages}
          </Text>
          <Text style={styles.bulletPoint}>
            <Text style={{ fontWeight: "bold" }}>Competencies: </Text>
            {resumeData.competencies}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
