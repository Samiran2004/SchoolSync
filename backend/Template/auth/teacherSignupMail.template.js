const TeacherSignUpMailConfirmationMailContent = ({
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
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                        background-color: #4CAF50;
                        color: #ffffff !important;
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
                        <h1>👨‍🏫 Welcome to SchoolSync!</h1>
                        <p>Dear ${name},</p>
                        <p>We are excited to welcome you to the <strong>SchoolSync</strong> platform as part of our teaching community.</p>
                        <p>With SchoolSync, you’ll be able to:</p>
                        <ul>
                            <li>📅 Organize and manage your classes, schedules, and lesson plans.</li>
                            <li>📝 Assign, collect, and grade assignments from your students.</li>
                            <li>💬 Communicate with students and parents directly within the platform.</li>
                            <li>📊 Track and analyze student performance easily.</li>
                        </ul>
                        <p>We’re glad to have you join SchoolSync. Together, we can make teaching and learning more effective and connected.</p>
                        <a href="https://schoolsync.example.com/" class="button">Go to Teacher Dashboard</a>
                        <div class="footer">
                            <p>&copy; 2025 SchoolSync. All rights reserved.</p>
                            <p>SchoolSync EdTech Pvt Ltd, 123 Learning Avenue, Education City, EC 56789</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `,
    };
};

export default TeacherSignUpMailConfirmationMailContent;