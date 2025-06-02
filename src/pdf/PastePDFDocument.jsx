import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  titleInput: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 10,
    borderBottom: "1 solid gray",
  },
  contentBox: {
    padding: 10,
    border: "1 solid gray",
    borderRadius: 4,
  },
  contentText: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const PastePDFDocument = ({ paste }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.titleInput}>{paste.title}</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contentText}>{paste.content}</Text>
      </View>
    </Page>
  </Document>
);

export default PastePDFDocument;
