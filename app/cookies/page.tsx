'use client'

import Link from 'next/link'
import { Cookie, Mail, Phone } from 'lucide-react'

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-500 to-accent-500 text-white py-20 pt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-6">
                        <Cookie className="w-16 h-16" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-xl text-center text-white/90">
                        How we use cookies and similar technologies
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
                                1. What Are Cookies?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Cookies are small text files that are placed on your computer or mobile device when you visit
                                a website. They are widely used to make websites work more efficiently and provide information
                                to website owners. This Cookie Policy explains how Azzay Pharmacy Limited ("we," "our," or "us")
                                uses cookies and similar technologies on our website.
                            </p>
                        </div>

                        {/* Types of Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                2. Types of Cookies We Use
                            </h2>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.1 Essential Cookies
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                These cookies are necessary for the website to function properly. They enable basic functions
                                like page navigation, access to secure areas, and remember information you enter in forms.
                                Without these cookies, the website cannot function properly.
                            </p>
                            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-4">
                                <p className="text-gray-700 font-medium">Examples:</p>
                                <ul className="list-disc pl-6 text-gray-600 mt-2">
                                    <li>Session cookies for maintaining your session</li>
                                    <li>Security cookies for authentication</li>
                                    <li>Load balancing cookies</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.2 Performance Cookies
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                These cookies collect information about how visitors use our website, such as which pages are
                                visited most often and if users receive error messages. This helps us improve how our website works.
                            </p>
                            <div className="bg-accent-50 border-l-4 border-accent-500 p-4 my-4">
                                <p className="text-gray-700 font-medium">Examples:</p>
                                <ul className="list-disc pl-6 text-gray-600 mt-2">
                                    <li>Google Analytics cookies</li>
                                    <li>Page load time tracking</li>
                                    <li>Error reporting</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.3 Functionality Cookies
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                These cookies allow the website to remember choices you make (such as your language preference)
                                and provide enhanced, more personalized features.
                            </p>
                            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 my-4">
                                <p className="text-gray-700 font-medium">Examples:</p>
                                <ul className="list-disc pl-6 text-gray-600 mt-2">
                                    <li>Language preferences</li>
                                    <li>Font size settings</li>
                                    <li>Region/location settings</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                2.4 Marketing/Targeting Cookies
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                These cookies are used to deliver advertisements more relevant to you and your interests.
                                They may also be used to limit the number of times you see an advertisement and measure the
                                effectiveness of advertising campaigns.
                            </p>
                            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
                                <p className="text-gray-700 font-medium">Examples:</p>
                                <ul className="list-disc pl-6 text-gray-600 mt-2">
                                    <li>Social media cookies (Facebook, Instagram, TikTok)</li>
                                    <li>Advertising network cookies</li>
                                    <li>Retargeting cookies</li>
                                </ul>
                            </div>
                        </div>

                        {/* Third-Party Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                3. Third-Party Cookies
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may use third-party services that set cookies on your device. These include:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Google Analytics:</strong> To understand how visitors interact with our website</li>
                                <li><strong>Social Media Platforms:</strong> Facebook, Instagram, TikTok, YouTube for social sharing and advertising</li>
                                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                These third parties have their own privacy policies and cookie policies. We recommend reviewing
                                their policies to understand how they use your information.
                            </p>
                        </div>

                        {/* How We Use Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                4. How We Use Cookies
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use cookies to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Ensure our website functions correctly and securely</li>
                                <li>Remember your preferences and settings</li>
                                <li>Analyze website traffic and user behavior</li>
                                <li>Improve our website's performance and user experience</li>
                                <li>Deliver relevant content and advertisements</li>
                                <li>Track the effectiveness of our marketing campaigns</li>
                                <li>Prevent fraud and enhance security</li>
                            </ul>
                        </div>

                        {/* Managing Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                5. How to Manage Cookies
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                                preferences through:
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                5.1 Browser Settings
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Most web browsers automatically accept cookies, but you can modify your browser settings to
                                decline cookies if you prefer. Here's how to manage cookies in popular browsers:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                            </ul>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
                                5.2 Opt-Out Tools
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                You can opt out of specific third-party cookies:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                                <li><strong>Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                                <li><strong>Social Media:</strong> Adjust your ad preferences in your social media account settings</li>
                            </ul>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                <p className="text-gray-700 font-semibold mb-2">⚠️ Important Note:</p>
                                <p className="text-gray-600">
                                    If you disable or refuse cookies, some parts of our website may become inaccessible or not
                                    function properly. Essential cookies cannot be disabled as they are necessary for the website
                                    to work.
                                </p>
                            </div>
                        </div>

                        {/* Mobile Devices */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                6. Mobile Devices
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you access our website through a mobile device, you can manage cookies through your device
                                settings. The process varies depending on your device manufacturer and operating system. Please
                                refer to your device's help documentation for specific instructions.
                            </p>
                        </div>

                        {/* Do Not Track */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                7. Do Not Track Signals
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that
                                you do not want to have your online activity tracked. Currently, there is no uniform standard
                                for recognizing and implementing DNT signals. We do not currently respond to DNT signals.
                            </p>
                        </div>

                        {/* Changes to Cookie Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                8. Changes to This Cookie Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
                                or our business practices. We will notify you of any significant changes by posting the updated
                                policy on our website with a new "Last Updated" date.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                9. Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you have questions about our use of cookies, please contact us:
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