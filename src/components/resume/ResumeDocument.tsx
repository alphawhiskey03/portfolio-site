import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Resume } from "./data";

const RED = "#8f1d2d";
const RULE = "#b8646f";
const INK = "#111111";
const MUTED = "#555555";

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.3,
    color: INK,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    lineHeight: 1.2,
    color: RED,
    textAlign: "center",
    marginBottom: 4,
  },
  contactLine: { textAlign: "center", fontSize: 9, marginBottom: 1 },
  link: { color: INK, textDecoration: "none" },
  section: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    lineHeight: 1.3,
    color: RED,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    paddingBottom: 2,
    marginTop: 8,
    marginBottom: 5,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  entryTitle: { fontFamily: "Helvetica-Bold" },
  entryOrg: { fontFamily: "Helvetica-Bold", color: RED },
  entryPlain: { fontFamily: "Helvetica" },
  entryDate: { fontSize: 9 },
  subtitle: { fontFamily: "Helvetica-Oblique", fontSize: 9, marginBottom: 1 },
  bullet: { flexDirection: "row", paddingLeft: 10, marginBottom: 1 },
  bulletDot: { width: 10 },
  bulletText: { flex: 1 },
  technologies: {
    fontFamily: "Helvetica-Oblique",
    fontSize: 9,
    color: MUTED,
    paddingLeft: 10,
    marginTop: 1,
    marginBottom: 6,
  },
  techLabel: { fontFamily: "Helvetica-BoldOblique" },
  skillLine: { marginBottom: 1 },
  skillLabel: { fontFamily: "Helvetica-Bold" },
});

const Separator = () => <Text>  |  </Text>;

export function ResumeDocument({ resume }: { resume: Resume }) {
  return (
    <Document title={`${resume.name} – Resume`} author={resume.name}>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{resume.name}</Text>
        <Text style={styles.contactLine}>
          <Link src={`mailto:${resume.email}`} style={styles.link}>{resume.email}</Link>
          <Separator />
          {resume.phone}
        </Text>
        <Text style={styles.contactLine}>
          {resume.links.map((link, index) => (
            <Text key={link.href}>
              {index > 0 && <Separator />}
              <Link src={link.href} style={styles.link}>{link.label}</Link>
            </Text>
          ))}
        </Text>

        <Text style={styles.section}>Experience</Text>
        {resume.experiences.map((exp) => (
          <View key={`${exp.org}-${exp.dates}`} wrap={false}>
            <View style={styles.entryHeader}>
              <Text>
                <Text style={styles.entryTitle}>{exp.role}</Text>
                <Text style={styles.entryPlain}>, </Text>
                <Text style={styles.entryOrg}>{exp.org}</Text>
              </Text>
              <Text style={styles.entryDate}>{exp.dates}</Text>
            </View>
            {exp.subtitle && <Text style={styles.subtitle}>{exp.subtitle}</Text>}
            {exp.bullets.map((bullet) => (
              <View key={bullet} style={styles.bullet}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
            {exp.technologies.length > 0 && (
              <Text style={styles.technologies}>
                <Text style={styles.techLabel}>Technologies: </Text>
                {exp.technologies.join(", ")}
              </Text>
            )}
          </View>
        ))}

        <Text style={styles.section}>Certifications</Text>
        {resume.certifications.map((cert) => (
          <View key={cert.title} style={styles.entryHeader}>
            <Text>
              <Text style={styles.entryTitle}>{cert.title}</Text>
              <Text style={styles.entryPlain}>, {cert.issuer}</Text>
            </Text>
            <Text style={styles.entryDate}>{cert.date}</Text>
          </View>
        ))}

        <Text style={styles.section}>Education</Text>
        {resume.education.map((edu) => (
          <View key={edu.title} style={styles.entryHeader}>
            <Text>
              <Text style={styles.entryTitle}>{edu.title}</Text>
              <Text style={styles.entryPlain}>, {edu.institution}</Text>
            </Text>
            <Text style={styles.entryDate}>{edu.date}</Text>
          </View>
        ))}

        <Text style={styles.section}>Skills</Text>
        {resume.skills.map((group) => (
          <Text key={group.label} style={styles.skillLine}>
            <Text style={styles.skillLabel}>{group.label}: </Text>
            {group.items.join(", ")}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
