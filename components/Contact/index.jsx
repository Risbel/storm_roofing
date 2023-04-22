import ContactForm from "./Form";
import LinkTree from "./LinkTree";

const Contact = () => {
  return (
    <footer id="contact">
      <section id="contact" className="bg-contact bg-center bg-cover">
        <div className="bg-[#013e60] bg-opacity-80">
          <div className="px-10 md:px-16">
            <div className="-translate-y-9 md:-translate-y-24">
              <h1 className="text-[#237ec3] text-6xl md:text-9xl font-extrabold text-center md:text-left">
                Contact
              </h1>
            </div>
            <div className="pb-20 flex flex-col gap-12 items-center md:items-start md:justify-between md:gap-4">
              <div className="w-full flex justify-center md:justify-end">
                <ContactForm className="md:-translate-y-40" />
              </div>
              <div className="">
                <LinkTree />
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
