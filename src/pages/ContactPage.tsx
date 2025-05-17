
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    program: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        program: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-hd-teal py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-trajan text-4xl md:text-5xl text-white mb-4">CONTACT US</h1>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-trajan mb-8 flex items-center">
                <span className="bg-hd-orange text-white p-2 mr-3">
                  <Mail size={24} />
                </span>
                Get in Touch
              </h2>
              
              <p className="text-lg mb-10">
                We'd love to explore how we can bring our programs to your school or organization.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start neo-brutalism p-4">
                  <Mail className="mr-4 text-hd-orange" size={24} />
                  <div>
                    <h3 className="font-garamond text-lg font-semibold">Email</h3>
                    <p>connect@historydiaries.in</p>
                  </div>
                </div>
                
                <div className="flex items-start neo-brutalism p-4">
                  <Phone className="mr-4 text-hd-orange" size={24} />
                  <div>
                    <h3 className="font-garamond text-lg font-semibold">Phone</h3>
                    <p>+91-XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start neo-brutalism p-4">
                  <MapPin className="mr-4 text-hd-orange" size={24} />
                  <div>
                    <h3 className="font-garamond text-lg font-semibold">Location</h3>
                    <p>Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="order-1 md:order-2">
              <div className="neo-brutalism p-8">
                <h2 className="text-2xl font-trajan mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-garamond text-lg mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-hd-orange"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-garamond text-lg mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-hd-orange"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="organization" className="block font-garamond text-lg mb-1">
                      School / Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-hd-orange"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="program" className="block font-garamond text-lg mb-1">
                      Program(s) Interested In
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-hd-orange"
                    >
                      <option value="">Select a program</option>
                      <option value="Theatre Shows">Curriculum-Based Theatre Shows</option>
                      <option value="Dialogues in Action">Dialogues in Action</option>
                      <option value="Monument Visits">Theatre-Based Monument Visits</option>
                      <option value="Teacher Training">Teacher Training Programs</option>
                      <option value="Consulting">Social Science Consulting</option>
                      <option value="Multiple">Multiple Programs</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block font-garamond text-lg mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-hd-orange"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="neo-brutalism-orange text-white py-3 px-6 w-full font-bold flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
