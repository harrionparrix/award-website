"use client";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const data = {
  rows: [
    {
      title: "How to Apply or Register for the Award",
      content: `Teachers can nominate themselves by clicking on the registration link and filling up the complete form with the relevant documents. Additionally, school founders, owners, principals
      and other teachers can also nominate anyone for this award from their respective school.`,
    },
    {
      title: "What is the opening and the closing date for the nominations? ",
      content:
        "Opening date is 7th August 2021 and the closing date to complete and submit the nomination is 30th August 2021. ",
    },

    {
      title: "Where can I find the nomination form?",
      content: `The nomination form is available on the register here link on this page. You can fill the form by
      clicking on the register here button. `,
    },
    {
      title: "Should the nomination application be completed at one go?",
      content: `No, you can complete the nomination form based on your schedule and you don't have to complete
      the same at one go.The application can be completed later as well. The applicant can save the
      information and resume the application again from the same point, and edit/complete and finally
      submit it.`,
    },
    {
      title:
        "What is the format in which I have to upload the supporting documents?",
      content: `1. The supporting documents should be uploaded in a PDF and JPEG format.
      2. It is also mandatory to provide a URL link to the documents/ videos.`,
    },
    {
      title: "Can I review my application?",
      content: `Yes, the applicant can review their application before the final submission. If required, the applicant
      an further edit the information provided by submitting them before the closing date.`,
    },
    {
      title: "Is there a helpline number for the applicants?",
      content: `Yes, there is a helpline number provided to the applicants on the web portal. You can reach out to us
      or call us at  `,
    },
    {
      title:
        "Can I edit my personal information after I have already filled it in?",
      content: `Yes, the applicant can edit the information as many times as desired during the application process.
      However, once the final application is submitted, they cannot edit any information provided by them.`,
    },
    {
      title:
        "Can I alter any information/responses after the final submission is made?",
      content: `No. The applicant cannot alter any information after the final submission is made.`,
    },
  ],
};

const styles = {
  bgColor: "#101627",
  titleTextSize: "40px",
  titleTextColor: "white",
  rowTitleColor: "#f1bf60",
  padding: "10px",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  animate: true,
  arrowIcon: <ArrowDropDownIcon />,
  tabFocus: true,
};

export default function FAQSection() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "2%",
        color: "white",
      }}
    >
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
