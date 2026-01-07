"use client";

import { FormEvent, useState } from "react";

export default function ContactMe() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/iannellomarcos@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setShowSuccess(true);
                form.reset();
                setTimeout(() => setShowSuccess(false), 5000);
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="glass-card flex flex-col md:flex-row items-center justify-center w-full md:h-full max-h-full overflow-y-auto p-4 md:p-8 rounded-2xl relative gap-6 md:gap-10">
            {/* Toast Notification */}
            <div className={`absolute top-5 right-5 z-50 transition-all duration-500 transform ${showSuccess ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold uppercase tracking-widest px-6 py-3 rounded-xl shadow-[0_0_10px_rgba(16,185,129,0.2)] backdrop-blur-md flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Sent successfully!</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2 h-full justify-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 md:mb-4">Get in touch</h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    I'm constantly looking for new opportunities and challenges.
                    Structure your ideas and let's build something amazing together.
                    Feel free to reach out via email or just say hello!
                </p>

                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/20 transition-colors border border-white/5 group-hover:border-emerald-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <span className="text-base md:text-lg font-medium">Buenos Aires, Argentina</span>
                    </div>

                    <a href="mailto:iannellomarcos@gmail.com" className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/20 transition-colors border border-white/5 group-hover:border-emerald-500/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-base md:text-lg font-medium break-all">iannellomarcos@gmail.com</span>
                    </a>
                </div>
            </div>
            
            <div className="hidden md:block h-[70vh] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div className="block md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>
            
            <div className="flex items-center justify-center p-4 md:p-8 backdrop-blur-3xl bg-black/40 w-full md:w-1/2 rounded-2xl md:rounded-r-2xl border border-white/5 md:border-l-white/5 md:border-none">
                <form
                    className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full h-full"
                    onSubmit={handleSubmit}
                >
                    <input type="text" name="name" placeholder="Name" className="input-primary w-full" required />

                    <input type="email" name="email" placeholder="Email" className="input-primary w-full" required />

                    <textarea name="message" placeholder="Message" className="input-primary w-full min-h-[120px] resize-none" required></textarea>

                    <input type="hidden" name="_subject" value="New submission from Portfolio Contact Form!" />
                    <input type="hidden" name="_captcha" value="false" />

                    <button
                        className="w-full p-3 rounded-xl cursor-pointer bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold uppercase tracking-widest hover:bg-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:text-emerald-200 backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
}