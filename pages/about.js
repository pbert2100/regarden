import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Regarden - About</title>
        <meta name="author" content="Regarden" />
        <meta name="description" content="Read and understand the community rules and terms of use!" />
      </Head>

      <section className="pt-28">
        <h1 className="text-2xl">Terms of Use, Service and Conditions</h1>
        <h1 className="p-5 my-5 rounded w-full border-2 border-black">By accessing this website and using our services, you accept these terms and conditions. Do not continue to use MintME if you do not agree to take all of the terms and conditions stated on this page !</h1>
      </section>

      <section>
        <h1 className="mb-5">1. Introduction</h1>
        <p className="mb-5">1.1. Parts of this website offer users an opportunity to post information. MintME does not filter, edit, publish or review this information before their presence on the website. Any kind of this information do not reflect the views and opinions of MintME, its agents, and/or affiliates. This information reflect the views and opinions of the person who posts it. To the extent permitted by applicable laws, MintME shall not be liable for the information or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
        <p className="mb-5">1.2. MintMe reserves the right to monitor all slots and <a href="#expire" className="underline">expire</a> any slots that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.</p>
        <p className="mb-5">1.3. No <a href="#slot" className="underline">slot(s)</a> should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. If you find any <a href="#slot" className="underline">slot</a> on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.</p>
        <p className="mb-5">1.5. We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
        <p>2.4. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
      </section>

      <section className="pt-10">
        <h1 className="mb-5">2. Privacy</h1>
        <p className="mb-5">2.1. Your privacy is important to us. It is mintmes policy to respect your privacy regarding any information we may collect from you across our website, mintme, and other sites we own and operate. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why were collecting it and how it will be used.</p>
        <p>2.2. We only retain collected information for as long as necessary to provide you with your requested service. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.</p>
      </section>

      <section className="pt-10">
        <h1 id="expire" className="mb-5">3. Violations</h1>
        <p className="mb-5">3.3. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, well protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
        <p className="mb-5">3.4. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p>3.5. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
      </section>

      <section className="py-10">
        <h1 className="mb-5">4. Infraestructure</h1>
        <p className="mb-5">4.1. To use acess our website and use our services, you need to have some understand about blockchain, smart contracts, Ethereum and NFTs.Your privacy is important to us. It is mintmes policy to respect your privacy regarding any information we may collect from you across our website, mintme, and other sites we own and operate.</p>
        <p className="mb-5">4.2. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why were collecting it and how it will be used.</p>
        <p className="mb-5">4.3. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, well protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
        <p className="mb-5">4.4. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p className="mb-5">4.5. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        <p>4.5. The Smart Contract that mint every slots is basead in the ERC 721 standard, but don`t follows the standard completly, is a hybrid contract with adaptations.</p>
      </section>
    </>
  )
}