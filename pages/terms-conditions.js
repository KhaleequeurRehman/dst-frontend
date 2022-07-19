import Image from "next/image"
import Head from "next/head"
import img1 from '../public/Our Journey Michael.png';
import styles from '../styles/Terms.module.css'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function TermsConditions() {
    return (
        <>
            <Header />
            <div>
                <Head>
                    <title>DST - Terms and Conditions</title>
                    <meta name="description" content="DST Australia terms and conditions" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.section1} id="section1">
                    <div>
                        <h1>DST&apos;s Terms and Conditions</h1>
                        <h3>Find all our policy-related content in one simple place.</h3>
                    </div>
                    <div>
                        <Image src={img1} alt="Vercel Logo" objectFit='contain' />
                    </div>
                </div>
                <div className={styles.terms} id="terms">
                    <div id="who-we-are">
                        <ol>
                            <li>
                                <h4>Who we are and how to contact us</h4>
                                <ol>
                                    <li>We are Optimal Health training Pty Ltd ABN (<strong>we</strong>, <strong>us</strong> and <strong>our</strong>).</li>
                                    <li>To contact us, please email Contactcustomercare@optimalhealthtraining.com.au or contact us on TBC.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>These Terms, Orders and the contract</h4>
                                <ol>
                                    <li>We use <strong>bold text</strong> in these Terms to identify where a word has been given a specific meaning. For example, <strong>you</strong> and <strong>your</strong> refer to the party that is identified as our customer in an Order.</li>
                                    <li>We operate a <strong>website (Site)</strong> to provide  courses and other training content <strong>(Online Courses)</strong>. You can use the Site to access Online Courses in accordance with these Terms <strong>(Online Course Access)</strong>.</li>
                                    <li>These terms and conditions <strong>(Terms)</strong> apply to any Online Course Access by you. If you do not agree to these Terms, you will be denied  Online Course Access.</li>
                                    <li>All orders are placed online by following the prompts on  the Site <strong>(Order)</strong>. Occasionally, we may require you to use our offline order form to place an Order. Our acceptance of your Order takes place when we confirm that we have accepted your Order, either by email or another written confirmation (such as an online message), at which point and on which date <strong>(Commencement Date)</strong> the Contract between you and us will come into existence.</li>
                                    <li>The <strong>Contract</strong> between you and us consists of the following parts and to the extent of any inconsistency, each part will prevail in the following order (with the first-named item prevailing to the greatest extent):<br />
                                        (a) the Order; then <br />
                                        (b) these Terms; then<br />
                                        (c) the Acceptable Use Policy (if any).<br />
                                    </li>
                                    <li>If you are an Organisation, the Order may specify the number of your employees, officers, contractors, and agents <strong>(Users)</strong> that are allowed to access an Online Course as part of your Online Course Access. The Order may contain other use restrictions.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Duration of Online Course Access and Subscriptions</h4>
                                <ol>
                                    <li>You may have the choice to access Online Courses by way of an annual subscription <strong>(Subscription)</strong>.<br />
                                    Alternatively, Online Courses must be paid for individually at the time of the Order, and you will be provided access until the Online Course has been completed, but no later than 12 months <strong>(Access Period)</strong>. 
                                    </li>
                                    <li>Unless we agree otherwise, for a Subscription, you have 12 months for your Online Course Access to complete  Online Courses <strong>(Initial Subscription  Period)</strong>. After the Initial Subscription Period has expired, we can remove your access to the Online Courses at any time after that date, unless you pay again for a further 12-month subscription period <strong>(Subscription Renewal Periods)</strong>. </li>
                                    <li>Any Subscription commences on the later of the Commencement Date or such other date set out in your Order (if any) <strong>(Subscription Start Date)</strong> and continues for:
                                        <br />(a) the Initial Subscription Period ; and
                                        <br />(b) any Subscription Renewal Periods, (together, the <strong>Subscription Period</strong>).</li>
                                    <li>Unless either party gives 60 days&apos; notice before the expiry of the Initial Subscription Period, the Subscription will renew for  the Subscription Renewal Period.</li>
                                    <li>Unless either party gives 60 days&apos; notice before the expiry of a Subscription Renewal Period, the Subscription will renew for a further Subscription Renewal Period (and will continue to do so), unless terminated in accordance with this Contract.</li>
                                    <li>If you are an individual, we may (in our discretion) permit you to continue to have Online Course Access  after the end of the Access Period or  Subscription Period  (as applicable), or following the termination or expiry of this Contract. In that case, you will have Online Course Access to access your training record and/or order additional Online Courses.</li>
                                    <li>If you are an organisation and your Order states that you may give your users (Users) Online Course Access, we may (in our discretion) permit your Users to continue to have Online Course Access after the end of the Access Period or Subscription Period (as applicable), or following the termination or expiry of this Contract. In that case, your Users will have Online Course Access to access their training record and/or order additional Online Courses.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Charges and payment</h4>
                                <ol>
                                    <li>In consideration of us providing Online Course Access, you must pay our charges <strong>(Charges)</strong> in accordance with this clause 4. Unless otherwise agreed, we will take your first payment upon acceptance of your Order. Payment may be made by following the prompts on the Site upon placing the Order  or  otherwise upon provision of a tax invoice by email (as applicable).</li>
                                    <li>The Charges are the prices quoted by us at the time you submit your Order.</li>
                                    <li>Our Charges are exclusive of goods and services tax <strong>(GST)</strong>. Where GST is payable in respect of some or all of the Online Course Access, you must pay us such additional amounts in respect of GST, at the applicable rate, at the same time as you pay the Charges.</li>
                                    <li>Unless otherwise agreed, payment for the Online Course Access is in advance. To the extent permitted by law, all Charges are non-refundable and non-cancellable other than if you validly terminate this Contract because of our breach.</li>
                                    <li>If we agree that you can pay the Charges other than by way of payment in advance, you must pay any Charges within 14 days of the date of our corresponding invoice.</li>
                                    <li>You can pay for the Online Course Access using a debit card or credit card or bank transfer. If you provide credit card information to us, you authorise us to charge that credit card for all Charges and an amount to cover any fees we incur in connection with charging that credit card. We will send you an electronic invoice following payment. For any failed or cancelled payments, a $20 administration fee may be charged.</li>
                                    <li>If you fail to make a payment under the Contract by the due date, then, without limiting our other remedies, you will have to pay interest on the amount unpaid at the rate set out under the Penalty Interest Rates Act 1983 plus 2%. Interest accrues on a day-to-day basis from the due date up to and including the date of actual payment..  NB: This clause will likely be deemed to be a &apos;penalty&apos; and not enforceable.</li>
                                    <li>Unless otherwise agreed, the Charges are payable in Australian Dollars.</li>
                                    <li>You acknowledge and agree that we can pursue payment collection through formal debt collection third parties if:
                                        <br />(a) any amount owing by you under this Contract is 14 or more days overdue; or
                                        <br />(b) you have made no effort to resolve a payment dispute.
                                        <br />All fees and costs incurred in securing these payments will be added to the total payable amount at the time of collection including third-party collection fees and interest.
                                    </li>
                                    <li>Unless we agree otherwise, if you add a new feature or extend your Online Course Access  (or similar), you will be invoiced for the corresponding amount for the remainder of the corresponding  Subscription Period or  Period (as applicable) regardless of how long remains in that period. Unless otherwise agreed, there is no pro-rata treatment of such Charges.</li>
                                    <li>At least 90 days prior to the start of any  Subscription Renewal Period, we may submit revised Subscription pricing that will apply during that Subscription Renewal Period.</li>
                                    <li>You may have the option to purchase credits <strong>(Credits)</strong> for use on the Site. Credits are available for 12 months from the date of purchase, after which they expire. Unused Credits do not rollover into the next 12-month period.</li>
                                    <li>For the avoidance of doubt, the Online Courses  will be deemed to have been purchased by you at the time at which you have complied with all relevant Site procedures to enable a key code to be issued to you for the Online Courses  selected.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Your obligations and responsibilities</h4>
                                <ol>
                                    <li>
                                        It is your responsibility to ensure that:
                                        <br />
                                        <br />(a) your Order is complete and accurate;
                                        <br />
                                        <br />(b) you provide us with such information and materials we may reasonably require in order to supply any Online Course Access, and ensure that such information is complete and accurate in all material respects;
                                        <br />
                                        <br />(c) you obtain and maintain all necessary licences, permissions, and consents which may be required for any Online Course Access before the date on which the Online Course Access  is to start; and
                                        <br />
                                        <br />(d) you comply with all applicable laws, including health and safety laws, applicable to your receipt and use of the Online Course Access.
                                    </li>
                                    <li>
                                        If our ability to provide the Online Course Access is prevented or delayed by any failure by you to fulfil any obligation listed in 5.1 (Default):
                                        <br />
                                        <br />(a) we will be entitled to suspend the Online Course Access until you remedy the  Default, and to rely on such Default to relieve us from the obligation to provide the Online Course Access, in each case to the extent the Default prevents or delays the performance of the Online Course Access (as applicable). In certain circumstances the Default may entitle us to terminate the Contract under 11;
                                        <br />
                                        <br />(b) we will not be responsible for any costs or losses you sustain or incur arising directly or indirectly from our failure or delay to provide the Online Course Access; and
                                        <br />
                                        <br />(c) it will be your responsibility to reimburse us on written demand for any costs or losses we sustain or incur arising directly or indirectly from the  Default.
                                    </li>
                                    <li>
                                        You are responsible for all use of the Online Course Access, and must ensure that you use, or ensure that no other person uses, the Online Course Access:
                                        <br />
                                        <br />(a) in breach of this Contract;
                                        <br />
                                        <br />(b) for any purpose other than your internal business (if you are a business) or personal purposes (if you are not a business);
                                        <br />
                                        <br />(c) in a manner that breaches  any law or infringes any person’s rights;
                                        <br />
                                        <br />(d) in any way that damages, interferes with or interrupts the supply of the Online Course Access;
                                        <br />
                                        <br />(e) to transmit, publish, communicate, view or create any material that is or may be pornographic, defamatory, offensive, menacing, unwanted, obscene, illegal or unlawful;
                                        <br />
                                        <br />(f) in a way that infringes our and any third party’s intellectual property rights; 
                                        <br />
                                        <br />(g) in a way that disrupts, misuses or excessively uses our (or any of our third party service provider’s) hardware, bandwidth access, storage space or our (or any of our third party service provider’s) other resources or
                                        <br />
                                        <br />(h) that is prejudicial to us in any way, or may, whether directly or indirectly, cause us to be brought into disrepute or effect our reputation within the community. 
                                    </li>
                                    <li>
                                    Additionally, you must not:
                                    <br />
                                    <br />(a) permit any third party to access Online Courses;
                                    <br />
                                    <br />(b) lease, sublicence, resell or otherwise distribute Online Course Access or content from an Online Course;
                                    <br />
                                    <br />(c) create derivate works based on any Online Course or our Site;
                                    <br />
                                    <br />(d) copy, frame or mirror any part or content of any Online Course or our Site;
                                    <br />
                                    <br />(e) reverse engineer any Online Course or our Site; or
                                    <br />
                                    <br />(f) access any Online Course or our Site in order to:
                                        <br /> &nbsp; (i) build a competitive product or service, or
                                        <br /> &nbsp; (ii) copy any features, functions or graphics of any Online Course or our Site,
                                            and must ensure that no person does any of the acts described in clause 5.4(a) to 5.4(f).
                                    </li>
                                    <li>You are responsible for the acts and omissions of any user of the Online Course Access as if they were your own acts or omissions (regardless of whether that user was authorised by you or not).</li>
                                    <li>You acknowledge and agree that you (and each User, if applicable) that accesses an Online Course is required to accept the Acceptable Use Policy.</li>
                                    <li>Subject to clause 9.4, you acknowledge and agree that we are not responsible for your use of the Online Course Access, or any actions you take or conclusions you reach based on your use of the Online Course Access.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Intellectual property rights</h4>
                                <ol>
                                    <li>As between you and us, all intellectual property rights in or arising out of or in connection with Online Course Access and the Online Courses, including any improvements and modifications to the Site or any Online Course, will be owned by us.</li>
                                    <li>All intellectual property rights in any materials developed or created by us or on our behalf for you as part of Online Course Access vest in us immediately from creation.</li>
                                    <li>We agree to grant you a fully paid-up, worldwide, non-exclusive, non-sublicensable, non-transferable, royalty-free licence during the Subscription Period or Access Period (as applicable) to access the Online Courses as specified in your Order for use in your business (if you are a business) or for your personal purposes (if you are not a business) in accordance with this Contract. You may not sub-license, assign or otherwise transfer the rights granted in this clause 6.3.</li>
                                    <li>You grant us a fully paid-up, non-exclusive, royalty-free, worldwide, transferable, sub-licensable, irrevocable, perpetual licence to use, copy, modify or incorporate any materials, suggestions, enhancement requests, recommendations feedback or other content provided by you (including users) relating to the operation of the Site and any Online Course Access, for the purpose of providing and improving the Online Course Access and/or running analytics in connection with use of the Online Course Access.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Personal Information</h4>
                                <ol>
                                    <li>Each party agrees to comply with its obligations under the Privacy Act 1988 (Cth) and any other legislation affecting privacy, personal information or the collection, handling, storage, processing, use or disclosure of data to the extent that such legislation applies to that party in connection with performance of this Contract <strong>(Privacy Laws)</strong>.</li>
                                    <li>You agree to procure all permissions and make all disclosures necessary to allow us to obtain, use and disclose the <strong>Personal Information</strong> (as that term is used in the Privacy Act 1988 (Cth)) that you and any user (including your Users, if any) provide in the course of this Contract, for the purpose of this Contract (and any other purpose set out in this Contract and/or our privacy policy).</li>
                                    <li>You must give us all assistance required and comply with all directions given by us from time to time in relation to our privacy policy, our compliance with the Privacy Laws or any investigation, request or enquiry (formal or otherwise) from the Office of the Australian Information Commissioner or any other regulatory body regarding the information disclosed to us under this Contract.</li>
                                    <li>You must notify us immediately if you become aware of any breach or likely breach of this clause 7.</li>
                                    <li>You must ensure that your computer network is secure. We are not responsible for the security of your data or your computer network.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Restrictions and disclaimers</h4>
                                <ol>
                                    <li>
                                        You represent and warrant to us that:
                                        <br />
                                        <br />(a) all information given to us in relation to this Contract is correct, complete and not misleading; and
                                        <br />(b) any material that you supply and that is used by us will not and does not infringe or breach any third party rights or terms and conditions.
                                    </li>
                                    <li>
                                        Subject to clause 9.4, and to the extent permitted by law:
                                        <br />
                                        <br />(a) we do not guarantee that the Online Courses and Online Course Access, or any services provided in connection to the Online Courses or Online Course Access, will always be available, uninterrupted or be error-free;
                                        <br />
                                        <br />(b) the Online Courses and Online Course Access are provided on an “as is” and “as available” basis, and (except as set out in these Terms) we make no representations or warranties, express or implied, regarding the accuracy, operation or availability of the Online Courses or Online Course Access;
                                        <br />
                                        <br />(c) we have no liability in relation to the content of Online Courses that has been provided by third parties;
                                        <br />
                                        <br />(d) we may change the content of an Online Course from time-to-time;
                                        <br />
                                        <br />(e) without limiting the generality of clauses 8.2(a) and 8.2(b), we do not warrant that the Online Courses or Online Course Access will meet your requirements, will operate in any combination that may be selected for use by you or in combination with other software;
                                        <br />
                                        <br />(f) we may suspend or withdraw or restrict the availability of all or any part of the Online Courses or Online Course Access for business and operational reasons, and will try to give you reasonable notice of any suspension or withdrawal;
                                        <br />
                                        <br />(g) we do not warrant that all software errors, defects or inefficiencies will be corrected and we do not assume any liability for failure to correct any such errors, defect or inefficiency; and
                                        <br />
                                        <br />(h) we make no warranty, and you assume the entire risk, as to the capabilities, suitability, use or performance of any Online Course Access under this Contract.
                                    </li>
                                    <li>Among other things, the operation and availability of the systems used for accessing the Online Courses, including computer networks and the internet, can be unpredictable and may from time to time interfere with or prevent access to the Online Courses. Subject to clause 9.4, we are not responsible or liable for any of these failures.</li>
                                    <li>Subject to clause 9.4 and to the extent permitted by applicable law, we exclude all express, statutory and implied conditions, guarantees and warranties in relation to any Online Courses and Online Course Access other than the warranties expressly set out in this Contract.</li>
                                    <li> If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party. We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these Terms. If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us.</li>
                                    <li>Online Course Access is directed to users who are at least 15 years old and are residing in and viewing Online Courses within Australia. We do not represent that Online Course Access is appropriate for use or available in other locations. If you access Online Courses from outside Australia, you do at your risk and you are responsible for compliance with laws applicable to you accessing Online Courses from your location.</li>
                                    <li>If you are an organisation, and a User is less than 15 years old, you are responsible for ensuring that parental consent has been provided in relation to that User&apos;s access to Online Courses. We may require you to demonstrate your compliance with this clause 8.7.</li>
                                    <li>Any descriptions or illustrations on the Site are published for the sole purpose of giving an approximate idea of the products and services described in them.</li>
                                    <li>You accept that features, functions, units of measurement and terminology may differ between countries and features designed for one geographical territory or country may not suit or be available to other countries.</li>
                                    <li>Introductory, trial or promotional access to Online Courses may be subject to additional terms.</li>
                                    <li>We may, by exception and at our discretion, provide you with a download of content for use on your own e-learning platform. Where this happens, you acknowledge and agree that we have no obligation to keep that material up-to-date. You also agree to comply with any licensing and use restrictions upon which we may condition that use.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Limitation of liability</h4>
                                <ol>
                                    <li>
                                        Nothing in this Contract limits or excludes our liability:
                                        <br />
                                        <br />(a) for death or personal injury caused by our negligence or wilful misconduct or that of our employees, as applicable;
                                        <br />
                                        <br />(b) for fraud or fraudulent misrepresentation by us or our employees, as applicable; or
                                        <br />
                                        <br />(c)where liability cannot be limited or excluded by applicable law.
                                    </li>
                                    <li>
                                        Subject to 9.1 and clause 9.4, we will not be liable to you, whether in contract, tort (including negligence) or otherwise, for any special, indirect or consequential loss arising under or in connection with this Contract, including any:
                                        <br />
                                        <br />(a) loss of profits;
                                        <br />
                                        <br />(b) loss of sales or business;
                                        <br />
                                        <br />(c) loss of production;
                                        <br />
                                        <br />(d) loss of use or loss arising from loss of use;
                                        <br />
                                        <br />(e) loss of agreements or contracts;
                                        <br />
                                        <br />(f) loss of business opportunity;
                                        <br />
                                        <br />(g) loss of anticipated savings;
                                        <br />
                                        <br />(h) loss of or damage to goodwill;
                                        <br />
                                        <br />(i) loss of reputation; or
                                        <br />
                                        <br />(j) loss of use or corruption of software, data or information.
                                    </li>
                                    <li>
                                        Subject to 9.1, 9.2 and 9.4, our maximum aggregate liability to you for any loss or damage or injury arising out of or in connection with this Contract, including any breach by us of this Contract however arising, under any indemnity, in tort (including negligence), under any statute, custom, law or on any other basis:
                                        <br />
                                        <br />(a) in any 12-month period is limited to the actual Charges paid by you under this Contract in the 12-month period preceding the matter or event giving rise to the claim; and
                                        <br />
                                        <br />(b) in total is limited to the actual Charges paid by you under this Contract.
                                    </li>
                                    <li>Nothing in this Contract is intended to have the effect of excluding, restricting or modifying the application of all or any of the provisions of Part 5-4 of the Australian Consumer Law in Schedule 2 of the Competition and Consumer Act 2010 (Cth) (ACL), or the exercise of a right conferred by such a provision, or any liability of ours in relation to a failure to comply with a guarantee that applies under Division 1 of Part 3-2 of the <strong>ACL </strong>to a supply of services and/or services.</li>
                                    <li>If we are liable to you in relation to a failure to comply with a guarantee that applies under Division 1 of Part 3-2 of the ACL that cannot be excluded, our total liability to you for that failure is limited to, at our option, in the case of a supply of goods, us replacing the goods or paying the cost of having the goods repaired or replaced or supplying equivalent goods or repairing the goods, or in the case of a supply of services, us supplying the services again or paying the cost of having the services supplied again.</li>
                                    <li>Subject to clause 9.4, any claim by you against us for loss or damage however caused (including by the negligence of us), suffered by you in connection with this Contract must be made within six months of you becoming entitled to make the claim and any claim not made within six months is absolutely barred.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Confidentiality</h4>
                                <ol>
                                    <li>We each undertake that we will not at any time disclose to any person any confidential information concerning one another&apos;s business, affairs, customers, clients or suppliers, except as permitted by 10.2.</li>
                                    <li>
                                        We each may disclose the other&apos;s confidential information:
                                        <br />
                                        <br/>(a) where the information is in the public domain as at the date of this Contract (or subsequently becomes in the public domain other than by breach of any obligation of confidentiality binding on either of us);
                                        <br />
                                        <br/>(b) if either of us is required to disclose the information by applicable law or the rules of any recognised stock exchange or other document with statutory content requirements, provided that the recipient has to the extent practicable having regard to those obligations and the required timing of the disclosure consulted with the provider of the information as to the form and content of the disclosure;
                                        <br />
                                        <br/>(c) where the disclosure is expressly permitted under this Contract;
                                        <br />
                                        <br/>(d) if disclosure is made to our respective officers, employees and professional advisers to the extent necessary to enable either of us to properly perform our obligations under this Contract or to conduct our business generally, in which case we each must ensure that such persons keep the information secret and confidential and do not disclose the information to any other person;
                                        <br />
                                        <br/>(e) where the disclosure is required for use in legal proceedings regarding this Contract; or
                                        <br />
                                        <br/>(f) if the party to whom the information relates has consented in writing before the disclosure.
                                    </li>
                                    <li>Each of us may only use the other&apos;s confidential information for the purpose of fulfilling our respective obligations under the Contract.</li>
                                    <li>You agree to allow us to reference you as a customer using our technology on our website and in print copy or marketing material. On request, you will provide us with an approved company logo that we may publish on our website and/or marketing material to communicate such relationship. If participating in the Optimal Health Training Accreditation Program (Continuum of Care Program), you will be provided with a approved accreditation logo <strong>(Accreditation Logo)</strong> which may publish on your website and/or marketing material to communicate such relationship.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Term and termination</h4>
                                <ol>
                                    <li>
                                        This Contract commences on the Commencement Date and continues until the earlier of:
                                        <br />
                                        <br/>(a) the expiry or completion of all Online Course Access described in the Order; and
                                        <br />
                                        <br/>(b) termination in accordance with this Contract.
                                    </li>
                                    <li>
                                        Without affecting any of our other rights, we may suspend the performance of the Online Course Access, or terminate this Contract with immediate effect by giving written notice to you if:
                                        <br />
                                        <br/>(a) you fail to pay any undisputed amount due under this Contract on the due date for payment and you remain in default not less than 7 days after being notified in writing to make such payment;
                                        <br />
                                        <br/>(b) you commit a material breach of any other term of this Contract (including, without limitation, a breach of clauses 5.1, 5.3, 6.7, 8.1 and 10) and that breach is irremediable, or (if that breach is remediable) you fail to remedy that breach within a period of 5 days after being notified in writing to do so;
                                        <br />
                                        <br/>(d) we are directed to do so by a regulatory body or similar;
                                        <br />
                                        <br/>(d) an insolvency event occurs in relation to you; or
                                        <br />
                                        <br/>(f) if you are a Company, you undergo a change of control by divesting more than 50% of your shares.
                                    </li>
                                    <li>Upon termination of this Contract, we may remove any content, data and material related to your Online Course Access and it is your responsibility to remove or archive that information prior to termination of this Contract.</li>
                                    <li>
                                        Upon termination of this Contract, you must immediately:
                                        <br />
                                        <br/>(a) cease accessing any Online Course;
                                        <br />
                                        <br/>(b) return to us any of our confidential Information and intellectual property rights in your possession or control (including, without limitation, the Accreditation Logo); and
                                        <br />
                                        <br/>(c) pay us the Charges for all Online Course Access.
                                    </li>
                                    <li>Termination of this Contract does not affect any rights, remedies, obligations or liabilities of the parties that have accrued up to the date of termination, including the right to claim damages for any breach of the Contract that existed at or before the date of termination.</li>
                                    <li>The provisions of clauses 6.4, 7, 8, 9, 10, 11, 13, 16 and 26 and any provision of the Contract that expressly or by implication is intended to come into or continue in force on or after termination or expiry will have full force and effect after termination or expiry of this Contract.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Support</h4>
                                <ol>
                                    <li>Unless we agree otherwise, we have no obligation to provide any services or products to you in relation to the Online Course Access, other than to use reasonable endeavours to provide Online Course Access.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Audit</h4>
                                <ol>
                                    <li>
                                        You will maintain complete and accurate records concerning:
                                        <br />
                                        <br/>(a) users enrolled in any Online Course;
                                        <br />
                                        <br/>(b) the distribution of our materials (including pursuant to clause 8.11); and
                                        <br />
                                        <br/>(c) Log-Ins and passwords (if applicable), for a period of at least seven (7) years following the expiry or earlier termination of this Contract.
                                    </li>
                                    <li>
                                    On our request, you must allow us or a third party nominated by us to access during business hours your records and any premises, systems, equipment, personnel and information relating to this Contract in order to audit your compliance with this Contract.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4>Training Partnership</h4>
                                <ol>
                                    <li>This clause 14 applies if we have agreed that you are an organisation that is permitted to facilitate its users (Users) to access Online Courses.</li>
                                    <li>
                                        A Training Partnership will be established with a User when either:
                                        <br />
                                        <br/>(a) A training provider or similar entity (Provider) establishes a User&apos;s profile on the Site, in which case the Training Partnership will be with the Provider (Training Partner), or
                                        <br />
                                        <br/>(b) You or a User establishes a profile on the Site in which case that Training Partnership will be between us and the User (Training Partner).
                                    </li>
                                    <li>
                                        The Training Partner will always be able to access a User&apos;s:
                                        <br />
                                        <br/>(a) information gathered at the point in time at which training was delivered,.
                                        <br />
                                        <br/>(b) information uploaded to the site by the Training Partner, and
                                        <br />
                                        <br/>(c) results of training provided or distributed by Training Partner.
                                    </li>
                                    <li>
                                        A Training Partner may, in addition to the information referred to in the preceding paragraph, have access to the following information:
                                        <br />
                                        <br/>(a) a User&apos;s contact details
                                        <br />
                                        <br/>(b) an employer record of a User&apos;s contact details which relate to contact details current during the User&apos;s period of employment with them;
                                        <br />
                                        <br/>(c) training Certificates or Statements of Attainment in respect of training distributed or provided by the Training Partner;
                                        <br />
                                        <br/>(d) any training, information or records you or the User have decided to make public through the permissions on the Site;
                                        <br />
                                        <br/>(e) the User&apos;s results of training provided by the Training Partner
                                        <br />
                                        <br/>(f) records;
                                        <br />
                                        <br/>(g) training plans;
                                        <br />
                                        <br/>(h) surveys;
                                        <br />
                                        <br/>(i) notes; and
                                        <br />
                                        <br/>(j) any other Information which may be contained on the Site in relation to a User.
                                    </li>
                                    <li>A Training Partner will also be able to upload Information about Users to the Site. This information may be uploaded so that Users can access it, or it may be uploaded so that only the Training Partner can access it. A Training Partner may also amend certain Information about Users on the Site.</li>
                                    <li>You or Users may allow any Training Partner access to third-party provider information, or User-created information by making the appropriate selections in your My Training, My Partnerships and My Training Plan pages of the Site. This occurs through use of the Permissions tab and through making information public. Any information which you or a User choose to make public can be viewed by any of a User&apos;s Training Partners.</li>
                                    <li>
                                        Once a Training Partnership is ended:
                                        <br />
                                        <br/>(a) Users will no longer have access to the Training provided by the Training Partner;
                                        <br />
                                        <br/>(b) the Training Partner will not have access to any information which comes into existence after the date on which the Partnership is ended, but the Training Partner will still have access to information to which it was entitled to access prior to the date on which the Training Partnership ended; and
                                        <br />
                                        <br/>(c) the Training Partner may continue to upload information to the Site which neither you, the User nor any other Provider can see, but that Information may still be viewed by us.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4>Force majeure</h4>
                                <ol>
                                    <li>We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under the Contract that is caused by any act or event beyond our reasonable control <strong>(Event Outside Our Control)</strong>.</li>
                                    <li>
                                        If an Event Outside Our Control takes place that affects the performance of our obligations under the Contract:
                                        <br />
                                        <br/>(a) we will contact you as soon as reasonably possible to notify you; and
                                        <br />
                                        <br/>(b) our obligations under the Contract will be suspended and the time for performance of our obligations will be extended for the duration of the Event Outside Our Control. We will arrange a new date for performance of the Online Course Access with you after the Event Outside Our Control is over.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4>Dispute Resolution</h4>
                                <ol>
                                    <li>The parties agree to use best endeavours to resolve in good faith any dispute concerning this Contract.</li>
                                    <li>If a dispute arises between the parties that cannot be resolved promptly, either party may notify the other party of a formal dispute. Each party must nominate a senior executive to meet within 7 days of the notice (or another agreed period) to try and resolve the dispute.</li>
                                    <li>Any dispute, controversy or claim arising out of, relating to or in connection with this contract, including any question regarding its existence, validity or termination, shall be resolved by arbitration in accordance with the ACICA Arbitration Rules. The seat of arbitration shall be Brisbane, Australia. The language of the arbitration shall be English. The number of arbitrators shall be one.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Notices</h4>
                                <ol>
                                    <li>When we refer to “in writing” in these Terms, this includes email.</li>
                                    <li>Any notice or other communication given by one of us to the other under or regarding the Contract must be in writing and be delivered personally, sent by pre-paid post or email.</li>
                                    <li>
                                        A notice or other communication is deemed to have been received:
                                        <br />
                                        <br/>(a) if delivered by hand to the nominated address, when delivered to the nominated address;
                                        <br />
                                        <br/>(b) if sent by pre-paid post, at 9.00 am (addressee&apos;s time) on the second Business Day after the date of posting; or
                                        <br />
                                        <br/>(c) if sent by email, at the time the email is sent (as recorded on the device from which the sender sent the email) unless the sender receives an automated message that the email has not been delivered.
                                    </li>
                                    <li>In proving the service of any notice, it will be sufficient to prove, in the case of a letter, that such letter was properly addressed, stamped and placed in the post and, in the case of an email, that such email was sent to the specified email address of the addressee.</li>
                                    <li>The provisions of this clause will not apply to the service of any proceedings or other documents in any legal action.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>No waiver</h4>
                                <ol>
                                    <li>Neither of us may rely on the words or conduct of any other party as being a waiver of any right, power or remedy arising under or in connection with this Contract unless the other party or parties expressly grant a waiver of the right, power or remedy. Any waiver must be in writing, signed by the party granting the waiver and is only effective to the extent set out in that waiver.</li>
                                    <li>Words or conduct referred to in 18.1 include any delay in exercising a right, any election between rights and remedies and any conduct that might otherwise give rise to an estoppel.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Assignment and novation</h4>
                                <ol>
                                    <li>We may assign or transfer our rights and obligations under the Contract to another entity.</li>
                                    <li>You may only assign or transfer your rights or your obligations under the Contract to another person if we agree in writing.</li>
                                    <li>A breach of 19.2 by you entitles us to terminate this Contract.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Severability</h4>
                                <ol>
                                    <li>If the whole or any part of a provision of this Contract is or becomes invalid or unenforceable under the law of any jurisdiction, it is severed in that jurisdiction to the extent that it is invalid or unenforceable and whether it is in severable terms or not.</li>
                                    <li>20.1 does not apply if the severance of a provision of this Contract in accordance with that clause would materially affect or alter the nature or effect of the parties&apos; obligations under this Contract.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Entire agreement</h4>
                                <p>Unless we have separately entered into a written contract with you that expressly replaces or modifies these Terms, the Contract is the entire agreement between you and us in relation to its subject matter. You acknowledge that you have not relied on any statement, promise or representation or assurance or warranty that is not set out in the Contract.</p>
                            </li>
                            <li>
                                <h4>Subcontractors</h4>
                                <p>We may engage subcontractors to provide any part of the Online Course Access.</p>
                            </li>
                            <li>
                                <h4>Relationship of the parties</h4>
                                <ol>
                                    <li>This Contract is not intended to create a relationship between the parties of partnership, joint venture, agency or employer-employee. Each party has no authority to create, assume or otherwise enter into any agreement that imposes rights or obligations on the part of the other party.</li>
                                    <li>The Contract is between you and us. No other person has any rights to enforce any of its terms.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Variation</h4>
                                <ol>
                                    <li>
                                        We amend these terms from time to time. We will give you written notice of any change to these Terms, and:
                                        <br />
                                        <br />(a) if the change is material and is not detrimental to you, or the change is not material, that change will have effect from the latest of:
                                        <br />&emsp;(i) the date identified in the written notice; and
                                        <br />&emsp;(ii) 30 days from the date of the written notice; and
                                        <br />
                                        <br />(b) if the change is material and is detrimental to you, we will contact you to discuss amending these Terms.
                                    </li>
                                    <li>These Terms were most recently updated on <strong>September 08, 2021</strong>.</li>
                                </ol>
                            </li>
                            <li>
                                <h4>Announcements</h4>
                                <p>
                                    No party will make, or permit any person to:
                                    <br />
                                    <br />(a) make any public announcement statement, press release or other publicity or marketing materials concerning the existence, subject matter or terms of this Contract, the wider transactions contemplated by it, or the relationship between the parties; or
                                    <br />
                                    <br/>(b) use the other party’s trade marks, service marks, trade names, logos, symbols or brand names, in each case;
                                    <br />
                                    <br/>without the prior written consent of the other party, such consent not to be unreasonably withheld, conditioned or delayed, except as required by law, any governmental or regulatory authority (including, without limitation, any relevant securities exchange), any court or other authority of competent jurisdiction.</p>
                            </li>
                            <li>
                                <h4>Governing law and jurisdiction</h4>
                                <p>These terms and conditions, their subject matter and their formation, are governed by New South Whales law. You and we both agree that the courts in New South Whales will have non-exclusive jurisdiction.</p>
                            </li>
                            <li>
                                <h4>Indemnity</h4>
                                <p>
                                    You agree unconditionally and irrevocably indemnify and hold us harmless from against any and all liability, loss, costs and expenses (including legal costs on an indemnity costs), damages, causes of action, actions, claims, lawsuits or other proceedings arising out of, or in any way connected to, any claim made by any other third party, company or authority, in respect of: 
    your use of the Online Courses; 

    by reason of us giving you Online Course Access; and

    your breach of any terms of this Contract, including without limitation, clauses 4, 5, 6, 7 , 8 and 10 hereof.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}