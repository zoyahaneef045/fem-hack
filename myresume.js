function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profileSummary = document.getElementById('profileSummary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;

    if (!name || !email || !phone || !experience) {
        alert('Please fill in all required fields (Name, Email, Phone, Experience).');
        return;
    }

    const resumeData = { name, email, phone, profileSummary, education, experience, skills, languages };
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    const resumeHTML = `
        <div class="resume">
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${profileSummary ? `<h3>Profile Summary</h3><p>${profileSummary.replace(/\n/g, '<br>')}</p>` : ''}
            ${education ? `<h3>Education</h3><p>${education.replace(/\n/g, '<br>')}</p>` : ''}
            <h3>Experience</h3>
            <p>${experience.replace(/\n/g, '<br>')}</p>
            ${skills ? `<h3>Skills</h3><p>${skills.replace(/\n/g, '<br>')}</p>` : ''}
            ${languages ? `<h3>Languages</h3><p>${languages.replace(/\n/g, '<br>')}</p>` : ''}
        </div>
    `;

    document.getElementById('resume-output').innerHTML = resumeHTML;

    document.getElementById('downloadResumeBtn').style.display = 'inline-block';
}

function downloadResume() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    if (!resumeData) {
        alert('No resume data found. Please generate a resume first.');
        return;
    }

    const fullHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Resume</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h2 { color: #333; }
                h3 { color: #555; }
                p { margin: 5px 0; }
            </style>
        </head>
        <body>
            <h2>${resumeData.name}</h2>
            <p><strong>Email:</strong> ${resumeData.email}</p>
            <p><strong>Phone:</strong> ${resumeData.phone}</p>
            ${resumeData.profileSummary ? `<h3>Profile Summary</h3><p>${resumeData.profileSummary.replace(/\n/g, '<br>')}</p>` : ''}
            ${resumeData.education ? `<h3>Education</h3><p>${resumeData.education.replace(/\n/g, '<br>')}</p>` : ''}
            <h3>Experience</h3>
            <p>${resumeData.experience.replace(/\n/g, '<br>')}</p>
            ${resumeData.skills ? `<h3>Skills</h3><p>${resumeData.skills.replace(/\n/g, '<br>')}</p>` : ''}
            ${resumeData.languages ? `<h3>Languages</h3><p>${resumeData.languages.replace(/\n/g, '<br>')}</p>` : ''}
        </body>
        </html>
    `;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'myresume.html';
    link.click();
}

function viewResume() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    if (!resumeData) {
        alert('No resume found. Please generate a resume first.');
        return;
    }

    const resumeHTML = `
        <h2>${resumeData.name}</h2>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        ${resumeData.profileSummary ? `<h3>Profile Summary</h3><p>${resumeData.profileSummary.replace(/\n/g, '<br>')}</p>` : ''}
        ${resumeData.education ? `<h3>Education</h3><p>${resumeData.education.replace(/\n/g, '<br>')}</p>` : ''}
        <h3>Experience</h3>
        <p>${resumeData.experience.replace(/\n/g, '<br>')}</p>
        ${resumeData.skills ? `<h3>Skills</h3><p>${resumeData.skills.replace(/\n/g, '<br>')}</p>` : ''}
        ${resumeData.languages ? `<h3>Languages</h3><p>${resumeData.languages.replace(/\n/g, '<br>')}</p>` : ''}
    `;
    document.getElementById('modalResumeContent').innerHTML = resumeHTML;
    $('#resumeModal').modal('show');
}

function editResume() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    if (!resumeData) {
        alert('No resume data found to edit. Please generate a resume first.');
        return;
    }

    document.getElementById('name').value = resumeData.name || '';
    document.getElementById('email').value = resumeData.email || '';
    document.getElementById('phone').value = resumeData.phone || '';
    document.getElementById('profileSummary').value = resumeData.profileSummary || '';
    document.getElementById('education').value = resumeData.education || '';
    document.getElementById('experience').value = resumeData.experience || '';
    document.getElementById('skills').value = resumeData.skills || '';
    document.getElementById('languages').value = resumeData.languages || '';

    alert('Resume data loaded into the form. Make changes and click "Generate Resume" to update.');
}

document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();
    generateResume();
});

document.getElementById('downloadResumeBtn').addEventListener('click', downloadResume);
document.getElementById('viewResumeBtn').addEventListener('click', viewResume);
document.getElementById('editResumeBtn').addEventListener('click', editResume);

function logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}
function editResume() {
  document.getElementById("resume-form").style.display = "block";

  document.getElementById("resume-form").reset();
}