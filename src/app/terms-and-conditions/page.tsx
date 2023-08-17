import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

export default function Page({ }: Props) {
    return (
        <>
            <Header selected="terms-and-conditions" />
            <section className="bg-white dark:bg-gray-900">
                <div className="relative bg-cover bg-top bg-fixed bg-no-repeat">
                    {/* <div className="absolute w-full bg-[#444745]/80 h-full z-10"></div> */}
                    <div className="w-[90%] md:w-[85%] lg:w-[76%] mx-auto flex flex-col items-center py-20">
                        <h1 className="font-semibold text-5xl z-20 mb-8">TERMS AND CONDITIONS</h1>
                        <div className=" leading-8 text-base lg:text-lg z-20 list-outside list-disc 
    flex flex-col space-y-6">
                            <p className="">{`
                                These terms and conditions (the "Terms and Conditions") govern the use of ygafchatandmentor.com
                                (the "Site"). This Site is owned and operated by Lisa Larson. This Site is an ecommerce website.`}
                            </p>
                            <p>By using this Site, you indicate that you have read and understand these Terms and Conditions and
                                agree to abide by them at all times</p>
                            <div>
                                <h2 className="font-bold underline">Intellectual Property</h2>
                                <p> {"All content published and made available on our Site is the property of Lisa Larson and the Site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site."}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Age Restrictions</h2>
                                <p>
                                    {"The minimum age to use our Site is 16 years old. By using this Site, users agree that they are over 16 years old. We do not assume any legal responsibility for false statements about age"}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Acceptable Use</h2>
                                <p>
                                    {`As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not
                                    to:`}
                                </p>
                                <ul className="list-disc list-inside my-3">
                                    <li>Harass or mistreat other users of our Site</li>
                                    <li>Violate the rights of other users of our Site</li>
                                    <li>Violate the intellectual property rights of the Site owners or any third party to the Site</li>
                                    <li>Hack into the account of another user of the Site</li>
                                    <li>Post any material that may be deemed inappropriate or offensive</li>
                                </ul>
                                <p>{`If we believe you are using our Site illegally or in a manner that violates these Terms and Conditions,
                                    we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to
                                    take any legal steps necessary to prevent you from accessing our Site.`}</p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Accounts</h2>
                                <p>
                                    When you create an account on our Site, you agree to the following:</p>
                                <ol className="list-decimal list-inside my-3">
                                    <li>
                                        {`You are solely responsible for your account and the security and privacy of your account,
                                        including passwords or sensitive information attached to that account`}

                                    </li>
                                    <li>{`All personal information you provide to us through your account is up to date, accurate, and
                                        truthful and that you will update your personal information if it changes`}
                                    </li>
                                </ol>
                                <p>{`We reserve the right to suspend or terminate your account if you are using our Site illegally or if you
                                    violate these Terms and Conditions.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Sale of Services</h2>
                                <p>
                                    These Terms and Conditions govern the sale of services available on our Site.
                                </p>
                                <p>The following services are available on our Site:</p>
                                <ul className="list-disc list-inside my-3">
                                    <li>Online Coaching and Mentoring.</li>
                                </ul>
                                <p>
                                    The services will be paid for in full when the services are ordered.
                                </p>
                                <p>{`These Terms and Conditions apply to all the services that are displayed on our Site at the time you
                                    access it. All information, descriptions, or images that we provide about our services are as accurate as
                                    possible. However, we are not legally bound by such information, descriptions, or images as we cannot
                                    guarantee the accuracy of all services we provide. You agree to purchase services from our Site at your
                                    own risk.`}</p>
                                <p>{`
                                    We reserve the right to modify, reject or cancel your order whenever it becomes necessary. If we cancel
                                    your order and have already processed your payment, we will give you a refund equal to the amount
                                    you paid. You agree that it is your responsibility to monitor your payment instrument to verify receipt
                                    of any refund.`}</p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Payments
                                </h2>
                                <p>
                                    We accept the following payment methods on our Site
                                </p>
                                <ul className="list-disc list-inside my-3">
                                    <li>Credit Card</li>
                                    <li>Paypal</li>
                                    <li>Debit</li>
                                    <li>Direct Debit</li>


                                </ul>
                                <p>{`When you provide us with your payment information, you authorize our use of and access to the
                                    payment instrument you have chosen to use. By providing us with your payment information, you
                                    authorize us to charge the amount due to this payment instrument.`}
                                </p>
                                <p>{`If we believe your payment has violated any law or these Terms and Conditions, we reserve the right to
                                    cancel or reverse your transaction.`}</p>

                            </div>

                            <div>

                                <h2 className="font-bold underline">Refunds</h2>


                                <p>We provide refunds for services sold on our Site as follows:</p>

                                <ul className="list-disc list-inside">
                                    <li>{`If you are not satisfied and have purchased a package of sessions of 5 or more, then you may ask
                                        for a refund for any unused sessions less a 20% administration fee off of the refunded hours not
                                        used. If you require this refund, the procedure is to email us at info@ygafchatandmentor.com
                                        letting us know reason for refund request. We will use that information as feedback. After you
                                        send the email, we will process your refund back to the same method of payment used upon
                                        purchasing. Please allow the recommended time for your bank to process the refund back to
                                        your account.`}</li>
                                </ul>

                            </div>



                            <div>

                                <h2 className="font-bold underline">Guarantees</h2>


                                <p>The following guarantees apply to our Site:</p>

                                <ul className="list-disc list-inside">
                                    <li>{`We offer a satisfaction guarantee. If you are not happy, simply email us with your reason and
                                        we will refund any remaining sessions less a 20% administration fee off of the refund amount.`}</li>
                                </ul>

                            </div>










                            <div>
                                <h2 className="font-bold underline">Consumer Protection Law</h2>
                                <p>
                                    {`Where the Business Practice and Consumer Protection Act, or any other consumer protection
                                    legislation in your jurisdiction applies and cannot be excluded, these Terms and Conditions will not
                                    limit your legal rights and remedies under that legislation. These Terms and Conditions will be read
                                    subject to the mandatory provisions of that legislation. If there is a conflict between these Terms and
                                    Conditions and that legislation, the mandatory provisions of the legislation will apply.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Limitation of Liability</h2>
                                <p>{`Lisa Larson and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable
                                    for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of
                                    the Site.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Indemnity</h2>
                                <p>
                                    {`Except where prohibited by law, by using this Site you indemnify and hold harmless Lisa Larson and
                                    our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses,
                                    damages, liabilities and expenses including legal fees arising out of your use of our Site or your
                                    violation of these Terms and Conditions.`}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Applicable Law</h2>
                                <p>
                                    These Terms and Conditions are governed by the laws of the Province of British Columbia.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-bold underline">Severability</h2>
                                <p>If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent
                                    or invalid under applicable laws, those provisions will be deemed void and will be removed from these
                                    Terms and Conditions. All other provisions will not be affected by the removal and the rest of these
                                    Terms and Conditions will still be considered valid.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-bold underline">Changes</h2>
                                <p>These Terms and Conditions may be amended from time to time in order to maintain compliance with
                                    the law and to reflect any changes to the way we operate our Site and the way we expect users to
                                    behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a
                                    notice on our Site
                                </p>
                            </div>



































                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
