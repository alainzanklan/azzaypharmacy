'use client'

import Link from 'next/link'
import { Shield, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-20 pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-6">
                        <Shield className="w-16 h-16" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-center text-white/90">
                        Your privacy is important to us at Azzay Pharmacy
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
                                1. Introduction
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Azzay Pharmacy Limited ("we," "our," or "us") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you visit our pharmacy location at Twumasi Aben Street, Dormaa Ahenkro, Ghana, use our
                                services, or interact with us through our website and social media channels.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                2. Information We Collect
                            </h2>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.1 Personal Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may collect personal information that you provide to us, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Name and contact information (phone number, email address, physical address)</li>
                                <li>Date of birth and age</li>
                                <li>National ID or health insurance information</li>
                                <li>Prescription and medication history</li>
                                <li>Payment and billing information</li>
                                <li>Medical conditions and allergies (as relevant to pharmaceutical services)</li>
                            </ul>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.2 Health Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                When you use our services such as BP checks, blood glucose monitoring, rapid malaria tests,
                                or weight management consultations, we collect health-related information necessary to provide
                                these services safely and effectively.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.3 Automatically Collected Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                When you visit our website, we may automatically collect certain information about your device,
                                including information about your web browser, IP address, time zone, and some of the cookies
                                installed on your device.
                            </p>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Provide pharmaceutical services and dispense medications</li>
                                <li>Process and fulfill your prescriptions</li>
                                <li>Conduct health screenings and provide consultation services</li>
                                <li>Maintain accurate medication records for your safety</li>
                                <li>Communicate with you about your prescriptions and health services</li>
                                <li>Process payments and maintain billing records</li>
                                <li>Send you health tips, wellness information, and promotional offers (with your consent)</li>
                                <li>Comply with legal and regulatory requirements</li>
                                <li>Improve our services and customer experience</li>
                            </ul>
                        </div>

                        {/* Information Sharing */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                4. Information Sharing and Disclosure
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Healthcare Providers:</strong> With your physicians and healthcare providers to coordinate your care</li>
                                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                                <li><strong>Health Insurance:</strong> With your insurance provider for claims processing (with your authorization)</li>
                                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                                <li><strong>Emergency Situations:</strong> When necessary to protect your vital interests or public health</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                We do not sell your personal or health information to third parties.
                            </p>
                        </div>

                        {/* Data Security */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal and
                                health information against unauthorized access, alteration, disclosure, or destruction. These
                                measures include secure storage systems, access controls, and staff training on privacy and
                                confidentiality requirements.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                6. Your Rights
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Access your personal and health information we hold</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information (subject to legal and regulatory requirements)</li>
                                <li>Withdraw consent for marketing communications</li>
                                <li>Request a copy of your prescription records</li>
                                <li>Lodge a complaint with the Ghana Data Protection Commission</li>
                            </ul>
                        </div>

                        {/* Retention */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                7. Data Retention
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We retain your information for as long as necessary to provide our services and comply with
                                legal obligations. Prescription records are maintained in accordance with pharmaceutical
                                regulations in Ghana, typically for a minimum of 5 years.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                8. Children's Privacy
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                When providing services to minors, we obtain consent from parents or legal guardians as
                                required by law. We protect children's information with the same level of care as adult information.
                            </p>
                        </div>

                        {/* Changes to Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                9. Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on our website and updating the "Last Updated" date.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                10. Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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