
import { useInView } from "react-intersection-observer";
import { Book, Globe, BarChart, HeartHandshake, CheckCircle } from "lucide-react";

const AboutPage = () => {
  // Animation refs
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-hd-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-trajan text-4xl md:text-5xl text-white mb-4">ABOUT US</h1>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Our Story */}
      <section 
        ref={storyRef}
        className={`py-16 ${
          storyInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-blue mr-4">
              <Book size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">OUR STORY</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                History Diaries began in 2017, sparked by a simple conversation with an 8th-grade student who found history boring—unless it was in a movie. That moment revealed a gap in how history was taught. We asked: Can we make history experiential, personal, and exciting?
              </p>
              <p className="text-lg">
                Since then, we've been on a mission to transform social science education through theatre, storytelling, and hands-on learning. We believe history is not just about the past, but about understanding the present and shaping the future.
              </p>
            </div>
            <div className="neo-brutalism rotate-1 p-1">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="History Diaries team during a workshop"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why History Diaries */}
      <section 
        ref={whyRef}
        className={`py-16 bg-gray-50 ${
          whyInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-orange mr-4">
              <Globe size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">WHY "HISTORY DIARIES"?</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="neo-brutalism-orange text-white p-8 -rotate-1">
              <p className="text-lg font-garamond">
                History is deeply connected with economics, politics, geography, and culture. At History Diaries, we treat these subjects as interwoven stories—relevant to our daily lives. The "diary" in our name reflects the personal journey each student takes through these narratives.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 neo-brutalism flex flex-col items-center text-center">
                <div className="text-hd-orange mb-4">
                  <BarChart size={36} />
                </div>
                <h3 className="font-garamond text-xl mb-2">Economics</h3>
                <p>Understanding how resources and wealth shape societies</p>
              </div>
              
              <div className="p-6 neo-brutalism flex flex-col items-center text-center">
                <div className="text-hd-blue mb-4">
                  <Globe size={36} />
                </div>
                <h3 className="font-garamond text-xl mb-2">Geography</h3>
                <p>Exploring how space and place impact human experiences</p>
              </div>
              
              <div className="p-6 neo-brutalism flex flex-col items-center text-center">
                <div className="text-hd-purple mb-4">
                  <HeartHandshake size={36} />
                </div>
                <h3 className="font-garamond text-xl mb-2">Culture</h3>
                <p>Celebrating the diversity of human expression and belief</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section 
        ref={visionRef}
        className={`py-16 ${
          visionInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 neo-brutalism-purple text-white">
              <h2 className="text-3xl font-trajan mb-6">OUR VISION</h2>
              <p className="text-xl font-garamond">
                To create a generation of compassionate, critical thinkers who connect the past to their present and shape a better future.
              </p>
            </div>
            
            {/* Mission */}
            <div className="p-8 neo-brutalism-blue text-white">
              <h2 className="text-3xl font-trajan mb-6">OUR MISSION</h2>
              <p className="text-xl font-garamond">
                To make social science education experiential, interactive, and meaningful through theatre, storytelling, and hands-on learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section 
        ref={whyChooseRef}
        className={`py-16 bg-gray-50 ${
          whyChooseInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-trajan text-center mb-12">WHY CHOOSE US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 neo-brutalism-teal text-white">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="mr-2" />
                <h3 className="font-garamond text-xl">Innovative Approach</h3>
              </div>
              <p>Unique use of theatre and GenAI in education</p>
            </div>
            
            <div className="p-6 neo-brutalism-teal text-white">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="mr-2" />
                <h3 className="font-garamond text-xl">Curriculum Alignment</h3>
              </div>
              <p>Seamless alignment with CBSE and ICSE</p>
            </div>
            
            <div className="p-6 neo-brutalism-teal text-white">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="mr-2" />
                <h3 className="font-garamond text-xl">Proven Success</h3>
              </div>
              <p>Demonstrated results across leading schools in Delhi NCR</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-garamond text-center mb-6">Skills We Cultivate in Students:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 neo-brutalism flex flex-col items-center text-center">
                <h4 className="font-garamond text-lg font-semibold mb-2">Critical and Creative Thinking</h4>
                <p className="text-sm">Analyzing information and finding innovative solutions</p>
              </div>
              
              <div className="p-4 neo-brutalism flex flex-col items-center text-center">
                <h4 className="font-garamond text-lg font-semibold mb-2">Compassion and Adaptability</h4>
                <p className="text-sm">Developing empathy and flexibility in a changing world</p>
              </div>
              
              <div className="p-4 neo-brutalism flex flex-col items-center text-center">
                <h4 className="font-garamond text-lg font-semibold mb-2">Historical and Social Awareness</h4>
                <p className="text-sm">Understanding contexts that shape our world</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
