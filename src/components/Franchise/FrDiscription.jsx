import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FrDiscription() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Green */}
      <div className="flex-1 bg-emerald-400 p-8 lg:p-16 flex flex-col justify-center items-end">
        <div className="max-w-2xl">
          <p data-aos="fade-up" className="text-black text-sm mb-4 font-medium">Recognized World Wide</p>

          <h1 data-aos="fade-up" className="text-black text-4xl lg:text-5xl font-bold mb-8 leading-tight">Get Certified With Us</h1>

          <div className="text-black text-base lg:text-lg leading-relaxed space-y-4">
            <p data-aos="fade-up">
            TSSR COUNCIL has emerged to be one of the fastest growing education franchise organisation in India with its Registered Office at New Delhi and Central Administrative Office located in the South Western tip of India, Calicut, is the city of the Indian State of Kerala, Today we have got very extensive and wide network and a leading Global Talent Development Organization with more than 1000+ Authorised Training Centres, spread all over Kerala and around in 22+ States and other parts of India & abroad, which is certified, approved, recognised & licensed under the Act of Central Govt of India. TSSR COUNCIL invites interested entrepreneurs/institutions/training centres to join hands with Indias No.1 Leading & Largest Certification Body in this unique mission and help to create a digitally enabled nation.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Dark */}
      <div className="flex-1 bg-gray-900 p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="text-white text-base lg:text-lg leading-relaxed mb-8">
            <p data-aos="fade-up">
              TSSR COUNCIL constituted to conduct/impart examination & certification in any part of the country of all
              kinds of job oriented courses with standardized syllabus designed and approved by TSSR COUNCIL authority
              for providing quality education and training all over India. Legality, Validity, Utility of the course is
              strict conformity with the constitution of India and law of the land under Central Government Act Article
              19(1)c, 29 & 30. Our working area & territorial jurisdiction of the organization extends to whole of
              India.
            </p>
          </div>

          <Button data-aos="fade-up" className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold px-8 py-3 rounded-md flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Franchise
          </Button>
        </div>
      </div>
    </div>
  )
}
