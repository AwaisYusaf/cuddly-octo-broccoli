"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";

type Props = {};
type FormType = {
  name: string;
  email: string;
};

function downloadFile() {
  const link = document.createElement('a');
  link.href = '/assets/ebook.pdf';
  link.download = 'ebook.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove();

}



function InputModal() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormType>();
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submitForm(data: FormType) {
    setSubmitting(true);
    //Send data to server/ email
    const res = await fetch("/api/submit-ebook-form", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const { status } = await res.json();
    if (status === "success") {
      setFormSubmitted(true);
      downloadFile();
    }
    setSubmitting(false);
  }

  return (
    <Dialog>
      <DialogTrigger className="self-start bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold mx-auto">
        Get Ebook
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Life Coaching With A Twist Ebook</DialogTitle>
          {isFormSubmitted ? (
            <DialogDescription>
              <p className="py-5">Thank you for your interest in my ebook. If your download is not started automatically, <a href="/assets/ebook.pdf" download className="text-purple-600">
                Click here
              </a> to start downloading your Ebook</p>
            </DialogDescription>
          ) : (
            <form onSubmit={handleSubmit(submitForm)}>
              <DialogDescription className="flex flex-col space-y-6 pt-8">
                <div className="flex flex-col space-y-2">
                  <p>Name</p>
                  <Input {...register("name", { required: true })} />
                  {errors.name && (
                    <span className="text-red-500 text-xs">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <p>Email</p>
                  <Input {...register("email", { required: true })} />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      Email is required
                    </span>
                  )}
                </div>
                {submitting ?
                  <button disabled type="button"
                    className="ml-auto bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold"
                  >
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    Downloading...
                  </button> : <button
                    type="submit"
                    className="ml-auto bg-[#9794C9] rounded uppercase px-8 py-2 text-white font-semibold"
                  >
                    Download
                  </button>

                }
              </DialogDescription>
            </form>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function SectionThree({ }: Props) {
  return (
    <div className="flex flex-col space-y-5 items-center py-12 lg:py-20 px-6 overflow-x-hidden">
      <motion.div
        initial={{ scale: 0.1, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/book-cover.png"
          className="rounded-md lg:h-[80vh] md:h-[70vh] h-[60vh] w-fit"
          width={800}
          height={1200}
          alt=""
        />
      </motion.div>

      <InputModal />
    </div>
  );
}
