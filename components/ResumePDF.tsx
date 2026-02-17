import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { resumeData } from "@/data/resume";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 12,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1976d2",
  },
  contactInfo: {
    fontSize: 8.5,
    marginBottom: 1,
  },
  section: {
    marginBottom: 10,
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666",
    paddingBottom: 2,
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
    marginBottom: 2,
  },
  bulletPoint: {
    fontSize: 9,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  skillCategory: {
    marginBottom: 3,
  },
  skillCategoryLabel: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 1,
  },
  skillText: {
    fontSize: 9,
    lineHeight: 1.3,
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.4,
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
        <Text style={styles.contactInfo}>
          {resumeData.email} | {resumeData.phone} | {resumeData.linkedin} | {resumeData.github}
        </Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Summary</Text>
        <Text style={styles.summaryText}>{resumeData.summary}</Text>
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
          <View key={index} style={{ marginBottom: 8 }}>
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
                  {"\u2022"} {highlight}
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
