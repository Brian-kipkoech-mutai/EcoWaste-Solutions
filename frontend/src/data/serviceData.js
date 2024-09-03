//recycle service images

import picukpBg from "../assets/logos/pexels-shvetsa-5029859.jpg";
import picukpService1 from "../assets/logos/pexels-thirdman-7656742.jpg";
import picukpService2 from "../assets/logos/pexels-shvetsa-5218011.jpg";

//Recycle service images
import recycleBg from "../assets/logos/pexels-readymade-3850512.jpg";
import recycleService1 from "../assets/logos/pexels-polina-tankilevitch-3735218.jpg";
import recycleService2 from "../assets/logos/pexels-polina-tankilevitch-3738386.jpg";

//wastesCollectionServices images

import wasteCollectionBg from "../assets/logos/pexels-tomfisk-3181031.jpg";
import wasteCollectionService1 from "../assets/logos/pexels-nguy-n-thanh-ng-c-485749-4015422.jpg";
import wasteCollectionService2 from "../assets/logos/pexels-planka-27607952 (1).jpg";

export const serviceData = {
  PickupService: {
    images: {
      bgImage: picukpBg,
      serviceImages: [picukpService1, picukpService2],
    },
    header: {
      title: "Reliable Garbage Pickup Services",
    },
    mainContent: {
      title: "Garbage Pickup",
      description:
        "At EcoWaste Solutions, we know how important it is to maintain a clean environment, whether at home, in the office, or across your business operations. Our garbage pickup services are designed to be reliable, efficient, and tailored to meet your specific needs. With our professional team, you can rest assured that your garbage will be handled properly and disposed of responsibly.",
    },
    services: [
      {
        title: "Eco-Friendly Practices",
        description:
          "We are committed to sustainability, ensuring that waste is disposed of in an environmentally responsible manner. Our processes prioritize recycling and reducing landfill impact.",
      },
      {
        title: "Reliable & Timely Service",
        description:
          "We value your time. Our team is dedicated to providing timely and dependable waste collection services that fit your schedule and minimize disruption to your daily activities.",
      },
    ],
    benefits: {
      title: "Benefits of Service",
      description:
        "Choosing EcoWaste Solutions for your garbage pickup needs comes with a range of benefits that go beyond just keeping your surroundings clean. Here's why our service stands out:",
      list: [
        "Reliable Scheduling",
        "Eco-Friendly Disposal",
        "Affordable Rates",
        "Customer Support",
      ],
    },
    solutions: {
      title: "Our Solutions",
      description:
        "Our commitment to the environment extends to our recycling and waste diversion services. We work with you to identify recyclable materials and ensure they are processed correctly, reducing the amount of waste sent to landfills.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What days do you offer garbage pickup?",
          answer:
            "Our garbage pickup services are available Monday through Friday. We offer flexible scheduling to accommodate your needs.",
        },
        {
          question: "What materials can I include in the garbage pickup?",
          answer:
            "You can include general household waste, but please avoid hazardous materials like chemicals or batteries. For a complete list of accepted items, please refer to our guidelines.",
        },
        {
          question: "How can I ensure my garbage is picked up on time?",
          answer:
            "To ensure timely pickup, please place your garbage bins at the curb by 7:00 AM on your scheduled pickup day. Make sure the bins are not blocked by cars or other obstacles.",
        },
        {
          question:
            "Do you provide recycling services along with garbage pickup?",
          answer:
            "Yes, we offer recycling services. You can include recyclables in a separate bin labeled clearly. Our team will handle them according to the best environmental practices.",
        },
        {
          question: "What happens if I miss my scheduled pickup?",
          answer:
            "If you miss your scheduled pickup, please contact our customer service team to arrange a special pickup or to reschedule for the next available day.",
        },
        {
          question: "Are there any additional fees for large items?",
          answer:
            "Yes, large items like furniture or appliances may incur an additional fee. Please contact us in advance to arrange pickup and receive a quote.",
        },
      ],
    },
  },
  RecyclingServices: {
    images: {
      bgImage: recycleBg,
      serviceImages: [recycleService1, recycleService2],
    },
    header: {
      title: "Comprehensive Recycling Services",
    },
    mainContent: {
      title: "Recycling Services",
      description:
        "EcoWaste Solutions offers comprehensive recycling services designed to help you reduce waste, conserve resources, and contribute to a more sustainable environment. Our team is dedicated to ensuring that recyclable materials are properly sorted and processed, reducing the impact on our planet.",
    },
    services: [
      {
        title: "Paper and Cardboard Recycling",
        description:
          "We handle the recycling of paper and cardboard materials, ensuring they are repurposed and reused efficiently. Our service includes regular pickups and on-site bins for easy disposal.",
      },
      {
        title: "Plastic and Metal Recycling",
        description:
          "Our recycling services extend to various types of plastics and metals. We work to separate, clean, and process these materials to maximize their reuse potential.",
      },
    ],
    benefits: {
      title: "Why Choose Our Recycling Services?",
      description:
        "Our recycling services offer numerous benefits that help you make a positive impact on the environment while simplifying waste management:",
      list: [
        "Convenient Collection Schedules",
        "Environmentally Responsible Disposal",
        "Cost-Effective Solutions",
        "Customized Recycling Plans",
      ],
    },
    solutions: {
      title: "Our Recycling Solutions",
      description:
        "We provide specialized recycling solutions tailored to your needs. Whether you're a business or a household, we ensure that your recyclables are handled efficiently and responsibly.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What materials can be recycled?",
          answer:
            "We accept a wide range of materials, including paper, cardboard, plastics, metals, and glass. For specific guidelines, please refer to our recycling policy.",
        },
        {
          question: "How often is recycling collected?",
          answer:
            "Recycling collection is available on a weekly or bi-weekly basis, depending on your location and needs. You can choose the schedule that works best for you.",
        },
        {
          question: "Do you provide recycling bins?",
          answer:
            "Yes, we provide recycling bins of various sizes to accommodate your needs. Bins are available for both residential and commercial customers.",
        },
        {
          question: "What should I do if my bin is full before pickup day?",
          answer:
            "If your recycling bin is full before the scheduled pickup, you can request an additional pickup or an extra bin by contacting our customer service team.",
        },
        {
          question: "Are there any items that cannot be recycled?",
          answer:
            "Certain items, such as hazardous materials, electronics, and food waste, cannot be recycled through our standard services. Please consult our guidelines for a full list of non-recyclable items.",
        },
        {
          question: "How do you ensure the materials are recycled properly?",
          answer:
            "We partner with certified recycling facilities that adhere to strict environmental standards. All materials are sorted, cleaned, and processed to ensure they are recycled efficiently.",
        },
      ],
    },
  },
  WasteCollection: {
    images: {
      bgImage: wasteCollectionBg,
      serviceImages: [
        wasteCollectionService1,
        wasteCollectionService2,
      ],
    },
    header: {
      title: "Efficient Waste Collection Services",
    },
    mainContent: {
      title: "Waste Collection",
      description:
        "EcoWaste Solutions provides reliable and efficient waste collection services to keep your surroundings clean and sanitary. Our team is committed to offering tailored solutions that meet the waste disposal needs of both residential and commercial customers.",
    },
    services: [
      {
        title: "Residential Waste Collection",
        description:
          "We offer regular waste collection services for households, ensuring that all your waste is disposed of properly and on time. Our services include flexible scheduling and multiple bin options.",
      },
      {
        title: "Commercial Waste Collection",
        description:
          "For businesses, we provide customized waste collection services that fit your operations. From small offices to large industrial sites, we handle all types of commercial waste efficiently.",
      },
    ],
    benefits: {
      title: "Why Our Waste Collection Stands Out",
      description:
        "Choosing EcoWaste Solutions for waste collection comes with several advantages that ensure your waste is managed responsibly and effectively:",
      list: [
        "Reliable Collection Schedules",
        "Wide Range of Waste Services",
        "Competitive Pricing",
        "Dedicated Customer Support",
      ],
    },
    solutions: {
      title: "Tailored Waste Collection Solutions",
      description:
        "Our waste collection services are designed to be flexible and adaptable. We work with you to develop a waste management plan that meets your specific needs, whether you're managing household waste or industrial refuse.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What types of waste do you collect?",
          answer:
            "We collect a wide range of waste types, including household waste, commercial waste, and bulky items. Hazardous waste requires special arrangements.",
        },
        {
          question: "How often can I schedule waste collection?",
          answer:
            "We offer daily, weekly, and bi-weekly waste collection services. You can choose a schedule that best fits your needs.",
        },
        {
          question: "Do you provide waste bins?",
          answer:
            "Yes, we offer a variety of waste bins for different types of waste. These include general waste bins, recycling bins, and specialized bins for bulky items.",
        },
        {
          question: "What should I do if I need an extra pickup?",
          answer:
            "If you require an additional pickup, simply contact our customer service team to arrange a convenient time. Extra pickups may incur an additional fee.",
        },
        {
          question: "Can you handle large or bulky items?",
          answer:
            "Yes, we offer specialized services for large or bulky items such as furniture and appliances. Please contact us in advance to arrange for the pickup of these items.",
        },
        {
          question:
            "What steps do you take to ensure responsible waste disposal?",
          answer:
            "We follow strict environmental guidelines to ensure that waste is disposed of responsibly. We prioritize recycling and other eco-friendly practices to minimize landfill use.",
        },
      ],
    },
  },
};
