import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { resumeData, splitBoldSegments, getContactLinks } from "@/data/resume";
import "@/components/pdfFonts";

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
    padding: 7,
    fontSize: 9.3,
    fontFamily: "Inter",
    lineHeight: 1.2,
  },
  header: {
    marginBottom: 8,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 8,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#1976d2",
  },
  contactInfo: {
    fontSize: 8.5,
    marginBottom: 1,
  },
  section: {
    marginBottom: 4,
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666",
    paddingBottom: 1,
    textTransform: "uppercase",
  },
  subsectionHeading: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 1,
  },
  companyInfo: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 1,
  },
  dateRange: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 2,
  },
  bulletList: {
    marginLeft: 8,
    marginBottom: 0.5,
  },
  bulletPoint: {
    fontSize: 9,
    marginBottom: 1,
    lineHeight: 1.15,
  },
  skillCategory: {
    marginBottom: 2,
  },
  skillCategoryLabel: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 1,
  },
  skillText: {
    fontSize: 9,
    lineHeight: 1.15,
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.25,
    textAlign: "justify",
    marginBottom: 1,
  },
});

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.title}>{resumeData.title}</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {contactLinks.map((link, i) => (
            <Text key={link.href} style={styles.contactInfo}>
              <Link src={link.href} style={{ color: "#1976d2" }}>
                {link.label}
              </Link>
              {i < contactLinks.length - 1 ? " | " : ""}
            </Text>
          ))}
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Summary</Text>
        <Text style={styles.summaryText}>{renderFormatted(resumeData.summary)}</Text>
      </View>

      {/* Core Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Core Skills</Text>
        {Object.entries(resumeData.skills).map(([key, value]) => (
          <View key={key} style={styles.skillCategory}>
            <Text style={styles.skillCategoryLabel}>
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}:
            </Text>
            <Text style={styles.skillText}>{value}</Text>
          </View>
        ))}
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Experience</Text>
        {resumeData.experience.map((job, index) => (
          <View key={index} style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.subsectionHeading}>{job.role}</Text>
              <Text style={styles.dateRange}>
                {job.startDate} – {job.endDate}
              </Text>
            </View>
            <Text style={styles.companyInfo}>
              {job.company}, {job.location}
            </Text>
            {job.highlights.map((highlight, i) => (
              <View key={i} style={styles.bulletList}>
                <Text style={styles.bulletPoint}>
                  {"\u2022"} {renderFormatted(highlight)}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Education</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.subsectionHeading}>{resumeData.education.degree}</Text>
          <Text style={styles.dateRange}>
            {resumeData.education.startDate} – {resumeData.education.endDate}
          </Text>
        </View>
        <Text style={styles.companyInfo}>
          {resumeData.education.university}, {resumeData.education.location}
        </Text>
      </View>

      {/* Languages & Competencies */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Languages & Soft Skills</Text>
        <Text style={styles.bulletPoint}>
          <Text style={{ fontWeight: "bold" }}>Languages:</Text> {resumeData.languages}
        </Text>
        <Text style={styles.bulletPoint}>
          <Text style={{ fontWeight: "bold" }}>Competencies:</Text> {resumeData.competencies}
        </Text>
      </View>
    </Page>
  </Document>
);
