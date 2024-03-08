import { getContacts } from "./contacts";

async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export { loader };
