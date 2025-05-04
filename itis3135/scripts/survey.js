document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const output = document.getElementById("output");
    const coursesDiv = document.getElementById("courses");
    let courseCount = 0;

    function loadImage() {
        const imageInput = document.getElementById("image");
        if (imageInput.files.length > 0) {
            const image = imageInput.files[0];
            const imageUrl = URL.createObjectURL(image);
            return `<img src="${imageUrl}" alt="User Image">`;
        }
        return "";
    }

    // Add course input
    window.addCourse = function () {
        courseCount++;
        const courseField = document.createElement("div");
        courseField.classList.add("flex", "items-center", "space-x-2");
        courseField.innerHTML = `
            <input type="text" id="course${courseCount}" placeholder="Course">
            <button type="button" onclick="removeCourse(this)">Delete</button>
        `;
        coursesDiv.appendChild(courseField);
    };

    // Option to remove course input field
    window.removeCourse = function (button) {
        button.parentElement.remove();
        courseCount = Math.max(0, courseCount - 1);
    };

    // Form data collection:
    function gatherFormData() {
        return {
            name: document.getElementById("name").value,
            mascot: document.getElementById("mascot").value,
            imageCaption: document.getElementById("image-caption").value,
            personalBackground: document.getElementById("personal-background").value,
            professionalBackground: document.getElementById("professional-background").value,
            academicBackground: document.getElementById("academic-background").value,
            webDevBackground: document.getElementById("web-dev-background").value,
            computerPlatform: document.getElementById("primary-computer").value,
            funnyThing: document.getElementById("funny").value,
            anythingElse: document.getElementById("anything-else").value,
            agreement: document.getElementById("agreement").checked,
            courses: Array.from(coursesDiv.querySelectorAll("input[type=text]"))
                .map((input) => input.value.trim())
                .filter((value) => value !== "")
        };
    }

    // Display the form
    function displayIntro(data) {
        const imageHtml = loadImage();
        const coursesHtml = data.courses.length > 0
            ? `<ul>${data.courses.map((course) => `<li>${course}</li>`).join("")}</ul>`
            : "None";

        output.innerHTML = `
            <h2>${data.name} || ${data.mascot}</h2>
            <figure>
                <div id="load-image">${imageHtml}</div>
                <figcaption>${data.imageCaption}</figcaption>
            </figure>
            <ul class="about">
                <li><p><strong>Personal Background:</strong> ${data.personalBackground}</p></li>
                <li><p><strong>Professional Background:</strong> ${data.professionalBackground}</p></li>
                <li><p><strong>Academic Background:</strong> ${data.academicBackground}</p></li>
                <li><p><strong>Web Development Background:</strong> ${data.webDevBackground}</p></li>
                <li><p><strong>Primary Computer Platform:</strong> ${data.computerPlatform}</p></li>
                <li><p><strong>Courses:</strong> ${coursesHtml}</p></li>
                <li><p><strong>Funny Thing:</strong> ${data.funnyThing}</p></li>
                <li><p><strong>Anything Else:</strong> ${data.anythingElse}</p></li>
                <li><p><strong>Agreement:</strong> ${data.agreement ? "Agreed" : "Not Agreed"}</p></li>
            </ul>
            <a href="#" onclick="location.reload()">Reset</a>
        `;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const data = gatherFormData();
    
        // Make sure that courses is required
        const hasCourse = data.courses.some((course) => course.trim() !== "");
        if (!hasCourse) {
            alert("Please enter at least one course.");
            return;
        }
    
        if (!form.checkValidity()) {
            alert("Please fill out all required fields and agree to the terms.");
            return;
        }
    
        displayIntro(data);
    });

    form.addEventListener("reset", function () {
        output.innerHTML = "";
        coursesDiv.innerHTML = "";
        courseCount = 0;
    });
});