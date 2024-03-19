import { useParams, useLoaderData } from "react-router-dom";
import Spinner from "../components/Spinner";

/* Second method retrieving job data using feature from react dom,
   and so we make it globaly and can access where always we want
*/
const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return <h1>Job: {job.title} </h1>;
};

// Feature from react router
const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

export { JobPage as default, jobLoader };
