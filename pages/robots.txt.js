const RobotsTxt = () => null;

export async function getServerSideProps({ req, res }) {
  // Your logic to generate the content of the robots.txt file
  const content = `User-agent: *
Allow: 
Disallow:

Sitemap: https://unificars.com/sitemap.xml`;

  // Set the content type to text/plain
  res.setHeader("Content-Type", "text/plain");
  // Write the content of the robots.txt file
  res.write(content);
  // End the response
  res.end();

  // Return an empty object for getServerSideProps
  return { props: {} };
}

export default RobotsTxt;
