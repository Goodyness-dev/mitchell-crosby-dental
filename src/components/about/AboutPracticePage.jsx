import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  FileText, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

const PATIENT_FORMS = [
  {
    title: 'Notice of Privacy Practices',
    description: 'Acknowledgement of receipt of privacy practices & HIPAA guidelines.',
    url: 'https://www.mitchellandcrosbydental.com/storage/app/media/acknowledgement-of-receipt-of-notice-of-privacy-practices.pdf',
    type: 'PDF Document'
  },
  {
    title: 'Use & Disclosure of Health Information',
    description: 'Consent for use and disclosure of personal healthcare records.',
    url: 'https://www.mitchellandcrosbydental.com/storage/app/media/consent-for-use-and-disclosure-of-health-information.pdf',
    type: 'PDF Document'
  },
  {
    title: 'Financial Policy',
    description: 'Patient payment responsibilities, billing terms, and insurance policies.',
    url: 'https://www.mitchellandcrosbydental.com/storage/app/media/financial-policy.pdf',
    type: 'PDF Document'
  },
  {
    title: 'Health History Form',
    description: 'Medical history, allergies, medications, and clinical background.',
    url: 'https://www.mitchellandcrosbydental.com/storage/app/media/health-history.pdf',
    type: 'PDF Document'
  },
  {
    title: 'Patient Registration Form',
    description: 'Official Dentrix new patient registration and contact details.',
    url: 'https://my.dentrix.com/0068195/storage/app/media/patient-registration-form.pdf',
    type: 'Dentrix Form'
  }
];

export default function AboutPracticePage({ onOpenWizard, onBackToHome }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black sana-grid-bg transition-colors pb-24">
      
      {/* Breadcrumb Header */}
      <div className="border-b border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/70 dark:bg-neutral-900/50 backdrop-blur-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400">
            <button 
              onClick={onBackToHome}
              className="hover:text-shop-red transition font-semibold flex items-center space-x-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-bold text-neutral-900 dark:text-white">About the Practice</span>
          </div>

          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center space-x-1.5 font-bold text-shop-red hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="max-w-4xl space-y-4">
          <span className="sana-tag">// ABOUT THE PRACTICE • CASA GRANDE, AZ</span>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
            Hometown Care, <br />
            <span className="text-stroke text-stroke-black">Trusted Generations.</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed pt-2">
            Mitchell & Crosby Family Dentistry is a dental clinic that provides compassionate care to the residents of Casa Grande Valley and Pinal County from our conveniently located clinic in Casa Grande, Arizona. Locally owned and operated since 1953, we have been a trusted source for reliable community dental care for decades.
          </p>
        </div>
      </section>

      {/* Main Narrative & Imagery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
            
            {/* Story Card 1: Rich Community History */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 shadow-xs">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-shop-red">
                <Users className="w-4 h-4" />
                <span>Deep Community Roots</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
                A Practice with a Rich Community History
              </h2>
              <p>
                Mitchell & Crosby Family Dentistry is a practice with a rich community history. The dentists and the staff all live in Casa Grande and many of them grew up there. As a true hometown dental office, patients frequently see their dentists and staff coaching local sports teams, shopping at local stores, participating in local events, and regularly giving back to the community.
              </p>
              <p>
                Living in the community that they serve enables them to be more integrated into their care and ultimately gives them an edge in better meeting the needs of their patients.
              </p>
            </div>

            {/* Story Card 2: Advanced Technology */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 shadow-xs">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-shop-red">
                <Sparkles className="w-4 h-4" />
                <span>Clinical Excellence</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
                Cutting-Edge Technology & Top Materials
              </h2>
              <p>
                Mitchell & Crosby Family Dentistry has a well-earned reputation for providing high-quality care with the most technologically advanced treatments, including <strong>CEREC® same-day crowns</strong>, cosmetic fillings with <strong>Omnichroma composite material</strong>, and <strong>implant restorations</strong>.
              </p>
              <p>
                Our state-of-the-art office is also equipped with <strong>diode lasers</strong> and <strong>digital X-rays</strong>, and we only use the highest quality materials and labs for our services.
              </p>
            </div>

            {/* Story Card 3: Patient-First Values */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 shadow-xs">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-shop-red">
                <Heart className="w-4 h-4" />
                <span>Patients First</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
                Putting Our Patients' Needs First
              </h2>
              <p>
                Mitchell & Crosby Family Dentistry believes in always putting its patients’ needs first. This means keeping our patients informed of conditions and treatments so that they can make decisions that are best suited to their unique needs, preferences, and budgets. We accept most insurance plans so that patients don’t have to worry about their wallet when making decisions about their smile.
              </p>
              <p className="font-medium text-neutral-900 dark:text-white">
                At Mitchell & Crosby Family Dentistry, dental care doesn’t have to be scary. Instead, it’s a visit with a neighbor in a fun and relaxed environment. Schedule a consultation today by calling the office or booking online.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenWizard()}
                  className="px-7 py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Schedule Your Consultation
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Photos, Providers & Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Storefront Image Card */}
            <div className="rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-md">
              <img 
                src="/images/storefront.jpg" 
                alt="Mitchell & Crosby Family Dentistry Casa Grande AZ"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 bg-neutral-50 dark:bg-neutral-900">
                <h3 className="font-editorial font-bold text-lg text-neutral-900 dark:text-white">
                  721 N Olive Ave, Casa Grande, AZ 85122
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Serving generations of Casa Grande, Coolidge, Eloy, Arizona City and Pinal County families since 1953.
                </p>
              </div>
            </div>

            {/* Doctors Cards */}
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                // YOUR DENTAL PROVIDERS
              </span>

              {/* Dr Mitchell */}
              <div className="flex items-center space-x-4 border-b border-neutral-800 pb-5">
                <img 
                  src="/images/dr-mitchell.jpg" 
                  alt="Dr. Jeffrey Mitchell DDS"
                  className="w-16 h-16 rounded-2xl object-cover border border-neutral-700 shrink-0"
                />
                <div>
                  <h4 className="font-editorial font-bold text-lg text-white">
                    Jeffrey Mitchell, DDS
                  </h4>
                  <p className="text-xs text-shop-red font-bold uppercase tracking-wider">
                    Lead Dentist & CEREC Specialist
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Univ. of Colorado • Casa Grande Native
                  </p>
                </div>
              </div>

              {/* Dr Crosby */}
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/dr-crosby.jpg" 
                  alt="Dr. David Crosby DMD"
                  className="w-16 h-16 rounded-2xl object-cover border border-neutral-700 shrink-0"
                />
                <div>
                  <h4 className="font-editorial font-bold text-lg text-white">
                    David Crosby, DMD
                  </h4>
                  <p className="text-xs text-shop-red font-bold uppercase tracking-wider">
                    Restorative & Cosmetic Dentist
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Midwestern Univ. • Se Habla Español
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours & Schedule */}
            <div className="p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial font-bold text-base sm:text-lg text-neutral-900 dark:text-white">
                  Regular Schedule
                </h3>
                <Clock className="w-4 h-4 text-shop-red" />
              </div>

              <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800 text-xs sm:text-sm">
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-neutral-600 dark:text-neutral-400">Monday:</span>
                  <span className="font-bold text-neutral-900 dark:text-white">8:00 AM – 5:00 PM</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-neutral-600 dark:text-neutral-400">Tuesday:</span>
                  <span className="font-bold text-neutral-900 dark:text-white">8:00 AM – 5:00 PM</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-neutral-600 dark:text-neutral-400">Wednesday:</span>
                  <span className="font-bold text-neutral-900 dark:text-white">8:00 AM – 5:00 PM</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-neutral-600 dark:text-neutral-400">Thursday:</span>
                  <span className="font-bold text-neutral-900 dark:text-white">8:00 AM – 5:00 PM</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-neutral-600 dark:text-neutral-400">Friday:</span>
                  <span className="font-bold text-shop-red">Every Other Friday</span>
                </div>
                <div className="py-2 flex justify-between text-neutral-400">
                  <span>Saturday – Sunday:</span>
                  <span>Closed (Emergency On-Call)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-shop-red" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Patient Forms Section (Exact Downloads requested by User) */}
      <section id="patient-forms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl p-8 sm:p-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
          
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="sana-tag">// DOWNLOADABLE FORMS</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white">
              Patient Forms & Registration
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Download, complete, and print your new patient documents ahead of your appointment to save time during your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PATIENT_FORMS.map((form, idx) => (
              <a
                key={idx}
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 hover:border-shop-red transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-shop-red group-hover:bg-shop-red group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {form.type}
                    </span>
                  </div>

                  <h3 className="font-editorial font-bold text-base text-neutral-900 dark:text-white group-hover:text-shop-red transition-colors mb-1.5">
                    {form.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {form.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs font-bold text-shop-red">
                  <span>Download Document</span>
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-neutral-950 text-white border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Ready to visit your hometown dental team?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg">
              Enjoy anxiety-free dental visits with Dr. Mitchell and Dr. Crosby. Call our Casa Grande office or request an appointment online.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenWizard()}
              className="px-8 py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Book Consultation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="px-6 py-3.5 rounded-full border border-neutral-700 hover:bg-neutral-900 font-bold text-xs uppercase tracking-wider transition"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
