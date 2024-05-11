/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

export const popularSerices = [
    {
      "imgURL": "https://i.postimg.cc/6pF8pKm7/image.png",
      "serviceName": "General Checkup",
      "price": "$50",
      "serviceArea": "Primary Care",
      "description": "A routine checkup to monitor overall health and detect any potential issues early.",
      "providerName": "MediCare Clinic",
      "providerImage": "https://i.postimg.cc/6pF8pKm7/image.png",
      "id": "1"
    },
    {
      "imgURL": "https://example.com/service2.jpg",
      "serviceName": "Dental Cleaning",
      "price": "$80",
      "serviceArea": "Dentistry",
      "description": "Professional cleaning to remove plaque and tartar buildup, promoting oral health.",
      "providerName": "SmileBright Dentistry",
      "providerImage": "https://example.com/provider2.jpg",
      "id": "2"
    },
    {
      "imgURL": "https://example.com/service3.jpg",
      "serviceName": "Eye Examination",
      "price": "$60",
      "serviceArea": "Ophthalmology",
      "description": "Comprehensive eye exam to assess vision and screen for eye diseases.",
      "providerName": "VisionCare Clinic",
      "providerImage": "https://example.com/provider3.jpg",
      "id": "3"
    },
    {
      "imgURL": "https://example.com/service4.jpg",
      "serviceName": "Vaccination",
      "price": "$30",
      "serviceArea": "Immunization",
      "description": "Administration of vaccines to prevent various infectious diseases.",
      "providerName": "ImmuProtect Clinic",
      "providerImage": "https://example.com/provider4.jpg",
      "id": "4"
    },
    {
      "imgURL": "https://example.com/service5.jpg",
      "serviceName": "Physical Therapy",
      "price": "$100",
      "serviceArea": "Rehabilitation",
      "description": "Therapeutic exercises and interventions to improve mobility and function.",
      "providerName": "MotionWorks Rehab Center",
      "providerImage": "https://example.com/provider5.jpg",
      "id": "5"
    },
    {
      "imgURL": "https://example.com/service6.jpg",
      "serviceName": "Blood Test",
      "price": "$40",
      "serviceArea": "Laboratory Services",
      "description": "Analysis of blood samples to diagnose various medical conditions.",
      "providerName": "LabMed Diagnostics",
      "providerImage": "https://example.com/provider6.jpg",
      "id": "6"
    },
    {
      "imgURL": "https://example.com/service7.jpg",
      "serviceName": "X-Ray",
      "price": "$70",
      "serviceArea": "Radiology",
      "description": "Imaging technique used to visualize internal structures of the body.",
      "providerName": "Radiant Imaging Center",
      "providerImage": "https://example.com/provider7.jpg",
      "id": "7"
    },
    {
      "imgURL": "https://example.com/service8.jpg",
      "serviceName": "Counseling",
      "price": "$90",
      "serviceArea": "Mental Health",
      "description": "Therapeutic sessions with a trained counselor to address mental health concerns.",
      "providerName": "Mindful Therapy Clinic",
      "providerImage": "https://example.com/provider8.jpg",
      "id": "8"
    },
    {
      "imgURL": "https://example.com/service9.jpg",
      "serviceName": "Emergency Care",
      "price": "$200",
      "serviceArea": "Emergency Medicine",
      "description": "Immediate medical treatment for severe injuries or life-threatening conditions.",
      "providerName": "UrgentCare Hospital",
      "providerImage": "https://example.com/provider9.jpg",
      "id": "9"
    },
    {
      "imgURL": "https://example.com/service10.jpg",
      "serviceName": "Prenatal Care",
      "price": "$120",
      "serviceArea": "Obstetrics",
      "description": "Medical care provided during pregnancy to monitor maternal and fetal health.",
      "providerName": "Maternity Health Center",
      "providerImage": "https://example.com/provider10.jpg",
      "id": "10"
    }
  ]
;  

const PopularServices = () => {
  return (
    <div className=" bg-blue-100/10 dark:bg-transparent py-10">
      <div className="max-w-[1170px] mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-center dark:text-white">
            <span>Medi</span>
            <span className="text-dark_button">Care</span> Popular Services
          </h2>
          <p className="text-center py-4 text-black/80 text-lg dark:text-white/60">
            Medicare's popular services offer comprehensive coverage and access
            to top healthcare providers, <br />
            emphasizing preventive care and flexibility in plan options,
            ensuring peace of mind and optimal well-being for individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {popularSerices &&
            popularSerices.slice(0,6).map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })}
        </div>

        <div className="text-center py-10">
        <Link  to={'/services'} ><button className="bg-dark_bg dark:bg-dark_button text-white p-3 my-2 rounded-lg hover:brightness-110">See All Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
