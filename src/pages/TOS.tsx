import { Typography } from '@mui/material'
import { NextPage } from 'next'
 const TOS : NextPage = () => {
  return (
    <>
      <Typography variant="h5" align="left" >
    1.Introduction
      </Typography>
      <Typography variant="h6" >
     Welcome to MoeMakura. These terms of service (&quot;Terms&quot;) govern your use of MoeMakura and any services provided through the webstore (collectively, the &quot;Service&quot;). By using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
      </Typography>
      <Typography variant="h5" >
     2.Eligibility
      </Typography>
      <Typography variant="h6" >
     To use the Service, you must be at least 18 years of age or have the consent of a parent or legal guardian. By using the Service, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set forth herein.
      </Typography>
      <Typography variant="h5" >
     3.Use of the Service
      </Typography>
      <Typography variant="h6" >
     You agree to use the Service only for lawful purposes and in a manner that does not infringe on the rights of any third party. You may not use the Service to:
      </Typography>
      <Typography variant="h6" style={{whiteSpace: 'pre-line'}} >
        {'Engage in any fraudulent activity \n'}
        {'Send unsolicited emails or spam \n'}
        { 'Impersonate another person or entity\n'}
        {' Post or transmit any unlawful, threatening, defamatory, obscene, or otherwise objectionable content\n'}
        {'  Introduce any viruses or other harmful code\n'}
      </Typography>
      <Typography variant="h5" >
     4.Product Availability and Pricing
      </Typography>
      <Typography variant="h6" >
     We reserve the right to modify or discontinue any product or service offered through the Service at any time without prior notice. Prices for products are subject to change without notice. We reserve the right to refuse or cancel any orders placed for products listed at an incorrect price.
      </Typography>
      <Typography variant="h5" >
     5.Payment and Shipping
      </Typography>
      <Typography variant="h6" >
     We accept various forms of payment, including credit card and PayPal. All payments are processed securely through our payment processor. Shipping options and costs are displayed at checkout.
      </Typography>
      <Typography variant="h5" >
     6.Returns and Refunds
      </Typography>
      <Typography variant="h6" >
     If you are not satisfied with your purchase, you may return the product within 30 days of purchase for a full refund. The product must be in its original condition and packaging. We reserve the right to refuse returns that do not meet these criteria.
      </Typography>
      <Typography variant="h5" >
     7.Intellectual Property
      </Typography>
      <Typography variant="h6" >
     All content on the Service, including but not limited to text, graphics, logos, images, and software, is the property of MoeMakura or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, modify, distribute, or display any content from the Service without our prior written consent.
      </Typography>
      <Typography variant="h5" >
     8.Indemnification
      </Typography>
      <Typography variant="h6" >
     You agree to indemnify and hold harmless MoeMakura and its officers, directors, employees, and agents from any and all claims, damages, expenses, or losses arising out of your use of the Service, your breach of these Terms, or your violation of any applicable law or regulation.
      </Typography>
      <Typography variant="h5" >
     9.Limitation of Liability
      </Typography>
      <Typography variant="h6" >
     MoeMakura shall not be liable for any damages arising out of your use of the Service, including but not limited to indirect, incidental, punitive, or consequential damages. In no event shall MoeMakura&apos;s liability exceed the amount paid by you for the product or service giving rise to the claim.
      </Typography>
      <Typography variant="h5" >
    10. Modifications
      </Typography>
      <Typography variant="h6" >
     We reserve the right to modify these Terms at any time. Any changes to these Terms will be posted on the Service. Your continued use of the Service after any changes to these Terms will constitute your acceptance of such changes.
      </Typography>
      <Typography variant="h5" >
     11.Contact Information
      </Typography>
      <Typography variant="h6" >
     If you have any questions or concerns about these Terms, please contact us at [insert contact information].
      </Typography>
      <Typography variant="h5" >
     Thank you for using MoeMakura!</Typography>
    </>
  )
}

export default TOS