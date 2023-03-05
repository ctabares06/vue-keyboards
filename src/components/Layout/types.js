export const ContactEmits = {
  handleSubmit({ firstname, lastname, email, checks }) {
    if (firstname && lastname) {
      return true;  
    } else {
      console.warn("validation fails");
      return false;
    }
  }
}