
import { useInView } from "react-intersection-observer";
import { Theater, MessageSquare, MapPin, GraduationCap, School } from "lucide-react";

const ProgramsPage = () => {
  // Animation refs
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: theatreRef, inView: theatreInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: dialoguesRef, inView: dialoguesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: monumentsRef, inView: monumentsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: teacherRef, inView: teacherInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: consultingRef, inView: consultingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-hd-orange py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-trajan text-4xl md:text-5xl text-white mb-4">OUR PROGRAMS</h1>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>
      </div>
      
      {/* Introduction */}
      <section 
        ref={introRef}
        className={`py-16 container mx-auto px-4 ${
          introInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <p className="text-xl md:text-2xl font-garamond max-w-4xl mx-auto text-center">
          History Diaries offers a range of immersive programs that spark curiosity, deepen understanding, and make social sciences come alive.
        </p>
      </section>
      
      {/* Theatre Shows */}
      <section 
        ref={theatreRef} 
        className={`py-16 bg-gray-50 ${
          theatreInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-orange mr-4">
              <Theater size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">Curriculum-Based Theatre Shows</h2>
          </div>
          
          <p className="text-lg mb-10 max-w-3xl">
            Bringing history and social science syllabus topics to life through dynamic performances, aligned with CBSE and ICSE.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Show 1 */}
            <div className="neo-brutalism p-6">
              <h3 className="font-trajan text-xl mb-2">Threads of Time: The Story of Us</h3>
              <p className="text-gray-600 mb-4">Grades 6–7</p>
              <p>Journey through the milestones of human evolution with a time-traveling guide.</p>
            </div>
            
            {/* Show 2 */}
            <div className="neo-brutalism p-6">
              <h3 className="font-trajan text-xl mb-2">Flames of Change: The French Revolution Reimagined</h3>
              <p className="text-gray-600 mb-4">Grades 9, 11</p>
              <p>A gripping take on liberty, equality, and revolution—and their legacy.</p>
            </div>
            
            {/* Show 3 */}
            <div className="neo-brutalism p-6">
              <h3 className="font-trajan text-xl mb-2">Beyond the Headlines: Indian National Movement</h3>
              <p className="text-gray-600 mb-4">Grades 10, 12</p>
              <p>Spotlighting unsung heroes, forgotten places, and untold stories from India's freedom struggle.</p>
            </div>
            
            {/* Show 4 */}
            <div className="neo-brutalism p-6">
              <h3 className="font-trajan text-xl mb-2">Shadows and Legacy: Impact of British Rule</h3>
              <p className="text-gray-600 mb-4">Grade 8</p>
              <p>A nuanced look at how colonialism shaped India's present.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dialogues in Action */}
      <section 
        ref={dialoguesRef}
        className={`py-16 ${
          dialoguesInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-blue mr-4">
              <MessageSquare size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">Dialogues in Action</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg mb-6">
                An interactive, forum-theatre-based workshop for Grades 9–12 that empowers students to think critically and act confidently.
              </p>
              
              <div className="neo-brutalism-blue text-white p-6 mb-6">
                <h3 className="font-trajan text-xl mb-4">This Year's Theme:</h3>
                <p className="text-lg">
                  Breaking the Invisible Chains: A Journey Beyond Colonial Mindsets
                </p>
                <p className="mt-2">
                  Students step into the action, challenge inherited ideas, and reflect on their roles as changemakers.
                </p>
              </div>
            </div>
            
            <div className="neo-brutalism p-6">
              <h3 className="font-trajan text-xl mb-4">What Makes It Unique?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="bg-hd-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  <span>Interdisciplinary Thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-hd-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  <span>Real-World Relevance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-hd-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  <span>Contextual Awareness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-hd-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  <span>Active Citizenship</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-hd-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                  <span>Critical Thinking & Global Listening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monument Visits */}
      <section 
        ref={monumentsRef}
        className={`py-16 bg-gray-50 ${
          monumentsInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-purple mr-4">
              <MapPin size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">Theatre-Based Monument Visits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-trajan text-2xl mb-4">Program Name: Echoes of the Past</h3>
              <p className="text-lg mb-6">
                An immersive experience for Grade 8+, blending live storytelling and dramatization at the Qutub Complex.
              </p>
              <p>
                Students explore monuments, engage with history firsthand, and reflect on its relevance today.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                alt="Qutub Complex" 
                className="w-full h-auto neo-brutalism-purple p-1"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Teacher Training */}
      <section 
        ref={teacherRef}
        className={`py-16 ${
          teacherInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-teal mr-4">
              <GraduationCap size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">Teacher Training Programs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Part 1 */}
            <div className="neo-brutalism-teal text-white p-6">
              <h3 className="font-trajan text-xl mb-2">Part 1: Bringing Lessons to Life</h3>
              <p className="mb-4">
                Using drama and theatre to make social sciences vibrant and engaging.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rediscover the immense potential of social sciences</li>
                <li>Learn innovative drama techniques for interactive lessons</li>
                <li>Design engaging lesson plans using theatrical elements</li>
              </ul>
            </div>
            
            {/* Part 2 */}
            <div className="neo-brutalism-teal text-white p-6">
              <h3 className="font-trajan text-xl mb-2">Part 2: Teaching with GenAI</h3>
              <p className="mb-4">
                Empowering educators with tools like ChatGPT, Canva AI, and NotebookLM to create interactive learning experiences.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hands-on experience with cutting-edge AI tools</li>
                <li>Create dynamic lesson plans and visual aids</li>
                <li>Make classrooms interactive and student-focused</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Science Consulting */}
      <section 
        ref={consultingRef}
        className={`py-16 bg-black text-white ${
          consultingInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="text-hd-orange mr-4">
              <School size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-trajan">Social Science Consulting for Schools</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="neo-brutalism-orange text-white p-8">
              <h3 className="font-trajan text-2xl mb-6 text-center">Program Name: Shaping Tomorrow</h3>
              <p className="text-lg mb-6">
                We partner with schools to design curriculum, deliver teacher training, and build student programs that make social sciences relevant, critical, and experiential.
              </p>
              <p className="font-garamond text-xl">
                From designing dynamic curriculums to delivering customized training for teachers, we specialize in creating programs that sit at the intersection of theatre, art, and social sciences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
