// components/cv/PDFDownloadButton.jsx

'use client'

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30, fontFamily: 'Helvetica' },
    section: { margin: 10, padding: 10 },
    header: { fontSize: 24, marginBottom: 10, fontWeight: 'bold', color: '#3B82F6' },
    subheader: { fontSize: 18, marginBottom: 5, color: '#8B5CF6' },
    text: { fontSize: 12, marginBottom: 5, color: '#4B5563' },
    sectionTitle: { fontSize: 16, marginBottom: 10, fontWeight: 'bold', color: '#3B82F6' },
    projectTitle: { fontSize: 14, fontWeight: 'bold', color: '#8B5CF6' },
    projectDetails: { fontSize: 10, color: '#6B7280', marginBottom: 3 },
});

const MyDocument = ({ projects }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>KAICHENG OUYANG</Text>
                <Text style={styles.subheader}>Software Engineer</Text>
                <Text style={styles.text}>Roslyn Heights, United States • 5169046879 • kaicheng@kouyang.dev</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>PROFILE</Text>
                <Text style={styles.text}>
                    Passionate software engineer with expertise in Java, Python, and JavaScript.
                    Experienced in various frameworks and cloud platforms, with a drive for
                    turning ideas into reality and tackling complex challenges.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>SKILLS</Text>
                <Text style={styles.text}>• Java, Python, JavaScript</Text>
                <Text style={styles.text}>• React.js, Next.js, Spring</Text>
                <Text style={styles.text}>• AWS, MongoDB, MySQL</Text>
                <Text style={styles.text}>• GitHub, DigitalOcean, CloudFlare</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>PROJECTS</Text>
                {projects && projects.length > 0 ? (
                    projects.map((project, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text style={styles.projectTitle}>{project.name}</Text>
                            <Text style={styles.projectDetails}>{project.type} • {project.date}</Text>
                            <Text style={styles.text}>{project.description}</Text>
                            <Text style={styles.projectDetails}>Tech: {project.tech.join(', ')}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.text}>No projects available.</Text>
                )}
            </View>
        </Page>
    </Document>
);

// In PDFDownloadButton.jsx
const PDFDownloadButton = ({ projects }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <PDFDownloadLink document={<MyDocument projects={projects} />} fileName="kaicheng_ouyang_portfolio.pdf">
                    {({ blob, url, loading, error }) => (
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
                            disabled={loading}
                        >
                            {loading ? 'Generating PDF...' : 'Download PDF Portfolio'}
                        </button>
                    )}
                </PDFDownloadLink>
            )}
        </>
    );
};


export default PDFDownloadButton;