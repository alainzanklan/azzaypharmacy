'use client'

import Link from 'next/link'
import { FileText, Mail, Phone } from 'lucide-react'

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-20 pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-6">
                        <FileText className="w-16 h-16" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-center text-white/90">
                        Please read these terms carefully before using our services
                    </p>
                    <p className="text-center text-white/80 mt-4">
                        Last Updated: December 3, 2025
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                1. Agreement to Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing or using the services of Azzay Pharmacy Limited ("Azzay Pharmacy," "we," "our," or "us"),
                                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
                                please do not use our services. These Terms apply to all visitors, customers, and others who access
                                our pharmacy services at Twumasi Aben Street, Dormaa Ahenkro, Ghana, or through our digital channels.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                2. Our Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Azzay Pharmacy provides the following services:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Prescription dispensing and pharmaceutical care</li>
                                <li>Over-the-counter medication sales</li>
                                <li>Blood pressure (BP) monitoring</li>
                                <li>Rapid malaria testing</li>
                                <li>Blood glucose monitoring</li>
                                <li>Weight management consultations</li>
                                <li>Beauty and sundry products</li>
                                <li>Drug information and counseling services</li>
                            </ul>
                        </div>

                        {/* Use of Services */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                3. Use of Services
                            </h2>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                3.1 Eligibility
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                You must be at least 18 years old to purchase prescription medications. For certain services,
                                parental or guardian consent may be required for minors.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                3.2 Accurate Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                You agree to provide accurate, current, and complete information when using our services,
                                including prescription details, medical history, and contact information.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                3.3 Prohibited Uses
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Provide false or fraudulent prescriptions</li>
                                <li>Misrepresent your identity or medical condition</li>
                                <li>Use our services for any unlawful purpose</li>
                                <li>Attempt to obtain controlled substances without proper authorization</li>
                                <li>Share your prescription medications with others</li>
                            </ul>
                        </div>

                        {/* Prescriptions */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                4. Prescriptions and Medications
                            </h2>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                4.1 Valid Prescriptions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Prescription medications will only be dispensed with a valid prescription from a licensed
                                healthcare provider. We reserve the right to verify prescriptions and refuse to fill any
                                prescription we believe to be fraudulent or inappropriate.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                4.2 Professional Judgment
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our licensed pharmacists have the professional duty and right to refuse to fill any prescription
                                if they believe it may harm the patient or is not in accordance with standard pharmaceutical practice.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                4.3 Medication Counseling
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We provide medication counseling as part of our service. You are encouraged to ask questions
                                about your medications, and our pharmacists will provide guidance on proper use, storage, and
                                potential side effects.
                            </p>
                        </div>

                        {/* Payment and Pricing */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                5. Payment and Pricing
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Payment is due at the time services are rendered or products are purchased. We accept:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Cash</li>
                                <li>Mobile money (MTN, Vodafone, AirtelTigo)</li>
                                <li>Bank transfers</li>
                                <li>Health insurance (where applicable)</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Prices are subject to change without notice. We strive to maintain competitive and fair pricing
                                for all our products and services.
                            </p>
                        </div>

                        {/* Returns and Refunds */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                6. Returns and Refunds
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Due to the nature of pharmaceutical products and health regulations:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Prescription medications cannot be returned once dispensed</li>
                                <li>Over-the-counter products may be returned within 7 days if unopened and in original packaging</li>
                                <li>Defective products will be replaced or refunded upon verification</li>
                                <li>Beauty and sundry products follow the same return policy as over-the-counter items</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Please inspect your purchase before leaving the pharmacy. Contact us immediately if you believe
                                there is an error with your medication.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                While we take every precaution to ensure the quality and accuracy of our services, Azzay Pharmacy
                                shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                                resulting from your use of our services. Our liability is limited to the amount you paid for the
                                specific product or service in question.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                This limitation does not affect any liability that cannot be excluded or limited under applicable law.
                            </p>
                        </div>

                        {/* Professional Relationship */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                8. Professional Relationship
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                The services provided by Azzay Pharmacy do not create a doctor-patient relationship. Our
                                pharmacists provide pharmaceutical care and guidance, but we do not diagnose diseases or
                                prescribe medications. You should consult with a licensed physician for medical diagnosis
                                and treatment.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                9. Intellectual Property
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                All content on our website and marketing materials, including text, graphics, logos, and images,
                                is the property of Azzay Pharmacy Limited and is protected by copyright and trademark laws.
                                You may not use, reproduce, or distribute any content without our express written permission.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                10. Governing Law
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of the Republic of
                                Ghana. Any disputes arising from these Terms or your use of our services shall be subject to
                                the exclusive jurisdiction of the courts of Ghana.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                11. Changes to Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these Terms at any time. Changes will be effective immediately
                                upon posting on our website. Your continued use of our services after changes are posted
                                constitutes acceptance of the modified Terms.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                12. Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you have questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-primary-500 p-2 rounded-lg">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <a href="tel:+233546853264" className="text-primary-600 hover:text-primary-700">
                                            +233 54 685 3264
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-accent-500 p-2 rounded-lg">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <a href="mailto:azzaypharmacy@gmail.com" className="text-accent-600 hover:text-accent-700">
                                            azzaypharmacy@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                                    <p className="text-gray-600">
                                        Azzay Pharmacy Limited<br />
                                        Twumasi Aben Street<br />
                                        Dormaa Ahenkro, Ghana
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home Button */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}