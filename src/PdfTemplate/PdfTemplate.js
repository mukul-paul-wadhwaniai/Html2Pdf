import React from 'react';
import html2pdf from 'html2pdf.js';
import QRCodeGenerator from '../QRGenerator/QRCodeGenerator';

const PdfTemplate = ({ downloadFlag, heading, patientDetails, url, images, healthInfo, notes, nextSteps, hospitalVisit, disclaimer, setDownloadFlag = () => { } }) => {

    const generatePDF = async () => {
        const element = document.getElementById('pdf-template-container');
        const pdfOptions = {
          filename: patientDetails[0].value.replace(" ", "_") + '.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        try {
          await html2pdf().from(element).set(pdfOptions).save();
          setDownloadFlag(false)
        } catch (error) {
          console.error('Error Generating PDF: ', error);
        }
    };

    React.useEffect(() => {
        if(downloadFlag) {
            generatePDF();
        }
    }, [downloadFlag, generatePDF])

    const styles = {
        heading: {
            fontSize: "18px",
            color: "#000000",
            lineHeight: "20px",
            fontWeight: "500"
        },
        subHeading: {
            fontSize: "18px",
            color: "#000000",
            lineHeight: "21px",
            fontWeight: "500",
            marginTop: "15px"
        },
        textHeading: {
            fontSize: "16px",
            color: "#000000",
            lineHeight: "21px",
            fontWeight: "500"
        },
        text: {
            fontSize: "14px",
            color: "#404040",
            lineHeight: "18px",
            fontWeight: "400",
        },
        text2: {
            fontSize: "15px",
            color: "#404040",
            lineHeight: "18px",
            fontWeight: "500",
            marginTop: "5px"
        }
    }
    console.log(url)


    return (
        <>
        <div id="pdf-template-container" style={{width: "21.01cm", maxWidth: "21.01cm", height: "29.62cm", maxHeight: "29.62cm", margin: 0, padding: "40px 30px", boxSizing: 'border-box'}} >
            <div style={{textAlign: 'center', fontSize: "24px", fontWeight: "500", lineHeight: "22.54px", color: "#404040", marginBottom: "15px"}} >
                {heading}
            </div>
            <div style={{border: "0.1px solid #ccc", borderRadius: "4px", marginTop: "10px", padding: "10px 18px", display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                <div style={{width: "70%", display: "flex", flexWrap: "wrap", columnGap: "25px", rowGap: "10px" }}>
                    {patientDetails.map((patient, idx) => (
                        <div key={idx} style={{textAlign: "left"}} >
                            <div style={styles.textHeading} >
                                {patient.label}
                            </div>
                            <div style={styles.text} >
                                {patient.value}
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <QRCodeGenerator value={url} size={100} />
                </div>
            </div>
            <div style={{display: "flex", columnGap: "30px", width: "100%"}}>
                <div style={{width: "50%"}}>
                    <div style={styles.subHeading} >Left Eye</div>
                    <div style={{width: "100%", height: "260px", maxHeight: "260px"}}>
                        <img style={{width: "100%", height: "315px"}} src={images.img1} alt="left-eye-img" />
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <div style={styles.subHeading} >Right Eye</div>
                    <div style={{width: "100%"}}>
                        <img style={{width: "100%", height: "315px"}} src={images.img1} alt="right-eye-img" />
                    </div>
                </div>
            </div>
            <div>
                <div style={styles.subHeading}>
                    Health Information
                </div>
                <div style={{marginTop: "20px 0 10px", display: "flex", justifyContent: "space-between", rowGap: "10px", flexWrap: "wrap" }}>
                    {healthInfo.map((info, idx) => (
                        <div key={idx} style={{width: "24%"}}>
                            <div style={styles.textHeading} >
                                {info.label}
                            </div>
                            <div style={styles.text} >
                                {info.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{margin: "10px 0"}}>
                <div style={styles.textHeading}>
                    Notes
                </div>
                <div style={styles.text}>
                    {notes}
                </div>
            </div>
            <div style={{margin: "20px 0"}}>
                <div style={styles.subHeading}>
                    Next Steps
                </div>
                <div style={styles.text2}>
                    {nextSteps}
                </div>
            </div>
            <div style={{margin: "20px 0"}}>
                <div style={styles.subHeading}>
                    Hospital Visit
                </div>
                <div style={styles.text2}>
                    {hospitalVisit}
                </div>
            </div>
            <div style={{margintop: "5px", border: "2px solid #ccc", borderRadius: "5px", padding: "10px"}}>
                <div style={{fontSize: "20px", fontWeight: "400", color: "#101010"}} >
                    Disclaimer:
                </div>
                <div style={styles.text2} >
                    {disclaimer}
                </div>
            </div>
        </div>
        </>
    )
};

export default PdfTemplate;