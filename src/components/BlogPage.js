

import React from 'react';
import { useRouter } from 'next/router';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog post data based on the id
  // Example: You might fetch data from an API or a CMS like Builder.io

  return (
    <div>
      <h1>Blog Page</h1>
      {id ? (
        <p>Showing blog post with ID: {id}</p>
      ) : (
        <p>No blog post selected</p>
      )}
    </div>
  );
};

export default BlogPage;
