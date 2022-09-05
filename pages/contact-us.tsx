import Newsletter from "../components/routes/about/Newsletter";
import Contact from "../components/routes/contact/Contact";
import FormToUs from "../components/routes/contact/FormToUs";
import Information from "../components/routes/contact/Information";

const ContactUsPage = () => {
  return (
    <>
      <Contact />
      <Information/>
      <FormToUs/>
      <Newsletter/>
    </>
  );
};
export default ContactUsPage;
