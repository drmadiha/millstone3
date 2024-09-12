var _a;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var skillsInput = document.getElementById("skills");
    var experienceInput = document.getElementById("experience");
    var educationInput = document.getElementById("education");
    var summaryInput = document.getElementById("summary");
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var skills = skillsInput.value;
    var experience = experienceInput.value;
    var education = educationInput.value;
    var summary = summaryInput.value;
    if (name && email && phone && skills && experience && education && summary) {
        document.getElementById("outputName").textContent = "Name: ".concat(name);
        document.getElementById("outputEmail").textContent = "Email: ".concat(email);
        document.getElementById("outputPhone").textContent = "Phone: ".concat(phone);
        document.getElementById("outputSkills").textContent = skills;
        document.getElementById("outputExperience").textContent = experience;
        document.getElementById("outputEducation").textContent = education;
        document.getElementById("outputSummary").textContent = summary;
        document.getElementById("resumeContainer").style.display = "block";
    }
    else {
        alert("Please fill out all fields!");
    }
});
