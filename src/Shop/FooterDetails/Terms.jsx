import React from 'react';
import './Terms.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

const TermsAndConditions = () => {
  return (
   <div>
    <Navbar/>
     <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Shacara's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website. The term 'Shop.co' refers to the owner of the website. The term 'you' refers to the user or viewer of our website. The use of this website is subject to the following terms of use:
      </p>
      <ol>
        <li>The content of the pages of this website is for your general information and use only.</li>
        <li>It is subject to change without notice.</li>
        <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.</li>
        <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
        <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
        <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
        <li>All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
        <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
        <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
      </ol>
    </div>
    <Footer/>
   </div>
  );
};

export default TermsAndConditions;
