import React from 'react';
import PdfTemplate from '../PdfTemplate/PdfTemplate';
import image from '../Resources/image.jpg'

const Main = () => {

    const [downloadPdfFlag, setDownloadPdfFlag] = React.useState(false)

    const obj = {
        heading: "Diabetic Retinopathy Screening Report",
        patientDetails: [
            {label: "Patient Name:", value: "Smita Singh"},
            {label: "age:", value: "54 years"},
            {label: "Gender:", value: "Female"},
            {label: "Patient ID:", value: "1212121212F"},
            {label: "Phone Number:", value: "+91 9898989898"},
            {label: "Referred by:", value: "Dr. Anita Sharma"},
        ],
        url: "https://www.npmjs.com/package/qrcode.react",
        images: {
            img1: image,
            img2: image,
        },
        healthInfo: [
                {label: "Pre-diagnosed Diabetes:", value: "Yes"},
                {label: "Duration of Diabetes Detection:", value: "5 years"},
                {label: "Diabetes Type:", value: "Type 1 "},
                {label: "Hb A1 C Level:", value: "150 mg/dL"},
                {label: "Blood Pressure:", value: "Blood Pressure:"},
                {label: "Visual Acuity:", value: "Left: 6/18, Right: 6/18"},
                {label: "Other complications:", value: "Kidney"},
                {label: "Family History of Diabetes:", value: "Parents"},
        ],
        notes: "Blurry eye sight, BP problems",
        nextSteps: "No referral required and ask for a follow up visit after a year and suggest them to monitor their sugar level.",
        hospitalVisit: "If you’re looking for a medical advise, visit Dr. ABC at XYZ Hospital.",
        disclaimer: "The report does not replace professional medical advice, diagnosis or treatment"
    }
    

    return (
        <div>
            {downloadPdfFlag && <PdfTemplate downloadFlag={downloadPdfFlag} heading={obj.heading} patientDetails={obj.patientDetails} url={obj.url} images={obj.images} healthInfo={obj.healthInfo} notes={obj.notes} nextSteps={obj.nextSteps} hospitalVisit={obj.hospitalVisit} disclaimer={obj.disclaimer} setDownloadFlag={setDownloadPdfFlag} />}
            <button onClick={() => setDownloadPdfFlag(true)} style={{padding: "15px", background: "#lightblue", borderRadius: "10px", fontWeight: "600", fontSize: "24px"}} >Generate PDF</button>
        </div>
    )
};

export default Main;