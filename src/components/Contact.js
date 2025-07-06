export default function Contact() {
  const config = {
    email: 'ramtechnow@gmail.com',
    phone: '+91 9080339752',
  };

  return (
    <section id="contact" className="relative flex flex-col bg-primary px-5 py-32 overflow-hidden">
      {/* Bubble Background */}
      <div className="bubble-bg absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="bubble"></span>  
        ))}
      </div>

      {/* Contact Content */}
      <div className="flex flex-col items-center text-white relative z-10">
        <h1 className="text-4xl border-b-4 border-Secondary mb-5 w-[140px] font-bold">Contact</h1>
        <p className="pb-5">If you want to discuss more in detail, please contact me</p>
        <p className="py-2">
          <span className="font-bold">Email :</span> {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone :</span> {config.phone}
        </p>
      </div>
    </section>
  );
}