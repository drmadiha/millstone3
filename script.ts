document.getElementById("generate")?.addEventListener("click", function () {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
  
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
  
    if (name && email && phone && skills && experience && education && summary) {
      (document.getElementById("outputName") as HTMLParagraphElement).textContent = `Name: ${name}`;
      (document.getElementById("outputEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
      (document.getElementById("outputPhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
      (document.getElementById("outputSkills") as HTMLParagraphElement).textContent = skills;
      (document.getElementById("outputExperience") as HTMLParagraphElement).textContent = experience;
      (document.getElementById("outputEducation") as HTMLParagraphElement).textContent = education;
      (document.getElementById("outputSummary") as HTMLParagraphElement).textContent = summary;
  
      (document.getElementById("resumeContainer") as HTMLDivElement).style.display = "block";
    } else {
      alert("Please fill out all fields!");
    }
  });
  
  
