import classes from "./NewPost.module.css";
import { Link, Form, redirect } from "react-router-dom";

import Modal from "../src/components/Modal";

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enterAuthor, setEnteredAuthor] = useState("");

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enterAuthor,
  //   };

  // }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  console.log("inside action");
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(postData);

  return redirect("/");
}
