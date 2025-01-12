"use client";

import React from "react";
import { motion } from "motion/react";
// import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageSrc,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Card className="bg-black border-zinc-800">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="pt-6">
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </CardHeader>
      <CardContent className="text-gray-400">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="text-white hover:text-white hover:bg-zinc-800 p-3">
          Book Today
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const Features3 = () => {
  const resources = [
    {
      title: "Experienced Instructors",
      description:
        "Our instructors are certified by ICBC and the Canadian Government",
      imageSrc:
        "https://res.cloudinary.com/dy8zpplau/image/upload/f_auto,q_auto/pexels-pripicart-620335_1_g7jjds",
    },
    {
      title: "Wide Coverage",
      description: "We offer our services in Vancouver, Richmond and Burnaby",
      imageSrc:
        "https://res.cloudinary.com/dy8zpplau/image/upload/f_auto,q_auto/pexels-bylukemiller-29382005_kfbeck",
    },
    {
      title: "Lessons for all levels",
      description:
        "We provide driving lessons and knowledge test practice materials for Class 4,5 & 7",
      imageSrc:
        "https://res.cloudinary.com/dy8zpplau/image/upload/pexels-elina-sazonova-2705755_rdlcpk",
    },
  ];

  return (
    <section className="bg-black text-white py-8 p-14 pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              {" "}
              {/* Added sticky positioning */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-gray-400 mt-6">
                  We offer top-notch driving instruction with a focus on safety,
                  experience, and personalized learning.
                  <br />
                  We will help you every step along the way
                </p>
              </motion.div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="flex flex-col gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3;
