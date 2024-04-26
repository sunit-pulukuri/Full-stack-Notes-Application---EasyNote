import React from "react";
const About = () => {
  return (
    <div id="aboutAcc" className="small-middle-container2 my-5 ">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is easyNote?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              EasyNote is a versatile web application designed to revolutionize
              the way you manage your notes. Whether you're a student,
              professional, or someone who simply loves to stay organized,
              EasyNote provides the perfect platform for creating, editing, and
              organizing your notes effortlessly. With its intuitive interface
              and user-friendly features, EasyNote allows you to streamline your
              note-taking process, saving you time and energy. Simply sign up or
              log in to access your notes securely from anywhere, at any time.
              EasyNote empowers you to stay productive and focused by providing
              a centralized hub for all your important thoughts, ideas, and
              reminders. Say hello to simplicity and efficiency with EasyNote –
              your go-to solution for all your note-taking needs.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Why use easyNote
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              EasyNote is the perfect solution for anyone seeking a seamless and
              efficient note-taking experience. With its user-friendly
              interface, EasyNote empowers users to effortlessly create, edit,
              and delete their notes with just a few clicks. Whether you're
              jotting down ideas, organizing tasks, or keeping track of
              important information, EasyNote offers the flexibility and
              convenience you need. By providing secure login and signup
              features, EasyNote ensures that your notes are always accessible
              and protected. With its intuitive design and robust functionality,
              EasyNote streamlines the note-taking process, allowing users to
              focus on what matters most. Say goodbye to scattered scraps of
              paper or cluttered digital documents – with EasyNote, note-taking
              has never been easier.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Credits
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The accordion feature in EasyNote owes its creation to the
              invaluable guidance and tutorials provided by the{" "}
              <strong>CodeWithHarry</strong> YouTube channel. With clear
              instructions and insightful explanations,{" "}
              <strong>CodeWithHarry</strong> enabled the development team behind
              EasyNote to implement this user-friendly and dynamic accordion
              component seamlessly. The channel's dedication to teaching web
              development concepts in a straightforward and accessible manner
              empowered us to enhance the user experience of EasyNote, ensuring
              that users can easily navigate and manage their notes with
              efficiency and convenience. We extend our sincere gratitude to{" "}
              <strong>CodeWithHarry</strong> for their invaluable contribution
              to the development of EasyNote's accordion feature.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
