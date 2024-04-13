import React from 'react';

const ShipRet = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Shipping & Returns</h2>
      <div className="w-full mx-auto mb-8 h-1 bg-black"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Shipping Policy</h3>
          <div className="text-gray-700">
            <p className="mb-4">I’m a Shipping Policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!</p>
            <p className="mb-4">I'm the second paragraph in your Shipping Policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Return & Exchange Policy</h3>
          <div className="text-gray-700">
            <p className="mb-4">I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
            <p className="mb-4">I'm the second paragraph in your Return & Exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipRet;
