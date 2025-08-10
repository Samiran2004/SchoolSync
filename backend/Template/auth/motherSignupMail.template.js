const MotherSignUpMailConfirmationMailContent = ({
    email,
    name,
    subject,
}) => {
    return {
        to: email,
        subject: subject,
        html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to SchoolSync</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        padding: 20px;
                        background-color: #f4f4f4;
                    }
                    .content {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        color: #333333;
                    }
                    p {
                        color: #555555;
                        line-height: 1.5;
                    }
                    ul {
                        text-align: left;
                        padding-left: 20px;
                        color: #555555;
                    }
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        margin-top: 20px;
                        background-color: #E91E63;
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        color: #999999;
                        font-size: 12px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="content">
                        <h1>👩‍👧 Welcome to SchoolSync!</h1>
                        <p>Dear ${name},</p>
                        <p>We’re so pleased to welcome you as a parent to the <strong>SchoolSync</strong> community — your trusted platform for staying connected to your child’s school life.</p>
                        <p>With SchoolSync, you can:</p>
                        <ul>
                            <li>📊 Track your child's learning progress and attendance in real time.</li>
                            <li>📝 View assignments, grades, and teacher remarks.</li>
                            <li>💬 Communicate easily with teachers and school staff.</li>
                            <li>📅 Get timely updates on school events, announcements, and notices.</li>
                        </ul>
                        <p>Thank you for joining us — together, we can support your child’s educational journey every step of the way!</p>
                        <a href="https://schoolsync.example.com/" class="button">Access Parent Dashboard</a>
                        <div class="footer">
                            <p>&copy; 2025 SchoolSync. All rights reserved.</p>
                            <p>SchoolSync EdTech Pvt Ltd, 123 Learning Avenue, Education City, EC 56789</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>`,
    }
}

export default MotherSignUpMailConfirmationMailContent;