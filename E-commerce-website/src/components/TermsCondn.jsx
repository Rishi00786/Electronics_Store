import React , {useRef,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const TermsCondn = () => {

    const location = useLocation();
  const paymentMethodsRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/payment-methods') {
      paymentMethodsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-8" id="payment-methods">
      <h2 className="lg:text-6xl sm:text-5xl text-3xl font-bold text-center mt-12 sm:mb-36 mb-28">Terms & Conditions</h2>
      <div className="w-full mx-auto mb-8 h-1 bg-black"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Customer Care</h3>
          <div className="text-gray-700">
            <p className="mb-4">I’m a Customer Care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
            <p className="mb-4">I'm the second paragraph in your Customer Care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Privacy & Safety</h3>
          <div className="text-gray-700">
            <p className="mb-4">I’m a Privacy & Safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.</p>
            <p className="mb-4">Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Wholesale Inquiries</h3>
          <div className="text-gray-700">
            <p className="mb-4">I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!</p>
            <p className="mb-4">I'm the second paragraph in your Wholesale Inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
        <div ref={paymentMethodsRef}>
          <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
          <div className="text-gray-700">
            <ul className="list-disc pl-4">
              <li>Credit / Debit Cards</li>
              <li>PAYPAL</li>
              <li>Offline Payments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondn;
