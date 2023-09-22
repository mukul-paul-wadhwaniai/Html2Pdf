import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ value, size, fgColor, bgColor }) => {
    return (
        <div style={{width: "100%"}}>
            <QRCode 
                value={value} 
                size={size || 128} 
                fgColor={fgColor || "#000" }
                bgColor={bgColor ||"#fff"} 
            />
        </div>
    )
};

export default QRCodeGenerator;