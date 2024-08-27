import React from "react";

const SitemapXml = () => null;

export async function getServerSideProps({ res }) {
  const xmlContent = `
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://unificars.com/</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://unificars.com/buy-used-cars</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/sell-used-cars</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/contact</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/become-our-partner</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/assured-cars</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/car-health-report</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/scrap-cars</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/challan-check</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/about</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/blog/Car-Segments-Of-India</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/term-conditions</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/privacy-policy</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://unificars.com/cars/hyundai_creta_1.6_e+_vtvt--2019-20-dl?id=32455&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/maruti_ritz_vxi--2016-dl?id=32298&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/mahindra_xuv500_w6_fwd--2017-hr?id=32223&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/maruti_celerio_vxi_green--2016-dl?id=31413&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/hyundai_creta_1.6_sx+_auto_crdi--2016-2017-dl?id=31152&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/maruti_swift_dzire__ldi--2014-dl?id=31007&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/ford_ecosport_1.5_trend_mt--2021-dl?id=30900&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/hyundai_creta_1.6_sx+_auto_vtvt--2017-dl?id=30898&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/maruti_celerio_vxi_green--2019-up?id=30876&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/tata_punch_1.2_adventure_bs6_mt--2021-dl?id=30865&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/hyundai_santro_gls--2010-dl?id=30857&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/toyota_innova_2.5_gx_7s--2014-dl?id=30846&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://unificars.com/cars/maruti_baleno_alpha--2022-dl?id=30838&amp;assured=0</loc>
  <lastmod>2024-07-02T08:56:59+00:00</lastmod>
  <priority>0.64</priority>
</url>


</urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(xmlContent);
  res.end();

  return {
    props: {},
  };
}

export default SitemapXml;
